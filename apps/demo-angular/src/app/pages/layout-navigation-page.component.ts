import { Component } from '@angular/core';
import { ComponentPreviewComponent } from '../docs/component-preview.component';
import { LayoutNavigationExampleComponent } from '../examples/layout-navigation-example.component';
import { layoutNavigationExampleCode } from '../examples/layout-navigation-example.code';

@Component({
  selector: 'app-layout-navigation-page',
  standalone: true,
  imports: [ComponentPreviewComponent, LayoutNavigationExampleComponent],
  template: `
    <div>
      <h1 style="font-size: 2.5rem; font-weight: bold; margin-bottom: 1rem; color: var(--erb-color-neutral-fg);">Layout & Navigation</h1>
      <p style="color: var(--erb-color-fg-muted); margin-bottom: 2rem; font-size: 1.125rem;">
        Components used for page layout and navigation.
      </p>

      <app-component-preview
        title="Layout & Navigation Components"
        description="A showcase of breadcrumbs and cards."
        [codeTs]="layoutNavigationExampleCode"
        [codeHtml]="'<app-layout-navigation-example></app-layout-navigation-example>'">
        <app-layout-navigation-example></app-layout-navigation-example>
      </app-component-preview>
    </div>
  `
})
export class LayoutNavigationPageComponent {
  layoutNavigationExampleCode = layoutNavigationExampleCode;
}
