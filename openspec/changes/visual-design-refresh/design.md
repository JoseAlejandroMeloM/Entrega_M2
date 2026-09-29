# Design

## Visual direction

The interface uses a "connected market at dusk" direction: an ink foundation, warm neutral canvas, coral action color, mint operational color, and violet connective accents. Rounded rectangular geometry communicates approachable business software while thin borders, subtle grid texture, and layered shadows preserve clarity and professionalism.

## System architecture

Design tokens remain centralized in `tokens.css`. Base typography and ambient page treatment live in `base.css`; shell and landing composition live in `layout.css`; reusable controls and surfaces live in `components.css`; domain styles remain separated across catalog, shopping, sales, and business stylesheets. No component owns duplicated color or spacing rules that belong in the shared system.

## Motion and interaction

Motion is used to explain hierarchy rather than decorate every element. The landing visualization floats gently, live indicators pulse, primary actions lift, and cards reveal through short transitions. Every animation and nonessential transition is disabled under `prefers-reduced-motion: reduce`.

## Responsive behavior

The home hero collapses from two columns to one, dense business grids use fluid `minmax` columns, and navigation becomes a horizontally scrollable row on narrow screens. Controls retain full-width mobile targets, content avoids horizontal page overflow, and focus indicators remain visible against light and dark surfaces.

## Verification

Run strict OpenSpec validation, component-size checks, the full test suite, and a production build. Inspect the public home, catalog, authentication, dashboard, and at least one operational route at desktop and mobile widths. Confirm focus, contrast, hover, and reduced-motion rules are present without changing application behavior.

