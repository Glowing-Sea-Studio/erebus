import { Component } from '@angular/core';
import { ComponentPreviewComponent } from '../docs/component-preview.component';
import { FormsExampleComponent } from '../examples/forms-example.component';


import { formsExampleCode } from '../examples/forms-example.code';

@Component({
  selector: 'app-forms-page',
  standalone: true,
  imports: [ComponentPreviewComponent, FormsExampleComponent],
  template: `
    <div>
      <h1 style="font-size: 2.5rem; font-weight: bold; margin-bottom: 1rem; color: var(--erb-color-neutral-fg);">Form Controls</h1>
      <p style="color: var(--erb-color-fg-muted); margin-bottom: 2rem; font-size: 1.125rem;">
        Inputs, Textareas, Checkboxes, Radios, Switches, and Sliders.
      </p>
      
      <app-component-preview 
        title="Basic Usage" 
        description="A showcase of standard form controls."
        [codeTs]="formsExampleCode"
        [codeHtml]="'<app-forms-example></app-forms-example>'">
        <app-forms-example></app-forms-example>
      </app-component-preview>
    </div>
  `
})
export class FormsPageComponent {
  formsExampleCode = formsExampleCode;
}
