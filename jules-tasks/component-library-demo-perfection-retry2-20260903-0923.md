# Task: Component library & demo/Storybook correctness pass (retry 2)

## Context

Erebus is an Nx monorepo design-system: a shared token package (`packages/tokens`) consumed by an Angular component library (`packages/angular`), a React component library (`packages/react`), plus `packages/core` (shared CSS) and `packages/icons`. Tokens are authored as JSON under `packages/tokens/src/{primitive,semantic,component,themes}` and compiled to `packages/tokens/dist/{css/variables.css, js/tokens.ts, json/tokens.json}` via `node packages/tokens/build.mjs` (invoked as the `build` script in `packages/tokens/package.json`). Both frameworks have Storybook setups used as the component "demo" system.

This is the third pass at the same underlying goal (from-top-to-bottom correctness, no new features). History, in order, all on `main`:

1. `jules-tasks/component-library-demo-perfection-20260902-0009.md` — original spec.
2. `jules-tasks/component-library-demo-perfection-retry-20260902-1309.md` — a retry spec written after a prior Jules session thrashed on `.nx` cache, polluted its diff with `.angular/cache/**`, and self-reported a token-collision fix that was never actually on disk.
3. A Jules session against spec #2 produced PR #2 (commit `671401d`, merged as `e29296e` on `main`), which claimed to fully map design tokens, fix hardcoded colors, and get "all 107 tests" passing in `packages/react`.
4. On 2026-09-03, PR #2's claims were re-verified against the actual working tree (not re-trusted at face value) and found materially incomplete. The findings are appended to the bottom of spec #2's file and are the direct basis for this task. **Read `jules-tasks/component-library-demo-perfection-retry-20260902-1309.md` in full before starting** — it has the full original goal, acceptance criteria, and constraints that still apply, plus the "New findings from this verification pass (2026-09-03)" section with exact file/line evidence for what's broken.

## Goal

Fix the three concretely-verified regressions/gaps left by PR #2, then resume the broader correctness pass from spec #2's acceptance criteria (Storybook builds, full component audit, `nx build` for all packages).

### 1. Dangling design-token CSS variable references (highest priority)

Diffing every `--erb-*` custom property referenced under `packages/{core,angular,react}/src` against everything actually defined in `packages/tokens/dist/css/variables.css` turned up roughly 70 dangling references — CSS that reads a `--erb-*` variable which is never defined anywhere in the compiled token output, so the browser silently ignores the declaration (no fallback given).

Concrete confirmed example: `packages/core/src/components/callout.css:30` has `background-color: var(--erb-color-danger-3);` and `--erb-color-danger-3` does not exist in `dist/css/variables.css` — the callout's danger-variant background never actually applies.

Other dangling names found (same class of bug, audit for all occurrences, this list is representative not exhaustive):
`--erb-color-{danger,success,warning,info,neutral,primary}-*`, `--erb-color-{bg,fg,border,text,surface}-*`, `--erb-typography-*`, `--erb-spacing-*`, `--erb-font-{size,weight,family}-*`, `--erb-z-index-*`, `--erb-container-*`, `--erb-transition-*`.

**Do NOT touch** the `--erb-{flex,grid,stack,inline}-*-{gap,align,justify,wrap,direction,cols,cols-*,align-*}` family (e.g. `--erb-flex-gap`, `--erb-grid-cols-lg`). These are legitimate component-local runtime custom properties set inline by the layout primitives themselves (Flex/Grid/Stack/Inline components) and always read with a CSS fallback (e.g. `var(--erb-flex-gap, 0)`) — they are intentionally not design tokens and are not part of this bug class. Confirm this distinction yourself before changing anything: a real dangling token has no sane fallback and there's no component code anywhere setting that exact custom property inline.

For each genuine dangling reference:
- If it's clearly a misnamed/renamed reference to a token that does exist (e.g. `--erb-color-danger-3` vs. an actual `--erb-color-danger-*` scale token that does exist under a different suffix), fix the CSS to reference the correct existing token name.
- If there's no existing token that covers the semantic need, add the missing token to the appropriate `packages/tokens/src/{primitive,semantic,component}/**` JSON file (matching the existing token schema/scale conventions already in use there), then regenerate `packages/tokens/dist/**` by running the token package's build script — **never hand-edit `dist/**` directly.**
- After each fix, re-run the same dangling-var diff (grep every `--erb-*` used in source vs. every `--erb-*` defined in the regenerated `dist/css/variables.css`) and confirm the count actually goes down, on disk, before moving to the next one or reporting progress.

### 2. Node engine / test runner regression

PR #2 added `jsdom@30.0.1` to `packages/react`'s dev dependencies for its Vitest setup, which pulls in `undici@8.10.1` as a transitive dependency. `undici@8.10.1`'s own `package.json` declares `"engines": {"node": ">=22.19.0"}`. This repo's root `package.json` still declares `"engines": {"node": ">=20.0.0"}`, and running `npx vitest run` inside `packages/react` on Node `v20.19.5` fails immediately for every test file with:

```
TypeError: webidl.util.markAsUncloneable is not a function
 ❯ new CacheStorage .../undici/lib/web/cache/cachestorage.js:20:17
```

resulting in 82 collection errors and 0 tests actually executed — despite PR #2's description claiming "all 107 tests pass". That claim was evidently only true on whatever Node version Jules's own sandbox happened to run, not on the Node version this repo's `engines` field advertises as supported.

Fix this by pinning `jsdom` (and/or `undici` if it can be pinned independently) in `packages/react/package.json` to versions that are compatible with Node `>=20.0.0`, so the repo's stated engine support remains true. Do not simply raise `engines.node` to `>=22.19.0` to make the problem disappear — that silently drops support for Node 20 for everyone else using this repo, which is a bigger change than a test-tooling bug warrants. After pinning, actually run `packages/react`'s full Vitest suite (whatever Node version is available in your own environment — state which Node version you verified on) and confirm tests execute and pass, not just that `pnpm install` succeeds.

### 3. Stray debug artifact

`used_tokens.txt` (442 lines) was committed at the repository root by PR #2 — it looks like a one-off `grep`/audit output, not source code or anything referenced by build tooling. Delete it.

### 4. Resume the original correctness pass

Once 1–3 are fixed and verified, continue working through the acceptance criteria in `jules-tasks/component-library-demo-perfection-retry-20260902-1309.md` that are still unverified/incomplete as of the 2026-09-03 notes appended to that file:
- Storybook builds cleanly for Angular (`packages/angular/.storybook`) with zero build errors.
- React's demo/build pipeline builds cleanly.
- `nx build` (or equivalent per-package targets) succeeds for `angular`, `react`, `tokens`, `core`, and `icons`.
- A full audit for hardcoded hex/rgb colors that should be tokens (PR #2 claimed to have done this — spot-check it rather than assuming it's complete, the same way the token-mapping and test claims from PR #2 turned out to be partially wrong).
- Every component under `packages/angular/src/*` and `packages/react/src/*` with a corresponding Storybook story: story exists, renders without runtime/console errors, exercises primary interactive states.

## Acceptance Criteria

- [ ] Zero dangling `--erb-*` design-token references remain in `packages/{core,angular,react}/src/**` (verified by re-running the used-vs-defined diff described above after your fixes, with the count and method shown in the PR description) — excluding the `--erb-{flex,grid,stack,inline}-*` runtime custom-property family, which is explicitly out of scope.
- [ ] `packages/tokens/dist/**` is regenerated via the token build script (never hand-edited) and committed in sync with any `packages/tokens/src/**` additions.
- [ ] `packages/react`'s Vitest suite actually executes and passes on a Node version `>=20.0.0` (state the exact Node version tested), with no `engines`/`jsdom`/`undici` version mismatch causing collection failures.
- [ ] Root `used_tokens.txt` is deleted.
- [ ] Angular Storybook builds with zero errors.
- [ ] React's demo/build pipeline builds with zero errors.
- [ ] `nx build` succeeds for `angular`, `react`, `tokens`, `core`, and `icons`.
- [ ] Hardcoded-color audit re-checked (not just re-asserted) with concrete evidence (grep output or equivalent) in the PR description.
- [ ] A real branch exists on the remote with incremental pushed commits, and the PR description lists every fix made and how each was verified on disk.

## Constraints

- Do not run Playwright, Cypress, or any headless-browser/e2e/UI test runner — they routinely hang or crash this sandbox and kill the session. Verify UI behavior via static/type checks and unit tests only, and describe manual verification steps in the PR description instead.
- Never run destructive git commands (`git reset --hard`, `git checkout -- .` / `git restore .`, `git clean -fd`/`-fdx`, unresolved `git stash`, force-push, history rewrite on pushed commits). Never discard uncommitted changes. Commit work incrementally and frequently so nothing is lost if the session stops early.
- **NEVER modify any `.gitignore` file** (root or nested). **NEVER touch, stage, or create files under any `.angular/`, `.nx/`, or `.cache/` directory anywhere in the repo.** Do not `git add -A`; do not add `.angular` or `.nx` under any circumstance. If hundreds of files under one of these directories appear in your diff, stop — that's a bug in what you just ran, not something to commit.
- Do not spend time debugging or "fixing" `.nx` workspace cache/daemon state. Work around hangs/misbehavior by running the underlying tool directly (e.g. `--skip-nx-cache`) instead of poking at `.nx` internals.
- Do not hand-edit `packages/tokens/dist/**` — always regenerate from `packages/tokens/src/**` via the token build script, then commit the regenerated output.
- Do not raise `engines.node` above `>=20.0.0` as a shortcut for the jsdom/undici issue — fix it by pinning dependency versions instead (see section 2 above for the reasoning).
- Do not introduce new component features, new components, or unrelated refactors. This is a correctness/consistency pass: fix wiring, tokens, stories, colors, build breakage, and the specific test-tooling regression above — do not redesign APIs.
- Keep Angular and React implementations of the same component visually/behaviorally consistent with each other where they're meant to mirror one another.
- This is an Nx monorepo — prefer `nx` targets over ad hoc build commands where available.
- Work incrementally: commit per logical group (e.g., per fix category or per component) rather than one giant commit.
- Create and push a real git branch immediately after your plan is approved, before any substantive work. Commit and push incrementally and frequently. This branch is the safety net against session crashes.
- After any step where you claim a fix was made, verify it actually landed on disk in that same turn (`git diff` / `git status` / re-reading the changed file, or re-running the relevant check/test) before reporting it as done and before moving to the next step. Do not report progress that isn't independently verifiable in the working tree.
- If a session crash or restart occurs, verify previously-claimed work is still present on disk before resuming forward progress — do not assume a prior turn's "done" claim is still true after an interruption.

## Relevant files/areas

- `packages/tokens/src/{primitive,semantic,component,themes}/**` — token sources
- `packages/tokens/dist/{css/variables.css, js/tokens.ts, json/tokens.json}` — compiled token output (regenerate, don't hand-edit)
- `packages/tokens/build.mjs`, `packages/tokens/package.json` — token build script (`getConfig(theme)` factory, one Style Dictionary pass per theme)
- `packages/core/src/components/*.css` — shared component CSS, primary location of the dangling-token bug (e.g. `callout.css:30`)
- `packages/angular/src/**`, `packages/react/src/**` — per-framework components
- `packages/react/package.json`, `packages/react/vitest.config.ts`, `packages/react/setupTests.ts` — Vitest/jsdom setup, source of the Node-engine regression
- `packages/angular/.storybook/**` — Angular Storybook config
- `used_tokens.txt` (repo root) — delete
- `jules-tasks/component-library-demo-perfection-retry-20260902-1309.md` — full original spec, constraints, and the 2026-09-03 verification notes this task is based on
- `.gitignore` (root) — do not modify; already hardened at commit `5be5ee2`
