# Spec Delta

## ADDED Requirements

### Requirement: Cohesive visual system
The frontend SHALL apply one recognizable visual system across public, account, catalog, and role-protected routes using centralized tokens for color, typography, spacing, radius, borders, shadows, and interaction states. Visual styling SHALL NOT alter route access, business operations, or the session-only meaning of the prototype.

#### Scenario: Move between application areas
- **WHEN** a visitor moves from a public route to an account or business route
- **THEN** navigation, headings, controls, cards, notices, and status treatments remain visually consistent while the route-specific content remains distinguishable

#### Scenario: Use an interactive control
- **WHEN** a visitor focuses, hovers, disables, or activates a link, button, input, or select
- **THEN** the interface provides a visible state with sufficient contrast and without hiding the element's accessible name

### Requirement: Responsive visual composition
The frontend SHALL preserve readable hierarchy and usable controls from narrow mobile screens through desktop screens without horizontal page overflow.

#### Scenario: View the application on a narrow screen
- **WHEN** the viewport is 360 CSS pixels wide
- **THEN** hero content, cards, forms, grids, navigation, and operational rows reflow without clipped content or inaccessible actions

### Requirement: Motion with user preference support
The frontend SHALL use restrained motion for hierarchy and feedback while honoring the operating system reduced-motion preference.

#### Scenario: View the standard animated interface
- **WHEN** reduced motion is not requested
- **THEN** ambient, entrance, hover, and live-status motion remains subtle and does not block interaction

#### Scenario: Request reduced motion
- **WHEN** `prefers-reduced-motion: reduce` is active
- **THEN** nonessential animations, smooth scrolling, and decorative transitions are disabled

