# supply-chain Specification

## Purpose

Allow authorized store and distributor users to compare supplier offers, create purchase orders, advance fulfillment, and update store inventory through transparent session-only mock workflows.

## Requirements

### Requirement: Store-scoped supplier comparison and ordering
The application SHALL expose supplier offers only to authorized store users, show product, distributor, price, minimum quantity, and delivery information, and create a pending supplier order only for the user's assigned store after validating the selected offer and positive whole-number quantity.

#### Scenario: Compare offers
- **WHEN** a store administrator opens the supplier area and selects a product
- **THEN** the application lists comparable offers and allows sorting and filtering by transparent criteria

#### Scenario: Create an order
- **WHEN** authorized store staff submit a valid offer and quantity
- **THEN** one pending supplier order is added for their store with a stable item and price snapshot

#### Scenario: Reject unauthorized or invalid ordering
- **WHEN** another role, an unknown offer, or an invalid quantity attempts to create an order
- **THEN** no order or inventory state changes and useful feedback is shown

### Requirement: Distributor fulfillment and idempotent delivery
The application SHALL allow the owning distributor to advance a supplier order through `pending`, `confirmed`, `shipped`, and `delivered`; delivery SHALL increase only the destination store's matching inventory entry once.

#### Scenario: Fulfill an order
- **WHEN** the owning distributor advances a valid order through the allowed sequence
- **THEN** the order status is updated and delivery increases the destination inventory quantity

#### Scenario: Prevent repeated delivery
- **WHEN** a delivered order is submitted for delivery again
- **THEN** the inventory is unchanged and the order remains delivered
