# Context
We are working on the `Glowing-Sea-Studio/erebus` design system monorepo. It contains core CSS (`packages/core`) and component libraries for React (`packages/react`) and Angular (`packages/angular`).
Currently, layout components like `AppShell`, `Header`, `Sidebar`, and `Footer` are just semantic wrappers without built-in responsive behavior. The user wants to elevate this library to a "Bootstrap-like" level by implementing a fully responsive layout system and ensuring Modals and Notifications (Toasts) are also mobile-friendly.

# Goal
Perform a complete overhaul of the Layout components (`AppShell`, `Header`, `Sidebar`, `Footer`) to create a fully responsive, plug-and-play layout system for both React and Angular. On desktop, the Sidebar should be pinned to the side. On mobile, it should collapse into an off-canvas Drawer triggered by a Hamburger button in the Header. Modals and Toasts must also be verified/updated for mobile responsiveness.

# Acceptance Criteria
## 1. Core CSS (`packages/core/src/components/`)
- Update `app-shell.css`, `header.css`, and `sidebar.css` using CSS Grid/Flexbox and `@media (max-width: 768px)` breakpoints.
- The Sidebar should be hidden on mobile by default and slide in as an off-canvas drawer with a backdrop overlay when active.
- Modals (`modal.css`) should be responsive (e.g., taking up near full screen or docking at the bottom on mobile).
- Toasts (`toast.css`) should stack cleanly at the bottom-center or top-center on mobile devices.

## 2. React Components (`packages/react/`)
- `AppShell`: Introduce a React Context (`AppShellContext`) to manage the state `isMobileSidebarOpen` and a function `toggleMobileSidebar()`.
- `Header`: Add an optional `showHamburgerMenu` prop. If true, display a hamburger icon on mobile that calls `toggleMobileSidebar()`.
- `Sidebar`: Read from `AppShellContext`. When `isMobileSidebarOpen` is true on mobile, render it with an overlay and a close button.

## 3. Angular Components (`packages/angular/`)
- Implement the exact same responsive layout system using Angular Signals (`signal<boolean>`) in an `AppShellService`.
- `AppShellComponent`: Provide the `AppShellService`.
- `ErbHeaderComponent`: Add a hamburger button (conditionally visible via CSS media query) that toggles the sidebar state in the service.
- `SidebarComponent`: Inject the service and reactively bind a class/attribute (e.g., `data-mobile-open="true"`) to show the drawer and overlay.

## 4. Documentation & Demos
- Update the demo applications (`apps/demo-react/src/App.tsx` and `apps/demo-angular/src/app/app.ts`) to use this new responsive behavior. Remove any hardcoded styles in the demo layout in favor of the new built-in AppShell layout.

# Constraints
- Do not run Playwright, Cypress, or any headless-browser/e2e/UI test runner — they routinely hang or crash this sandbox and kill the session. Verify UI behavior via static/type checks and unit tests only, and describe manual verification steps in the PR description instead.
- Never run destructive git commands (`git reset --hard`, `git checkout -- .` / `git restore .`, `git clean -fd`/`-fdx`, unresolved `git stash`, force-push, history rewrite on pushed commits). Never discard uncommitted changes. Commit work incrementally and frequently so nothing is lost if the session stops early.
- Keep the `AGENTS.md` rules in mind: strict TypeScript, logical CSS properties (`inset-inline-start`, etc.), no raw CSS values (use `--erb-*` variables), React functional components with `'use client'` only where needed, and Angular standalone components with `ChangeDetectionStrategy.OnPush` and signals.
