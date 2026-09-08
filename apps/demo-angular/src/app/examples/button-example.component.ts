import { Component } from '@angular/core';
import { ErbButtonDirective, BadgeComponent, TagComponent } from '@glowing-sea-studio/erebus-angular';

@Component({
  selector: 'app-button-example',
  standalone: true,
  imports: [ErbButtonDirective, BadgeComponent, TagComponent],
  template: `
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <section>
        <h3 style="font-size: 1.25rem; font-weight: bold; color: var(--erb-color-neutral-fg);">Buttons</h3>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center; margin-top: 1rem;">
          <button erbButton variant="solid" color="primary">Primary Solid</button>
          <button erbButton variant="outline" color="neutral">Neutral Outline</button>
          <button erbButton variant="ghost" color="danger">Danger Ghost</button>
        </div>
      </section>

      <section>
        <h3 style="font-size: 1.25rem; font-weight: bold; color: var(--erb-color-neutral-fg);">Badges & Tags</h3>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center; margin-top: 1rem;">
          <erb-badge color="success">Success Badge</erb-badge>
          <erb-badge color="warning">Warning Badge</erb-badge>
          <erb-tag>Default Tag</erb-tag>
        </div>
      </section>
    </div>
  `
})
export class ButtonExampleComponent {}
