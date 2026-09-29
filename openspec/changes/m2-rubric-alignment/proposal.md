# Proposal

## Why

The React frontend builds and its existing tests pass, but the implemented route catalog and role policies do not fully match the M2 project definition. The shared chat route is missing for clients, distributor employee subroles are not separated at route and mutation boundaries, and the current chat operation accepts arbitrary recipients.

## What Changes

- Align the central route catalog with the documented `/chat` route and restrict store reports to store administrators.
- Give distributor order access only to administrators, sales employees, and logistics employees; keep distributor inventory for administrators and inventory employees.
- Enforce the same distributor subrole policy in order-status mutations.
- Make chat participants role-compatible and organization-aware at the local mock boundary, while keeping the behavior session-only.
- Add focused tests for canonical routes, subrole access, order transitions, and chat participants.

## Non-goals

- No backend, real authentication, real-time messaging, payment processing, OCR, or external service.
- No README or AI-LOG reorganization in this change; those are handled separately.
- No remote Git operation, deployment, or change to the historical M1 prototype.

## Impact

The change affects central destinations, distributor order authorization, chat utilities/page state, and related tests. It preserves the approved React/Vite/JavaScript stack and all existing client shopping and store sales transitions.
