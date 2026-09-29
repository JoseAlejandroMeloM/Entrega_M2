# Spec Delta

## MODIFIED Requirements

### Requirement: Navigable foundation routes
The frontend SHALL display the documented public and protected routes, including the shared `/chat` route for authenticated client, store, and distributor accounts, while keeping business routes protected by the same central destination policy used by navigation. Store reports SHALL be administrator-only. Distributor order access SHALL distinguish sales and logistics employees from inventory employees, and distributor inventory access SHALL distinguish inventory employees from sales and logistics employees.

#### Scenario: Shared chat access
- **WHEN** an authenticated client, store account, or distributor account opens `/chat`
- **THEN** the protected route renders the role-compatible session chat and the navigation exposes the same destination

#### Scenario: Visit a known foundation route
- **WHEN** a visitor opens `/`, `/login`, `/register`, or `/products` in the new application
- **THEN** the home view identifies ConectaNegocio, login and registration present mock account forms to signed-out visitors, and products presents store-contextual catalog browsing

#### Scenario: Refresh a foundation route
- **WHEN** a visitor refreshes a known foundation route, including a product detail URL, while served as static files
- **THEN** the route remains available without a server-side route handler, subject to the visitor's current account and selected-store state

#### Scenario: Visit an unknown route
- **WHEN** a visitor opens a route not provided by the current application
- **THEN** a not-found message and a working way back to the home view are displayed

#### Scenario: Store report restriction
- **WHEN** a store inventory employee opens `/store/reports` directly
- **THEN** the route redirects safely to that user's store dashboard and does not render report data

#### Scenario: Distributor subrole restrictions
- **WHEN** a distributor sales or logistics employee opens `/distributor/orders`, or an inventory employee opens `/distributor/inventory`
- **THEN** the permitted route renders; the opposite subroles are redirected and cannot reach the restricted business view
