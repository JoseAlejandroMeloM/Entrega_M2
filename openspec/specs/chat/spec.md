# chat Specification

## Purpose

Provide a role-aware local messaging view for the supported store and distributor conversations while clearly communicating that messages are session-only mock data.

## Requirements

### Requirement: Authorized conversation access
The application SHALL expose chat only to authorized store and distributor users, show conversations relevant to the current account, and prevent sending empty or unauthorized messages.

#### Scenario: View a conversation
- **WHEN** an authorized user opens chat
- **THEN** the application displays the relevant local conversation and identifies the session-only mock behavior

#### Scenario: Send a message
- **WHEN** an authorized user submits nonempty trimmed text to an available conversation
- **THEN** one message is appended with sender, recipient, conversation, and ISO-compatible timestamp

#### Scenario: Reject invalid message
- **WHEN** a signed-out user, unauthorized recipient, or empty message attempts to send
- **THEN** no message is appended and feedback identifies the problem
