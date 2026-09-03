# Task: Make the Erebus component library & demo/Storybook system fully correct (retry)

## Context

Erebus is an Nx monorepo design-system: a shared token package (`packages/tokens`) consumed by both an Angular component library (`packages/angular`) and a React component library (`packages/react`), plus `packages/core` and `packages/icons`. Tokens are authored as JSON under `packages/tokens/src/{primitive,semantic,component,themes}` and compiled to `packages/tokens/dist/{css/variables.css, js/tokens.ts, json/tokens.json}`. Both frameworks have Storybook setups (see `packages/angular/.storybook`) used as the component "demo" system.

The libraries are large — dozens of components on each side (accordion, alert, alert-dialog, app-shell, avatar(-group), badge, banner, bottom-nav, breadcrumb, button(-group), callout, card, carousel, checkbox(-group), ColorPicker, combobox, CommandPalette, DatePicker, DateRangePicker, drawer, field, FileUpload, menu, modal, multi-select, pagination, popover, progress, radio(-group), rating, select, sidebar, slider, stepper, switch, table, tabs, tag(s-input), TimePicker, Toast, tooltip, and more). The goal is a from-top-to-bottom correctness pass, not new features.

**This is a retry of a previous session that failed to make real progress.** A prior Jules session on this repo spent ~12 hours and made near-zero progress on the actual acceptance criteria below. Instead it: thrashed repeatedly trying to debug `.nx` workspace cache/daemon behavior instead of working around it, rewrote the root `.gitignore` and let ~629 build-cache files under `.angular/cache/**` flood into its diff, and self-reported a fix (a Style Dictionary token collision between `dark.json`/`light.json`) that turned out to never actually be present on disk after a crash/restart — i.e. its verbal progress reports did not match the real working tree, and no PR or even a pushed branch was ever produced. Read the constraints below carefully — they exist specifically to prevent a repeat of that failure mode.

The root `.gitignore` on `main` was hardened (commit `5be5ee2`) to explicitly exclude `**/.angular`, `**/.angular/`, `**/.nx`, `**/.nx/`, `**/.cache`, `**/.cache/` everywhere in the tree, while re-including `packages/tokens/dist/**` via a trailing negation rule (so the compiled token output stays tracked despite the blanket `dist/` ignore). Pull latest `main` before starting so you have this in place.

## Goal

Bring the component library and its demo/Storybook system to a fully working, visually correct state:

1. **Every component renders and functions correctly** in both `packages/angular` and `packages/react`, in its Storybook demo/story, with no console errors, no broken imports, no missing story args, and no obviously broken interactive behavior (open/close, selection, keyboard nav, form binding, etc., for the components that have that behavior).
2. **Design tokens are correctly wired end-to-end**: every component's styles reference valid, existing tokens from `packages/tokens` (no dangling/misspelled token references, no hardcoded colors that should be tokens, no component left un-themed). `packages/tokens/dist/*` must be regenerated from `packages/tokens/src/*` so the compiled CSS/JS/JSON is in sync with the source JSON (check for and use the existing token build script rather than hand-editing dist files).
3. **Colors/themes are correct**: verify components pick up theme tokens correctly across the themes defined in `packages/tokens/src/themes` (e.g., light/dark if present) — no components stuck with wrong/default colors, no contrast-breaking mismatches introduced by the token wiring.
4. **Storybook builds cleanly** for the Angular package (`packages/angular/.storybook`) and for React's demo setup if one exists, with zero build errors/warnings that indicate broken stories, and all stories load in the Storybook UI without runtime errors.
5. Fix the `881a1b9 fix(tokens): patch invalid token references` line of work if you find further instances of the same class of bug (invalid/dangling token references) that were missed.

## Acceptance Criteria

- [ ] For every component under `packages/angular/src/*` and `packages/react/src/*` that has a corresponding Storybook story, the story exists, renders without runtime/console errors, and exercises the component's primary interactive states. **Unverified** — not checked in this pass.
- [x] `packages/tokens` builds successfully from source JSON, and `packages/tokens/dist/{css/variables.css,js/tokens.ts,json/tokens.json}` are regenerated (not hand-edited) and committed in sync with `packages/tokens/src/**`. Verified 2026-09-03: `node packages/tokens/build.mjs` reproduces the committed `dist/**` byte-for-byte (`git status` clean after rebuild), via the light/dark two-pass `build.mjs` from commit `5e4858c`.
- [ ] No component file references a token name/CSS variable that does not exist in the compiled token output. **Still broken** — verified 2026-09-03 by diffing every `--erb-*` referenced under `packages/{core,angular,react}/src` against `packages/tokens/dist/css/variables.css`: ~70 dangling *design*-token refs remain (the flex/grid/stack `--erb-*-gap`/`-align`/`-justify`/etc. custom props are component-local runtime values with CSS fallbacks and are fine — not tokens). Confirmed real breakage example: `packages/core/src/components/callout.css:30` does `background-color: var(--erb-color-danger-3);` with no fallback and `--erb-color-danger-3` is not defined anywhere in `dist/css/variables.css`, so the rule silently no-ops. Other dangling names of the same class: `--erb-color-{danger,success,warning,info,neutral,primary}-*`, `--erb-color-{bg,fg,border,text,surface}-*`, `--erb-typography-*`, `--erb-spacing-*`, `--erb-font-{size,weight,family}-*`, `--erb-z-index-*`, `--erb-container-*`, `--erb-transition-*`. The `671401d` "fully map design tokens" PR reduced but did not eliminate this class of bug from goal item 5 / `881a1b9`.
- [ ] No component has hardcoded hex/rgb color values where a semantic/component token should be used instead. **Unverified** — `671401d` claims this is done; not re-audited in this pass beyond the dangling-var check above.
- [ ] Angular Storybook builds successfully with no errors. **Unverified** — not run in this pass.
- [ ] React's demo/build pipeline builds successfully with no errors. **Unverified** — not run in this pass.
- [ ] `nx build` succeeds for `angular`, `react`, `tokens`, `core`, and `icons`. **Unverified** — not run in this pass (tokens build alone was verified above).
- [ ] Existing unit tests pass. **Blocked, not verified** — `671401d` claims "all 107 tests pass" but running `npx vitest run` in `packages/react` here fails with 82 collection errors, 0 tests executed: `TypeError: webidl.util.markAsUncloneable is not a function` from `undici@8.10.1` (pulled in by `jsdom@30.0.1`, added in `671401d`). `undici@8.10.1`'s own `package.json` declares `"engines": {"node": ">=22.19.0"}`, while this repo's root `package.json` still declares `"engines": {"node": ">=20.0.0"}` and the local dev Node is `v20.19.5` — the merged PR raised the real Node requirement without updating `engines`/CI, so the claimed passing run could only have happened on a newer Node than this repo advertises it supports.
- [x] A real branch exists on the remote with incremental pushed commits, and a PR description lists every component touched. Satisfied by PR #2 (`671401d` → merged as `e29296e`), now on `main`.

### New findings from this verification pass (2026-09-03)

- `used_tokens.txt` (442 lines, a scratch grep-output file) was committed at the repo root by `671401d` / PR #2 — dead debug artifact, not source, should be deleted.
- Node engines mismatch above should be resolved one way or the other: either bump `engines.node` to `>=22.19.0` (and CI's Node version) to match what `jsdom@30`/`undici@8` actually require, or pin `jsdom`/`undici` to versions compatible with Node 20.

## Constraints

- Do not run Playwright, Cypress, or any headless-browser/e2e/UI test runner — they routinely hang or crash this sandbox and kill the session. Verify UI behavior via static/type checks and unit tests only, and describe manual verification steps in the PR description instead.
- Never run destructive git commands (`git reset --hard`, `git checkout -- .` / `git restore .`, `git clean -fd`/`-fdx`, unresolved `git stash`, force-push, history rewrite on pushed commits). Never discard uncommitted changes. Commit work incrementally and frequently so nothing is lost if the session stops early.
- Do not hand-edit `packages/tokens/dist/**` — always regenerate it from `packages/tokens/src/**` via the project's token build tooling, then commit the regenerated output.
- Do not introduce new component features, new components, or unrelated refactors. This is a correctness/consistency pass: fix wiring, tokens, stories, colors, and build breakage — do not redesign APIs.
- Keep Angular and React implementations of the same component visually/behaviorally consistent with each other where they're meant to mirror one another.
- This is an Nx monorepo — prefer `nx` targets (check `nx.json` / each `package.json` for available scripts) over ad hoc build commands, and check `packages/tokens/package.json` for the token generation script specifically.
- Work incrementally: commit per logical group (e.g., per component or per token category) rather than one giant commit, so partial progress is preserved and reviewable.

### Additional constraints (added for this retry — read carefully)

1. **NEVER modify any `.gitignore` file** (root or nested). **NEVER touch, stage, or create files under any `.angular/`, `.nx/`, or `.cache/` directory anywhere in the repo** — these are build caches, not source, and are already correctly excluded on `main`. If build tooling writes into them, that is expected and they must stay untracked. Do not `git add -A`, do not `git add .angular` / `git add .nx`, under any circumstance. If you ever see hundreds of files under one of these directories appearing in your diff, stop and treat it as a bug in what you just ran — do not commit it.
2. **Do not spend time debugging or "fixing" `.nx` workspace cache/daemon state.** If a command seems to hang or misbehave because of the `.nx` cache, work around it (e.g. run the underlying tool directly instead of via the nx cache/daemon, or pass `--skip-nx-cache`) rather than poking at `.nx` internals or trying to repair/delete cache directories.
3. **Create and push a real git branch immediately after your plan is approved, before any substantive work.** Commit and push incrementally and frequently (per logical group/component). This branch is the safety net against session crashes — do not wait until the very end to create a branch or PR.
4. **After any step where you claim a fix or change was made, verify it actually landed on disk in that same turn** (e.g. `git diff` / `git status` / re-reading the changed file) before reporting it as done and before moving to the next step. Do not report progress in your messages that isn't independently verifiable in the working tree — if you're not sure, check before claiming.
5. **If a session crash or restart occurs, verify previously-claimed work is still present on disk before resuming forward progress.** Do not assume a prior turn's claim of "done" is still true after any interruption — re-check with `git status`/`git diff` first.

## Relevant files/areas

- `packages/tokens/src/{primitive,semantic,component,themes}/**` — token sources
- `packages/tokens/dist/{css/variables.css, js/tokens.ts, json/tokens.json}` — compiled token output (regenerate, don't hand-edit)
- `packages/tokens/package.json` — token build script
- `packages/angular/src/**` — Angular components (one directory per component)
- `packages/angular/.storybook/**` — Angular Storybook config
- `packages/react/src/**` — React components (one directory per component)
- `packages/react/package.json` — React package scripts (demo/build)
- `nx.json`, root `package.json` — workspace/build orchestration
- `.gitignore` (root) — do not modify; already hardened at commit `5be5ee2`
