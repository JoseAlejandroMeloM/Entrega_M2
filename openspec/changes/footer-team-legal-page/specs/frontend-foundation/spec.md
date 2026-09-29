# Spec Delta

## ADDED Requirements

### Requirement: Persistent team and legal footer
The application SHALL display the five project members with their supplied institutional email addresses in a semantic footer on every route. The footer SHALL include a working link to a public terms-and-conditions page.

#### Scenario: Contact a project member
- **WHEN** a visitor reaches the footer on any route
- **THEN** each team member's name and institutional address are visible and the address is available as a `mailto:` link

#### Scenario: Open legal information
- **WHEN** a visitor follows the terms-and-conditions footer link
- **THEN** the application renders `/terms` without requiring authentication

### Requirement: Honest terms for the academic prototype
The terms page SHALL explain the prototype's scope, simulated operations, acceptable use, local data behavior, intellectual property, availability, limitations, changes, and project contact without claiming production services or legal capabilities that do not exist.

#### Scenario: Review service limitations
- **WHEN** a visitor reads the terms page
- **THEN** the page clearly states that accounts, payments, invoices, analysis, messaging, and commercial operations are demonstrations and do not create real transactions

