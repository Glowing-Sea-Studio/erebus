# Task: Make the Erebus component library & demo/Storybook system fully correct

## Context

Erebus is an Nx monorepo design-system: a shared token package (`packages/tokens`) consumed by both an Angular component library (`packages/angular`) and a React component library (`packages/react`), plus `packages/core` and `packages/icons`. Tokens are authored as JSON under `packages/tokens/src/{primitive,semantic,component,themes}` and compiled to `packages/tokens/dist/{css/variables.css, js/tokens.ts, json/tokens.json}`. Both frameworks have Storybook setups (see `packages/angular/.storybook`) used as the component "demo" system.

The libraries are large — dozens of components on each side (accordion, alert, alert-dialog, app-shell, avatar(-group), badge, banner, bottom-nav, breadcrumb, button(-group), callout, card, carousel, checkbox(-group), ColorPicker, combobox, CommandPalette, DatePicker, DateRangePicker, drawer, field, FileUpload, menu, modal, multi-select, pagination, popover, progress, radio(-group), rating, select, sidebar, slider, stepper, switch, table, tabs, tag(s-input), TimePicker, Toast, tooltip, and more). The goal is a from-top-to-bottom correctness pass, not new features.

There is a lot of work-in-progress uncommitted local state in this repo unrelated to this task (unstaged edits across many token/component files, plus some deleted scratch scripts at the repo root). Do not assume that diff represents the target state — treat the repo as you find it in your own checkout/branch, and scope your changes to what this spec asks for.

## Goal

Bring the component library and its demo/Storybook system to a fully working, visually correct state:

1. **Every component renders and functions correctly** in both `packages/angular` and `packages/react`, in its Storybook demo/story, with no console errors, no broken imports, no missing story args, and no obviously broken interactive behavior (open/close, selection, keyboard nav, form binding, etc., for the components that have that behavior).
2. **Design tokens are correctly wired end-to-end**: every component's styles reference valid, existing tokens from `packages/tokens` (no dangling/misspelled token references, no hardcoded colors that should be tokens, no component left un-themed). `packages/tokens/dist/*` must be regenerated from `packages/tokens/src/*` so the compiled CSS/JS/JSON is in sync with the source JSON (check for and use the existing token build script rather than hand-editing dist files).
3. **Colors/themes are correct**: verify components pick up theme tokens correctly across the themes defined in `packages/tokens/src/themes` (e.g., light/dark if present) — no components stuck with wrong/default colors, no contrast-breaking mismatches introduced by the token wiring.
4. **Storybook builds cleanly** for the Angular package (`packages/angular/.storybook`) and for React's demo setup if one exists, with zero build errors/warnings that indicate broken stories, and all stories load in the Storybook UI without runtime errors.
5. Fix the `881a1b9 fix(tokens): patch invalid token references` line of work if you find further instances of the same class of bug (invalid/dangling token references) that were missed.

## Acceptance Criteria

- [ ] For every component under `packages/angular/src/*` and `packages/react/src/*` that has a corresponding Storybook story, the story exists, renders without runtime/console errors, and exercises the component's primary interactive states.
- [ ] `packages/tokens` builds successfully from source JSON, and `packages/tokens/dist/{css/variables.css,js/tokens.ts,json/tokens.json}` are regenerated (not hand-edited) and committed in sync with `packages/tokens/src/**`.
- [ ] No component file references a token name/CSS variable that does not exist in the compiled token output (grep for `var(--` / token identifiers in component styles and cross-check against `packages/tokens/dist/css/variables.css`).
- [ ] No component has hardcoded hex/rgb color values where a semantic/component token should be used instead (aside from truly one-off cases already using a documented escape hatch, if any).
- [ ] Angular Storybook (`nx run angular:storybook` or the equivalent script in `packages/angular/package.json`) builds successfully with no errors.
- [ ] React's demo/build pipeline (check `packages/react/package.json` for the relevant script) builds successfully with no errors.
- [ ] `nx build` (or the relevant per-package build targets) succeeds for `angular`, `react`, `tokens`, `core`, and `icons`.
- [ ] Existing unit tests pass; add/update unit tests where a fix changes component logic in a way worth covering.
- [ ] PR description lists every component touched and, for each, what was wrong (missing token, wrong token, missing story, broken story, dead import, etc.) and how it was verified.

## Constraints

- Do not run Playwright, Cypress, or any headless-browser/e2e/UI test runner — they routinely hang or crash this sandbox and kill the session. Verify UI behavior via static/type checks and unit tests only, and describe manual verification steps in the PR description instead.
- Never run destructive git commands (`git reset --hard`, `git checkout -- .` / `git restore .`, `git clean -fd`/`-fdx`, unresolved `git stash`, force-push, history rewrite on pushed commits). Never discard uncommitted changes. Commit work incrementally and frequently so nothing is lost if the session stops early.
- Do not hand-edit `packages/tokens/dist/**` — always regenerate it from `packages/tokens/src/**` via the project's token build tooling, then commit the regenerated output.
- Do not introduce new component features, new components, or unrelated refactors. This is a correctness/consistency pass: fix wiring, tokens, stories, colors, and build breakage — do not redesign APIs.
- Keep Angular and React implementations of the same component visually/behaviorally consistent with each other where they're meant to mirror one another.
- This is an Nx monorepo — prefer `nx` targets (check `nx.json` / each `package.json` for available scripts) over ad hoc build commands, and check `packages/tokens/package.json` for the token generation script specifically.
- Work incrementally: commit per logical group (e.g., per component or per token category) rather than one giant commit, so partial progress is preserved and reviewable.

## Relevant files/areas

- `packages/tokens/src/{primitive,semantic,component,themes}/**` — token sources
- `packages/tokens/dist/{css/variables.css, js/tokens.ts, json/tokens.json}` — compiled token output (regenerate, don't hand-edit)
- `packages/tokens/package.json` — token build script
- `packages/angular/src/**` — Angular components (one directory per component)
- `packages/angular/.storybook/**` — Angular Storybook config
- `packages/react/src/**` — React components (one directory per component)
- `packages/react/package.json` — React package scripts (demo/build)
- `nx.json`, root `package.json` — workspace/build orchestration
