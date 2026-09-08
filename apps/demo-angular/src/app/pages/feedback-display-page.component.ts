import { Component } from '@angular/core';
import { ComponentPreviewComponent } from '../docs/component-preview.component';
import { FeedbackDisplayExampleComponent } from '../examples/feedback-display-example.component';
import { feedbackDisplayExampleCode } from '../examples/feedback-display-example.code';

@Component({
  selector: 'app-feedback-display-page',
  standalone: true,
  imports: [ComponentPreviewComponent, FeedbackDisplayExampleComponent],
  template: `
    <div>
      <h1 style="font-size: 2.5rem; font-weight: bold; margin-bottom: 1rem; color: var(--erb-color-neutral-fg);">Feedback & Display</h1>
      <p style="color: var(--erb-color-fg-muted); margin-bottom: 2rem; font-size: 1.125rem;">
        Components used to provide feedback to the user or display data effectively.
      </p>

      <app-component-preview
        title="Feedback & Display Components"
        description="A showcase of alerts, spinners, skeletons, avatars, and progress bars."
        [codeTs]="feedbackDisplayExampleCode"
        [codeHtml]="'<app-feedback-display-example></app-feedback-display-example>'">
        <app-feedback-display-example></app-feedback-display-example>
      </app-component-preview>
    </div>
  `
})
export class FeedbackDisplayPageComponent {
  feedbackDisplayExampleCode = feedbackDisplayExampleCode;
}
