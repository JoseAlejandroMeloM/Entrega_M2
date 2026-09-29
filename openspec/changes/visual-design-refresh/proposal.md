# Proposal

## Why

The application already demonstrates its role-based business flows, but the interface still looks like an early prototype. The visual hierarchy, brand expression, feedback surfaces, and responsive navigation need a coherent system so the product feels intentional and can be presented confidently without changing its business behavior.

## What Changes

- Introduce a distinctive visual identity based on deep ink, warm paper, coral, mint, and violet accents.
- Redesign the public landing page so the value proposition and connected commerce workflow are immediately understandable.
- Apply consistent elevated surfaces, controls, status treatments, navigation, and responsive spacing to every route.
- Add restrained motion for entrance, hover, ambient background, and live-status details, with a complete reduced-motion fallback.
- Preserve all existing routes, role permissions, session-only notices, operations, and accessible semantics.

## Non-goals

- No backend, external design library, remote font, image service, or new business feature.
- No change to authentication, authorization, data transitions, routing, or mock-data boundaries.
- No deployment, remote Git operation, README rewrite, or AI-LOG rewrite.

## Impact

The change affects the shared CSS system and public home composition. It remains within React, JSX, and plain CSS, keeps components below the course size limit, and leaves application logic unchanged.

