import test from 'node:test';
import assert from 'node:assert/strict';
import { demoUsers } from '../src/data/demoUsers.js';
import { distributors, stores } from '../src/data/organizations.js';
import { products } from '../src/data/products.js';
import { storeInventory } from '../src/data/storeInventory.js';
import { supplierOffers } from '../src/data/supplierOffers.js';
import { createPurchaseOrderState, updateOrderStatusState } from '../src/utils/orderUtils.js';
import { getOffersForProduct, sortOffersByPrice } from '../src/utils/supplierUtils.js';
import { getGrossProfit, getPurchaseRecommendations, getSalesByPaymentMethod } from '../src/utils/reportUtils.js';

const admin = demoUsers.find(({ role }) => role === 'store_admin');
const distributor = demoUsers.find(({ role }) => role === 'distributor_admin');
const offer = supplierOffers[0];
const emptyState = { orders: [], sales: [], storeInventory: [...storeInventory] };

test('offers are comparable and sorted by transparent criteria', () => {
  const offers = getOffersForProduct('p001', supplierOffers, distributors);
  assert.equal(offers.length, 3);
  assert.equal(sortOffersByPrice(offers)[0].price, Math.min(...offers.map(({ price }) => price)));
});

test('store inventory user creates a pending supplier order', () => {
  const state = createPurchaseOrderState(emptyState, admin, { offerId: offer.id,
    productId: offer.productId, distributorId: offer.distributorId, quantity: 2 }, products, supplierOffers, '2026-09-28T12:00:00Z');
  assert.equal(state.orders[0].status, 'pending');
  assert.equal(state.orders[0].orderType, 'supplier');
});

test('distributor advances an order and delivery increases store inventory once', () => {
  const created = createPurchaseOrderState(emptyState, admin, { offerId: offer.id,
    productId: offer.productId, distributorId: offer.distributorId, quantity: 2 }, products, supplierOffers, '2026-09-28T12:00:00Z');
  let state = created;
  for (const status of ['confirmed', 'shipped', 'delivered']) state = updateOrderStatusState(state, distributor, state.orders[0].id, status, stores);
  const after = state.storeInventory.find(({ storeId, productId }) => storeId === admin.storeId && productId === offer.productId);
  assert.equal(after.quantity, storeInventory.find(({ storeId, productId }) => storeId === admin.storeId && productId === offer.productId).quantity + 2);
  const repeated = updateOrderStatusState(state, distributor, state.orders[0].id, 'delivered', stores);
  assert.equal(repeated.storeInventory.find(({ id }) => id === after.id).quantity, after.quantity);
});

test('distributor employee subroles can only advance their assigned stage', () => {
  const sales = demoUsers.find(({ role, subRole }) => role === 'distributor_employee' && subRole === 'sales');
  const logistics = { ...demoUsers.find(({ role, subRole }) => role === 'distributor_employee' && subRole === 'logistics'), distributorId: offer.distributorId };
  const inventory = { ...demoUsers.find(({ role, subRole }) => role === 'distributor_employee' && subRole === 'inventory'), distributorId: offer.distributorId };
  const created = createPurchaseOrderState(emptyState, admin, { offerId: offer.id,
    productId: offer.productId, distributorId: offer.distributorId, quantity: 2 }, products, supplierOffers, '2026-09-28T12:00:00Z');
  const confirmed = updateOrderStatusState(created, sales, created.orders[0].id, 'confirmed', stores);
  assert.equal(confirmed.orders[0].status, 'confirmed');
  assert.equal(updateOrderStatusState(confirmed, sales, created.orders[0].id, 'shipped', stores).orders[0].status, 'confirmed');
  const shipped = updateOrderStatusState(confirmed, logistics, created.orders[0].id, 'shipped', stores);
  assert.equal(shipped.orders[0].status, 'shipped');
  assert.equal(updateOrderStatusState(shipped, inventory, created.orders[0].id, 'delivered', stores).orders[0].status, 'shipped');
});

test('report helpers derive payment totals and low-stock recommendations', () => {
  const sales = [{ total: 100, payments: [{ method: 'nequi', amount: 100 }], items: [] }];
  assert.deepEqual(getSalesByPaymentMethod(sales), { nequi: 100 });
  assert.equal(getPurchaseRecommendations(storeInventory, sales, products).some(({ product }) => product), true);
  assert.equal(getGrossProfit([{ storeId: 's001', items: [{ productId: 'p001', quantity: 2, unitPrice: 8900 }] }], storeInventory), 6600);
});
