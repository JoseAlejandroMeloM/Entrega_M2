# Proposal

## Why

The published prototype needs visible team attribution and a credible legal-information surface. The current footer only identifies the product and does not provide project contacts or explain the terms governing use of the academic demo.

## What Changes

- Add the five team members and their institutional email addresses to a shared footer.
- Add a public `/terms` route with realistic terms and conditions that remain explicit about simulated behavior and the absence of a production service.
- Link the legal page from the footer on every route.
- Keep personal contact data limited to the institutional addresses explicitly supplied for the project.

## Non-goals

- No privacy-policy claim, legal incorporation, commercial contract, backend, consent storage, or production authentication.
- No change to business operations, permissions, mock data, or application deployment in this change.

## Impact

The change affects the public shell, route catalog, shared project-contact configuration, responsive footer styles, and route tests. It does not change business state.

