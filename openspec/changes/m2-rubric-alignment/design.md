# Design

## Route and permission policy

The documented shared `/chat` route becomes the only navigated chat destination and accepts `client`, store, and distributor accounts. Existing feature routes remain centralized in `destinations.js`. Store reports become administrator-only. Distributor orders use one route with `distributor_admin`, `distributor_employee/sales`, and `distributor_employee/logistics`; distributor inventory uses `distributor_admin` and `distributor_employee/inventory`.

## Chat boundary

`ChatPage` derives compatible participants from the authenticated role and the loaded demo/registered identities. A store can message a distributor, a distributor can message a store, and a client can message a store. `sendMessageState` receives the available identities and rejects missing recipients or incompatible role pairs. Existing conversation IDs remain valid; new pairs receive a deterministic session conversation ID. This is a local UX/consistency boundary, not production security.

## Order transitions

`updateOrderStatusState` retains the existing sequential state machine and adds subrole authorization: administrators can advance all allowed transitions, sales employees can confirm pending orders, and logistics employees can ship confirmed orders or deliver shipped orders. Inventory employees cannot reach the order route or mutate order status.

## Verification

Add pure tests for canonical route visibility, store-report isolation, distributor subrole boundaries, compatible chat recipients, invalid chat recipients, and valid role-specific order transitions. Run all existing tests, component-size verification, production build, and strict OpenSpec validation.
