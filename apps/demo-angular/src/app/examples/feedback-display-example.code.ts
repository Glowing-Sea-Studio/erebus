export const feedbackDisplayExampleCode = `import { Component } from '@angular/core';
import { ErbAlertComponent, SpinnerComponent, SkeletonComponent, AvatarComponent, AvatarGroupComponent, ProgressComponent } from '@glowing-sea-studio/erebus-angular';

@Component({
  selector: 'app-feedback-display-example',
  standalone: true,
  imports: [ErbAlertComponent, SpinnerComponent, SkeletonComponent, AvatarComponent, AvatarGroupComponent, ProgressComponent],
  template: \`
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <section>
        <h3 style="font-size: 1.25rem; font-weight: bold; color: var(--erb-color-neutral-fg);">Alerts</h3>
        <div style="display: flex; flex-direction: column; gap: 1rem; margin-top: 1rem;">
          <erb-alert intent="info" title="Information">
            This is an informational alert.
          </erb-alert>
        </div>
      </section>

      <section>
        <h3 style="font-size: 1.25rem; font-weight: bold; color: var(--erb-color-neutral-fg);">Loading & Placeholders</h3>
        <div style="display: flex; gap: 2rem; align-items: center; margin-top: 1rem;">
          <erb-spinner size="md"></erb-spinner>
          <div style="display: flex; flex-direction: column; gap: 0.5rem; flex: 1;">
            <erb-skeleton style="height: 20px; width: 100%;"></erb-skeleton>
            <erb-skeleton style="height: 20px; width: 80%;"></erb-skeleton>
          </div>
        </div>
      </section>

      <section>
        <h3 style="font-size: 1.25rem; font-weight: bold; color: var(--erb-color-neutral-fg);">Avatars</h3>
        <div style="display: flex; gap: 2rem; align-items: center; margin-top: 1rem;">
          <erb-avatar-group>
            <erb-avatar src="https://i.pravatar.cc/150?u=1" alt="User 1"></erb-avatar>
            <erb-avatar src="https://i.pravatar.cc/150?u=2" alt="User 2"></erb-avatar>
            <erb-avatar src="https://i.pravatar.cc/150?u=3" alt="User 3"></erb-avatar>
          </erb-avatar-group>
        </div>
      </section>

      <section>
        <h3 style="font-size: 1.25rem; font-weight: bold; color: var(--erb-color-neutral-fg);">Progress</h3>
        <div style="margin-top: 1rem;">
          <p style="color: var(--erb-color-neutral-fg); font-family: var(--erb-font-sans);">Progress</p>
          <erb-progress [value]="60"></erb-progress>
        </div>
      </section>
    </div>
  \`
})
export class FeedbackDisplayExampleComponent {}`;
