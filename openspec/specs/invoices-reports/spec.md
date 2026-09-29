# invoices-reports Specification

## Purpose

Provide transparent, session-only invoice analysis and store-scoped commercial indicators without implying OCR, accounting, persistence, or external integrations.

## Requirements

### Requirement: Honest store-scoped invoice analysis
The application SHALL label invoice analysis as a mock workflow, associate the result with the signed-in store, enrich known products and suppliers from local data, and keep invoice history restricted to that store.

#### Scenario: Analyze a demonstration invoice
- **WHEN** authorized store staff submit a PDF-shaped file in the invoice form
- **THEN** a transparent local analysis result is shown with supplier, products, quantities, costs, and session history

#### Scenario: Isolate invoice history
- **WHEN** a store user views invoice history
- **THEN** only invoices whose `storeId` matches the user's assigned store are displayed

### Requirement: Derived store reporting
Reports SHALL derive sales totals, payment-method totals, estimated gross profit using the matching inventory purchase cost when available, top-selling products, and low-stock recommendations from the current session state.

#### Scenario: Review indicators
- **WHEN** authorized store staff open reports
- **THEN** the view shows store-scoped indicators and recommendations without inventing persistent or external data

#### Scenario: Missing cost data
- **WHEN** a sale item has no known purchase cost
- **THEN** the estimated profit calculation remains deterministic and makes no claim that the cost is authoritative
