# Task Context
We have recently refactored the architecture of `apps/demo-react` and `apps/demo-angular` to act as a component documentation site (similar to TailwindCSS docs). 
The apps now have a layout with a Sidebar and a Router.
We have successfully extracted the "Button" and "Forms" sections from the giant `KitchenSink` component into their own dedicated pages (`ButtonPage`, `FormsPage`), complete with interactive previews and code snippets using `ComponentPreviewComponent` and Vite's `?raw` import strategy (or `.code.ts` workaround in Angular).

# Goal
Your task is to extract ALL REMAINING components from the `KitchenSink` into individual documentation pages for **both React and Angular**, ensuring strict feature parity between the two demo applications.

# Acceptance Criteria
- Look at `KitchenSink.tsx` (React) and `kitchen-sink.component.ts` (Angular) to see all the components currently demonstrated.
- For each group of components (e.g., Modals, Accordion, Data Display, Alerts, Navigation, etc.):
  1. Create a `<Component>Example` file (`.tsx` for React, `.component.ts` and `.code.ts` for Angular) containing the demonstration code.
  2. Create a `<Component>Page` file that wraps the example in the `ComponentPreview` and shows the code.
  3. Update `DocsLayout` sidebar to include a link to the new page.
  4. Update the Router configuration (`App.tsx` for React, `app.routes.ts` for Angular) to register the new route.
  5. Remove the extracted components from the `KitchenSink` so that eventually `KitchenSink` is empty or only serves as a very high-level overview.
- All code must pass `pnpm lint`, `pnpm typecheck`, and `pnpm build`.

# Constraints
- Maintain the exact same file naming and architectural pattern as `ButtonPage` / `FormsPage`.
- Remember that `demo-angular` uses `ng build` which uses `esbuild`, which DOES NOT support `?raw` imports! You MUST continue to use the `.code.ts` file workaround for Angular code snippets, exporting the raw string `export const myExampleCode = \`...\`;`.
- For React, you CAN use Vite's `?raw` imports.
- Do not run Playwright, Cypress, or any headless-browser/e2e/UI test runner — they routinely hang or crash this sandbox and kill the session. Verify UI behavior via static/type checks and unit tests only, and describe manual verification steps in the PR description instead.
- Never run destructive git commands (`git reset --hard`, `git checkout -- .` / `git restore .`, `git clean -fd`/`-fdx`, unresolved `git stash`, force-push, history rewrite on pushed commits). Never discard uncommitted changes. Commit work incrementally and frequently so nothing is lost if the session stops early.
