# Erebus

One design system, two native implementations. A complete, accessible component library for React and Angular — 75+ components, multiple themes, and light/dark support on every single one.

## Installation

### React

Install the React package and its peer dependencies via pnpm:

```bash
pnpm add @glowing-sea-studio/erebus-react @glowing-sea-studio/erebus-tokens @glowing-sea-studio/erebus-core
```

**Setup in your root file (e.g., `App.tsx` or `index.tsx`):**

```tsx
// Import the design system tokens and core styles
import '@glowing-sea-studio/erebus-tokens/dist/css/variables.css';
import '@glowing-sea-studio/erebus-core/src/components/index.css';

// Wrap your app in necessary providers
import { ToastProvider, AppShell } from '@glowing-sea-studio/erebus-react';

function App() {
  return (
    <ToastProvider>
      <AppShell>
        {/* Your app content */}
      </AppShell>
    </ToastProvider>
  );
}
```

### Angular

Install the Angular package and its peer dependencies via pnpm:

```bash
pnpm add @glowing-sea-studio/erebus-angular @glowing-sea-studio/erebus-tokens @glowing-sea-studio/erebus-core
```

**Setup in your root file (e.g., `app.component.ts`):**

```ts
import { Component } from '@angular/core';
import { ToastComponent, AppShellComponent } from '@glowing-sea-studio/erebus-angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ToastComponent, AppShellComponent],
  template: `
    <erb-app-shell>
      <!-- Your app content -->
      <erb-toast-container></erb-toast-container>
    </erb-app-shell>
  `
})
export class AppComponent {}
```

**Include styles in your `angular.json` or `styles.scss`:**

```css
@import '@glowing-sea-studio/erebus-tokens/dist/css/variables.css';
@import '@glowing-sea-studio/erebus-core/src/components/index.css';
```
