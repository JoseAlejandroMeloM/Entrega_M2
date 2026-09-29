# Design

## Shared attribution

Team names and institutional addresses live in one configuration module. `SiteFooter` maps that source into readable `mailto:` links so attribution is consistent on every page and can be maintained without duplicating JSX.

## Legal route

`/terms` is a public informational route in the centralized destination catalog. The page uses short, scannable sections covering scope, demo accounts, simulated operations, acceptable use, local data, intellectual property, availability, liability, changes, and contact. Its wording resembles a real service document while never implying that the prototype has production infrastructure or legal capabilities it does not possess.

## Presentation and accessibility

The footer uses semantic headings, an address element, lists, descriptive links, visible focus styles, and a responsive two-column layout that collapses on narrow screens. The legal page uses semantic sections and a single page heading.

## Verification

Test the public route catalog, the exact institutional contact list, component-size limit, full test suite, production build, strict OpenSpec validation, and visual behavior at desktop and mobile widths.

