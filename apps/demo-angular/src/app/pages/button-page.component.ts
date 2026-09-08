import { Component } from '@angular/core';
import { ComponentPreviewComponent } from '../docs/component-preview.component';
import { ButtonExampleComponent } from '../examples/button-example.component';


import { buttonExampleCode } from '../examples/button-example.code';

@Component({
  selector: 'app-button-page',
  standalone: true,
  imports: [ComponentPreviewComponent, ButtonExampleComponent],
  template: `
    <div>
      <h1 style="font-size: 2.5rem; font-weight: bold; margin-bottom: 1rem; color: var(--erb-color-neutral-fg);">Buttons & Badges</h1>
      <p style="color: var(--erb-color-fg-muted); margin-bottom: 2rem; font-size: 1.125rem;">
        Buttons are used to trigger actions. Badges and tags are used for labelling.
      </p>
      
      <app-component-preview 
        title="Basic Usage" 
        description="A showcase of standard buttons, badges, and tags."
        [codeTs]="buttonExampleCode"
        [codeHtml]="'<app-button-example></app-button-example>'">
        <app-button-example></app-button-example>
      </app-component-preview>
    </div>
  `
})
export class ButtonPageComponent {
  buttonExampleCode = buttonExampleCode;
}
