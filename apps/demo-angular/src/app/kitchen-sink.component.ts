import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  ErbButtonDirective,
  ErbCardComponent, ErbCardHeaderComponent, ErbCardTitleComponent, ErbCardBodyComponent, ErbCardFooterComponent,
  BadgeComponent, TagComponent, AvatarComponent, AvatarGroupComponent, SpinnerComponent, SkeletonComponent,
  ErbInputDirective, ErbTextareaDirective, ErbCheckboxComponent, ErbSwitchComponent, ErbRadioComponent,
  HeadingComponent, TextComponent, ErbAlertComponent,
  SliderComponent, ProgressComponent, BreadcrumbComponent,
  ErbTabsComponent, ErbTabsListComponent, ErbTabDirective, ErbTabsPanelComponent,
  AccordionComponent, ErbModalOverlayComponent, ErbModalContentComponent, ErbModalHeaderComponent, ErbModalTitleComponent, ErbModalBodyComponent, ErbModalFooterComponent,
  CarouselComponent, FeatureGridComponent, TestimonialComponent, CTAComponent
} from '@glowing-sea-studio/erebus-angular';

@Component({
  selector: 'app-kitchen-sink',
  standalone: true,
  imports: [
    CommonModule,
    ErbButtonDirective,
    ErbCardComponent, ErbCardHeaderComponent, ErbCardTitleComponent, ErbCardBodyComponent, ErbCardFooterComponent,
    BadgeComponent, TagComponent, AvatarComponent, AvatarGroupComponent, SpinnerComponent, SkeletonComponent,
    ErbInputDirective, ErbTextareaDirective, ErbCheckboxComponent, ErbSwitchComponent, ErbRadioComponent,
    HeadingComponent, TextComponent, ErbAlertComponent,
    SliderComponent, ProgressComponent, BreadcrumbComponent,
    ErbTabsComponent, ErbTabsListComponent, ErbTabDirective, ErbTabsPanelComponent,
    AccordionComponent, ErbModalOverlayComponent, ErbModalContentComponent, ErbModalHeaderComponent, ErbModalTitleComponent, ErbModalBodyComponent, ErbModalFooterComponent,
    CarouselComponent, FeatureGridComponent, TestimonialComponent, CTAComponent
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
          <div style="display: flex; gap: 1rem; align-items: center;">
            <p erbText>Slider</p>
            <div style="flex: 1;"><erb-slider [value]="50" [max]="100" [step]="1"></erb-slider></div>
          </div>
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

          <div>
            <p erbText>Progress</p>
            <erb-progress [value]="60"></erb-progress>
          </div>
        </div>
      </section>

      <section>
        <erb-heading [level]="2">Layout & Navigation</erb-heading>
        <div style="margin-top: 1rem; display: flex; flex-direction: column; gap: 1rem;">
          <erb-breadcrumb>
            <a href="#" style="color: var(--erb-color-primary-base); text-decoration: none;">Home</a>
            <a href="#" style="color: var(--erb-color-primary-base); text-decoration: none;">Components</a>
            <span style="color: var(--erb-color-fg-muted);" aria-current="page">Breadcrumb</span>
          </erb-breadcrumb>

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

      <section>
        <erb-heading [level]="2">Advanced Components</erb-heading>
        <div style="display: flex; flex-direction: column; gap: 2rem; margin-top: 1rem;">

          <div>
            <erb-heading [level]="3" style="margin-bottom: 1rem;">Tabs</erb-heading>
            <erb-tabs>
              <erb-tabs-list>
                <button erbTab>Tab 1</button>
                <button erbTab>Tab 2</button>
                <button erbTab>Tab 3</button>
              </erb-tabs-list>
              <div style="margin-top: 1rem;">
                <erb-tabs-panel>Content for Tab 1</erb-tabs-panel>
                <erb-tabs-panel>Content for Tab 2</erb-tabs-panel>
                <erb-tabs-panel>Content for Tab 3</erb-tabs-panel>
              </div>
            </erb-tabs>
          </div>

          <div>
            <erb-heading [level]="3" style="margin-bottom: 1rem;">Accordion</erb-heading>
            <div style="display: flex; flex-direction: column; gap: 0.5rem;">
              <erb-accordion title="Is it accessible?">
                Yes. It adheres to the WAI-ARIA design pattern.
              </erb-accordion>
              <erb-accordion title="Is it styled?">
                Yes. It comes with default styles that matches the other components' aesthetic.
              </erb-accordion>
            </div>
          </div>

          <div>
            <erb-heading [level]="3" style="margin-bottom: 1rem;">Modal</erb-heading>
            <button erbButton (click)="isModalOpen.set(true)">Open Modal</button>
            <div *ngIf="isModalOpen()">
              <erb-modal-overlay (click)="isModalOpen.set(false)"></erb-modal-overlay>
              <erb-modal-content>
                <erb-modal-header>
                  <erb-modal-title>Modal Title</erb-modal-title>
                </erb-modal-header>
                <erb-modal-body>
                  <p erbText>This is the modal body content. You can put any component here.</p>
                </erb-modal-body>
                <erb-modal-footer>
                  <button erbButton variant="outline" (click)="isModalOpen.set(false)">Cancel</button>
                  <button erbButton variant="solid" color="primary" (click)="isModalOpen.set(false)">Confirm</button>
                </erb-modal-footer>
              </erb-modal-content>
            </div>
          </div>

          <div>
            <erb-heading [level]="3" style="margin-bottom: 1rem;">Carousel</erb-heading>
            <div style="max-width: 400px;">
              <erb-carousel [images]="[
                { src: 'https://picsum.photos/400/200?random=1', alt: 'Slide 1' },
                { src: 'https://picsum.photos/400/200?random=2', alt: 'Slide 2' },
                { src: 'https://picsum.photos/400/200?random=3', alt: 'Slide 3' }
              ]"></erb-carousel>
            </div>
          </div>

          <div>
            <erb-heading [level]="3" style="margin-bottom: 1rem;">Marketing / Display</erb-heading>
            <div style="display: flex; flex-direction: column; gap: 2rem;">
              <erb-featuregrid></erb-featuregrid>
              <erb-testimonial
                quote="This design system is amazing! It makes building applications so much faster."
                author="John Doe"
                role="Frontend Developer"
                avatarUrl="https://i.pravatar.cc/150?u=4"
              ></erb-testimonial>
              <erb-cta>
                <div style="display: flex; flex-direction: column; align-items: center; text-align: center;">
                  <erb-heading [level]="3">Ready to dive in?</erb-heading>
                  <p erbText style="margin-bottom: 1rem;">Start building your application today with Erebus.</p>
                  <div style="display: flex; gap: 1rem;">
                    <button erbButton variant="solid" color="primary">Get Started</button>
                    <button erbButton variant="outline">Learn More</button>
                  </div>
                </div>
              </erb-cta>
            </div>
          </div>

        </div>
      </section>
    </div>
  `
})
export class KitchenSinkComponent {
  isModalOpen = signal(false);
}
