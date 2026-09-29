import test from 'node:test';
import assert from 'node:assert/strict';
import { demoUsers } from '../src/data/demoUsers.js';
import { distributors, stores } from '../src/data/organizations.js';
import { products } from '../src/data/products.js';
import { invoices } from '../src/data/invoices.js';
import { analyzeInvoice } from '../src/utils/invoiceAnalyzer.js';
import { getChatPartners, getConversationMessages, sendMessageState } from '../src/utils/messageUtils.js';

test('invoice analyzer returns a transparent mock analysis', () => {
  const result = analyzeInvoice({ name: invoices[0].fileName }, stores, distributors, products);
  assert.equal(result.supplier.id, 'd001');
  assert.equal(result.items[0].product.id, 'p001');
  assert.equal(analyzeInvoice({ name: 'unknown.pdf' }, stores, distributors, products, 's002').store.id, 's002');
});

test('chat appends a trimmed message and conversation sorting is deterministic', () => {
  const user = demoUsers[0]; const state = { messages: [], chatNotice: null };
  const next = sendMessageState(state, user, { conversationId: 'conv001', recipientId: 'u002', text: '  Hola  ' }, '2026-09-28T12:00:00Z', demoUsers);
  assert.equal(next.messages[0].text, 'Hola');
  assert.equal(getConversationMessages(next.messages, 'conv001').length, 1);
  assert.equal(getChatPartners(user, demoUsers).every(({ role }) => role.startsWith('store_') || role === 'store_admin'), true);
  assert.equal(sendMessageState(state, user, { conversationId: 'conv001', recipientId: 'u005', text: 'No' }, '2026-09-28T12:00:00Z', demoUsers).messages.length, 0);
});
