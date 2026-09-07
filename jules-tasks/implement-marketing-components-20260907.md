# Context
We are working on the `Glowing-Sea-Studio/erebus` design system monorepo. It contains core CSS (`packages/core`) and component libraries for React (`packages/react`) and Angular (`packages/angular`).
In a previous task, the demo applications' `KitchenSink` components were updated to include advanced marketing and data-display components. However, the actual components in the design system packages are currently just empty scaffolded `div` elements.

# Goal
Fully implement the missing components (`Hero`, `LogoCloud`, `FeatureGrid`, `Testimonial`, `FAQ`, `CTA`, `Stat`, `Timeline`, and `EmptyState`) in both React and Angular, along with their associated CSS in `packages/core/src/components/`.

# Acceptance Criteria
1. **Core CSS (`packages/core/src/components/`)**:
   - Write fully responsive CSS for `hero.css`, `logo-cloud.css`, `feature-grid.css`, `testimonial.css`, `faq.css`, `cta.css`, `stat.css`, `timeline.css`, and `empty-state.css`.
   - Use only design tokens (`var(--erb-...)`) for colors, spacing, and typography. DO NOT use raw values.
2. **React Components (`packages/react/src/`)**:
   - Implement the components to accept standard React props matching what is currently passed in `apps/demo-react/src/KitchenSink.tsx` (e.g. `title`, `subtitle`, `primaryAction`, `secondaryAction`, `features` array, etc.).
3. **Angular Components (`packages/angular/src/`)**:
   - Implement the exact same components using Angular 18 Standalone components, `ChangeDetectionStrategy.OnPush`, and Angular Signals for inputs (`input()`).
   - The API must match the React version closely and satisfy the usage in `apps/demo-angular/src/app/kitchen-sink.component.ts`.
4. **Verification**:
   - Both demo applications must build successfully (`pnpm nx run demo-react:build` and `pnpm nx run demo-angular:build`).
   - All newly implemented components should render beautifully in the Kitchen Sink.

# Constraints
- Do not run Playwright, Cypress, or any headless-browser/e2e/UI test runner — they routinely hang or crash this sandbox and kill the session. Verify UI behavior via static/type checks and unit tests only, and describe manual verification steps in the PR description instead.
- Never run destructive git commands (`git reset --hard`, `git checkout -- .` / `git restore .`, `git clean -fd`/`-fdx`, unresolved `git stash`, force-push, history rewrite on pushed commits). Never discard uncommitted changes. Commit work incrementally and frequently so nothing is lost if the session stops early.
- Keep the `AGENTS.md` rules in mind: strict TypeScript, logical CSS properties (`inset-inline-start`, etc.), no raw CSS values (use `--erb-*` variables), React functional components with `'use client'` only where needed, and Angular standalone components with `ChangeDetectionStrategy.OnPush` and signals.
