# Context
We are working on the `Glowing-Sea-Studio/erebus` monorepo (Nx workspace). The repository publishes a design system for both React (`@glowing-sea-studio/erebus-react`) and Angular (`@glowing-sea-studio/erebus-angular`).
There are two demo applications: `apps/demo-react` and `apps/demo-angular`. They currently feature a basic "Kitchen Sink" layout displaying common components.

# Goal
The user wants to complete both demo applications by adding a proper layout, specifically including a Header and a Footer, and integrating "lots of other components" to make them look like complete, realistic applications rather than just a simple grid of components. 

# Acceptance Criteria
- Both `apps/demo-react` and `apps/demo-angular` must have a proper layout utilizing the design system's `Header` and `Footer` components (or `AppShell` if applicable).
- Additional components from the design system should be added to the demos to showcase advanced usage (e.g., `Accordion`, `Tabs`, `Carousel`, `Modal`/`Dialog`, `Sidebar`, `BottomNav`, `FeatureGrid`, `CTA`, `Testimonial`, etc.).
- The visual hierarchy and styling should remain consistent and use the existing CSS variables.
- Both React and Angular implementations must be kept in sync visually and functionally.

# Constraints
- Do not run Playwright, Cypress, or any headless-browser/e2e/UI test runner — they routinely hang or crash this sandbox and kill the session. Verify UI behavior via static/type checks and unit tests only, and describe manual verification steps in the PR description instead.
- Never run destructive git commands (`git reset --hard`, `git checkout -- .` / `git restore .`, `git clean -fd`/`-fdx`, unresolved `git stash`, force-push, history rewrite on pushed commits). Never discard uncommitted changes. Commit work incrementally and frequently so nothing is lost if the session stops early.
- Ensure all changes align with `AGENTS.md` rules (e.g., standalone components in Angular, functional components in React, no raw CSS values).
