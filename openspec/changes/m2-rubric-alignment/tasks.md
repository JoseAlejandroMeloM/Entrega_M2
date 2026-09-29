# Tasks

## 1. Central policies

- [x] 1.1 Replace duplicated role-specific chat paths with the documented shared `/chat` destination and preserve protected direct-route behavior.
- [x] 1.2 Restrict store reports, distributor orders, and distributor inventory according to the documented subroles.

## 2. Business boundaries

- [x] 2.1 Enforce distributor subrole permissions in `updateOrderStatusState` for confirmation, shipping, and delivery.
- [x] 2.2 Add role-compatible participant selection and recipient validation to the session chat operation.

## 3. Verification

- [x] 3.1 Update and extend route, order, and chat tests.
- [x] 3.2 Run component-size checks, all tests, production build, OpenSpec validation, and `git diff --check`.
