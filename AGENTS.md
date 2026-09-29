# Global Antigravity Development Rules

These rules apply strictly across every project, framework, and workflow in this workspace:

## 1. Inspection & Architecture First
- **Always inspect the existing project architecture first** before writing or modifying any code.
- **Never blindly replace an existing design system.**
- **Do not rewrite working architecture** without an explicit and well-justified reason.
- **Preserve existing functionality** unless the task explicitly mandates changing it.
- **Pre-Implementation Checklist:**
  1. Inspect the repository structure.
  2. Understand the existing architecture and patterns.
  3. Identify the current design system and CSS tokens/variables.
  4. Identify reusable components and libraries.
  5. Identify routing mechanisms.
  6. Identify existing dependencies.
  7. Identify testing, linting, and build commands.

## 2. UI/UX Intelligence & Design System
- **Use UI/UX Pro Max intelligence** whenever the project involves:
  - UI design
  - UX flows
  - Responsive layouts
  - Design systems
  - Accessibility
  - Visual hierarchy
  - Typography
  - Color selection
  - Component design
- **Treat UI/UX Pro Max as a design intelligence / recommendation layer**, not as permission to automatically redesign or discard established project styles.
- **UI Priorities:**
  - Usability
  - Accessibility (WCAG standards, contrast, semantics)
  - Responsive behavior across all screen sizes
  - Visual hierarchy
  - Performance
  - Consistency

## 3. Motion & Animation Standards
- When the project uses React, Vite, Next.js, or another compatible frontend:
  - Use Motion / Framer Motion **only where animation provides real, discernible UX value**.
  - Prefer subtle, purposeful animations (micro-interactions, smooth state transitions).
  - Avoid gratuitous, excessive, or distracting animations.
  - Strictly respect and implement `prefers-reduced-motion`.
  - Treat Motion/Framer Motion as an implementation tool, **not** as a mandate to animate every element.

## 4. Dependencies & Engineering Discipline
- **Zero unnecessary dependencies:** Leverage existing packages and native web standards wherever possible.
- **Always prefer production-quality implementation** over fragile, demo-only code.

## 5. Authenticity & Content Integrity
- **Never use fake business claims, fake testimonials, fake statistics, fake transactions, fake bookings, or fake success states.**
- Keep all copy, data structures, and representations authentic, professional, and accurate.

## 6. Client Identity Isolation
- For client projects/demos, **keep the client's branding and design identity strictly separate** from WebNest's own corporate branding.

## 7. Post-Implementation Verification & Reporting
After every implementation:
1. Run linter (`npm run lint` or project equivalent).
2. Run automated test suites (`npm test` / vitest / jest).
3. Run the production build (`npm run build`) to ensure zero bundling or typing regressions.
4. Inspect and verify affected routes and views.
5. Perform responsive and accessibility checks.
6. Clearly report **what changed** and **what remains**.
