import { Component } from '@angular/core';
import { ComponentPreviewComponent } from '../docs/component-preview.component';
import { AdvancedComponentsExampleComponent } from '../examples/advanced-components-example.component';
import { advancedComponentsExampleCode } from '../examples/advanced-components-example.code';

@Component({
  selector: 'app-advanced-components-page',
  standalone: true,
  imports: [ComponentPreviewComponent, AdvancedComponentsExampleComponent],
  template: `
    <div>
      <h1 style="font-size: 2.5rem; font-weight: bold; margin-bottom: 1rem; color: var(--erb-color-neutral-fg);">Advanced Components</h1>
      <p style="color: var(--erb-color-fg-muted); margin-bottom: 2rem; font-size: 1.125rem;">
        Complex and highly structured components.
      </p>

      <app-component-preview
        title="Advanced Components"
        description="A showcase of tabs, accordion, modals, carousels, marketing blocks, and data display components."
        [codeTs]="advancedComponentsExampleCode"
        [codeHtml]="'<app-advanced-components-example></app-advanced-components-example>'">
        <app-advanced-components-example></app-advanced-components-example>
      </app-component-preview>
    </div>
  `
})
export class AdvancedComponentsPageComponent {
  advancedComponentsExampleCode = advancedComponentsExampleCode;
}
