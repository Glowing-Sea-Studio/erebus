import { Component } from '@angular/core';
import { 
  ErbButtonDirective,
  ErbCardComponent, ErbCardHeaderComponent, ErbCardTitleComponent, ErbCardBodyComponent, ErbCardFooterComponent,
  BadgeComponent, TagComponent, AvatarComponent, AvatarGroupComponent, SpinnerComponent, SkeletonComponent,
  ErbInputDirective, ErbTextareaDirective, ErbCheckboxComponent, ErbSwitchComponent, ErbRadioComponent,
  HeadingComponent, TextComponent, ErbAlertComponent
} from '@glowing-sea-studio/erebus-angular';

@Component({
  selector: 'app-kitchen-sink',
  standalone: true,
  imports: [
    ErbButtonDirective,
    ErbCardComponent, ErbCardHeaderComponent, ErbCardTitleComponent, ErbCardBodyComponent, ErbCardFooterComponent,
    BadgeComponent, TagComponent, AvatarComponent, AvatarGroupComponent, SpinnerComponent, SkeletonComponent,
    ErbInputDirective, ErbTextareaDirective, ErbCheckboxComponent, ErbSwitchComponent, ErbRadioComponent,
    HeadingComponent, TextComponent, ErbAlertComponent
  ],
  template: `
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <section>
        <erb-heading [level]="2">Buttons & Badges</erb-heading>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center; margin-top: 1rem;">
          <button erbButton variant="solid" color="primary">Primary Solid</button>
          <button erbButton variant="outline" color="neutral">Neutral Outline</button>
          <button erbButton variant="ghost" color="danger">Danger Ghost</button>
          <erb-badge color="success">Success Badge</erb-badge>
          <erb-badge color="warning">Warning Badge</erb-badge>
          <erb-tag>Default Tag</erb-tag>
        </div>
      </section>

      <section>
        <erb-heading [level]="2">Form Controls</erb-heading>
        <div style="display: flex; flex-direction: column; gap: 1rem; margin-top: 1rem; max-width: 400px;">
          <input erbInput placeholder="Text input..." />
          <textarea erbTextarea placeholder="Textarea..."></textarea>
          <div style="display: flex; gap: 1rem;">
            <erb-checkbox id="chk1" label="Checkbox 1"></erb-checkbox>
            <erb-checkbox id="chk2" label="Checkbox 2"></erb-checkbox>
          </div>
          <div style="display: flex; gap: 1rem;">
            <erb-radio id="rad1" name="radio-demo" label="Radio 1"></erb-radio>
            <erb-radio id="rad2" name="radio-demo" label="Radio 2"></erb-radio>
          </div>
          <erb-switch id="sw1" label="Toggle switch"></erb-switch>
        </div>
      </section>

      <section>
        <erb-heading [level]="2">Feedback & Display</erb-heading>
        <div style="display: flex; flex-direction: column; gap: 1rem; margin-top: 1rem;">
          <erb-alert intent="info" title="Information">
            This is an informational alert.
          </erb-alert>
          
          <div style="display: flex; gap: 2rem; align-items: center;">
            <erb-spinner size="md"></erb-spinner>
            <div style="display: flex; flex-direction: column; gap: 0.5rem; flex: 1;">
              <erb-skeleton style="height: 20px; width: 100%;"></erb-skeleton>
              <erb-skeleton style="height: 20px; width: 80%;"></erb-skeleton>
            </div>
            <erb-avatar-group>
              <erb-avatar src="https://i.pravatar.cc/150?u=1" alt="User 1"></erb-avatar>
              <erb-avatar src="https://i.pravatar.cc/150?u=2" alt="User 2"></erb-avatar>
              <erb-avatar src="https://i.pravatar.cc/150?u=3" alt="User 3"></erb-avatar>
            </erb-avatar-group>
          </div>
        </div>
      </section>

      <section>
        <erb-heading [level]="2">Layout & Navigation</erb-heading>
        <div style="margin-top: 1rem;">
          <erb-card>
            <erb-card-header>
              <erb-card-title>Card Title</erb-card-title>
            </erb-card-header>
            <erb-card-body>
              <p erbText>Card body content goes here. It provides a flexible container.</p>
            </erb-card-body>
            <erb-card-footer>
              <button erbButton variant="solid" color="primary">Action</button>
            </erb-card-footer>
          </erb-card>
        </div>
      </section>
    </div>
  `
})
export class KitchenSinkComponent {}
