# Spec Delta

## MODIFIED Requirements

### Requirement: Authorized conversation access
The application SHALL expose chat through `/chat` to authenticated users with a role-compatible participant list. Clients may message stores, stores may message distributors, and distributors may message stores. Sending SHALL reject empty text, missing recipients, unknown identities, and incompatible role pairs; messages remain session-only.

#### Scenario: View a conversation
- **WHEN** an authorized user opens chat
- **THEN** the application displays the relevant local conversation and identifies the session-only mock behavior

#### Scenario: Send a message
- **WHEN** an authorized user submits nonempty trimmed text to an available conversation
- **THEN** one message is appended with sender, recipient, conversation, and ISO-compatible timestamp

#### Scenario: Reject invalid message
- **WHEN** a signed-out user, unauthorized recipient, or empty message attempts to send
- **THEN** no message is appended and feedback identifies the problem

#### Scenario: Select a compatible participant
- **WHEN** an authenticated user opens `/chat`
- **THEN** the page offers only participants valid for that user's role and the current local organization context

#### Scenario: Reject an invalid recipient
- **WHEN** a caller submits a missing, unknown, or incompatible recipient
- **THEN** no message is appended and the user receives visible feedback
