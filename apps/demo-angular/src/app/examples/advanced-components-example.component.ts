import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ErbTabsComponent, ErbTabsListComponent, ErbTabDirective, ErbTabsPanelComponent,
  AccordionComponent,
  ErbModalOverlayComponent, ErbModalContentComponent, ErbModalHeaderComponent, ErbModalTitleComponent, ErbModalBodyComponent, ErbModalFooterComponent, ErbButtonDirective,
  CarouselComponent,
  HeroComponent, LogoCloudComponent, FeatureGridComponent, TestimonialComponent, FAQComponent, CTAComponent,
  ErbStatComponent, TimelineComponent, TimelineItemComponent, EmptyStateComponent
} from '@glowing-sea-studio/erebus-angular';

@Component({
  selector: 'app-advanced-components-example',
  standalone: true,
  imports: [
    CommonModule,
    ErbTabsComponent, ErbTabsListComponent, ErbTabDirective, ErbTabsPanelComponent,
    AccordionComponent,
    ErbModalOverlayComponent, ErbModalContentComponent, ErbModalHeaderComponent, ErbModalTitleComponent, ErbModalBodyComponent, ErbModalFooterComponent, ErbButtonDirective,
    CarouselComponent,
    HeroComponent, LogoCloudComponent, FeatureGridComponent, TestimonialComponent, FAQComponent, CTAComponent,
    ErbStatComponent, TimelineComponent, TimelineItemComponent, EmptyStateComponent
  ],
  template: `
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <section>
        <h3 style="font-size: 1.25rem; font-weight: bold; color: var(--erb-color-neutral-fg);">Tabs</h3>
        <div style="margin-top: 1rem;">
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
      </section>

      <section>
        <h3 style="font-size: 1.25rem; font-weight: bold; color: var(--erb-color-neutral-fg);">Accordion</h3>
        <div style="display: flex; flex-direction: column; gap: 0.5rem; margin-top: 1rem;">
          <erb-accordion title="Is it accessible?">
            Yes. It adheres to the WAI-ARIA design pattern.
          </erb-accordion>
          <erb-accordion title="Is it styled?">
            Yes. It comes with default styles that matches the other components' aesthetic.
          </erb-accordion>
        </div>
      </section>

      <section>
        <h3 style="font-size: 1.25rem; font-weight: bold; color: var(--erb-color-neutral-fg);">Modal</h3>
        <div style="margin-top: 1rem;">
          <button erbButton (click)="isModalOpen.set(true)">Open Modal</button>
          <div *ngIf="isModalOpen()">
            <erb-modal-overlay (click)="isModalOpen.set(false)"></erb-modal-overlay>
            <erb-modal-content>
              <erb-modal-header>
                <erb-modal-title>Modal Title</erb-modal-title>
              </erb-modal-header>
              <erb-modal-body>
                <p style="color: var(--erb-color-neutral-fg); font-family: var(--erb-font-sans);">This is the modal body content. You can put any component here.</p>
              </erb-modal-body>
              <erb-modal-footer>
                <button erbButton variant="outline" (click)="isModalOpen.set(false)">Cancel</button>
                <button erbButton variant="solid" color="primary" (click)="isModalOpen.set(false)">Confirm</button>
              </erb-modal-footer>
            </erb-modal-content>
          </div>
        </div>
      </section>

      <section>
        <h3 style="font-size: 1.25rem; font-weight: bold; color: var(--erb-color-neutral-fg);">Carousel</h3>
        <div style="max-width: 400px; margin-top: 1rem;">
          <erb-carousel [images]="[
            { src: 'https://picsum.photos/400/200?random=1', alt: 'Slide 1' },
            { src: 'https://picsum.photos/400/200?random=2', alt: 'Slide 2' },
            { src: 'https://picsum.photos/400/200?random=3', alt: 'Slide 3' }
          ]"></erb-carousel>
        </div>
      </section>

      <section>
        <h3 style="font-size: 1.25rem; font-weight: bold; color: var(--erb-color-neutral-fg);">Marketing / Display</h3>
        <div style="display: flex; flex-direction: column; gap: 3rem; margin-top: 1rem;">
          <div>
            <h4 style="font-size: 1.125rem; font-weight: bold; color: var(--erb-color-neutral-fg); margin-bottom: 0.5rem;">Hero</h4>
            <erb-hero
              title="Build faster with Erebus"
              subtitle="The ultimate design system for your next big project."
              [primaryAction]="{ label: 'Get Started' }"
              [secondaryAction]="{ label: 'Documentation' }">
            </erb-hero>
          </div>

          <div>
            <h4 style="font-size: 1.125rem; font-weight: bold; color: var(--erb-color-neutral-fg); margin-bottom: 0.5rem;">LogoCloud</h4>
            <erb-logocloud
              title="Trusted by innovative teams worldwide"
              [logos]="[
                { src: 'https://via.placeholder.com/150x50?text=Logo+1', alt: 'Logo 1' },
                { src: 'https://via.placeholder.com/150x50?text=Logo+2', alt: 'Logo 2' },
                { src: 'https://via.placeholder.com/150x50?text=Logo+3', alt: 'Logo 3' },
                { src: 'https://via.placeholder.com/150x50?text=Logo+4', alt: 'Logo 4' }
              ]">
            </erb-logocloud>
          </div>

          <div>
            <h4 style="font-size: 1.125rem; font-weight: bold; color: var(--erb-color-neutral-fg); margin-bottom: 0.5rem;">FeatureGrid</h4>
            <erb-featuregrid
              [features]="[
                { title: 'Lightning Fast', description: 'Built on modern web standards for maximum performance.' },
                { title: 'Accessible', description: 'Fully compliant with WCAG 2.1 AA accessibility guidelines.' },
                { title: 'Customizable', description: 'Easily adapt the design system to match your brand identity.' }
              ]">
            </erb-featuregrid>
          </div>

          <div>
            <h4 style="font-size: 1.125rem; font-weight: bold; color: var(--erb-color-neutral-fg); margin-bottom: 0.5rem;">Testimonial</h4>
            <erb-testimonial
              quote="This design system is amazing! It makes building applications so much faster."
              author="John Doe"
              role="Frontend Developer"
              avatarUrl="https://i.pravatar.cc/150?u=4"
            ></erb-testimonial>
          </div>

          <div>
            <h4 style="font-size: 1.125rem; font-weight: bold; color: var(--erb-color-neutral-fg); margin-bottom: 0.5rem;">FAQ</h4>
            <erb-faq
              [items]="[
                { question: 'What is Erebus?', answer: 'Erebus is a comprehensive design system for modern web applications.' },
                { question: 'Is it free to use?', answer: 'Yes, Erebus is completely open-source and free to use in your projects.' },
                { question: 'Does it support Angular and React?', answer: 'Absolutely! We provide first-class support for both frameworks.' }
              ]">
            </erb-faq>
          </div>

          <div>
            <h4 style="font-size: 1.125rem; font-weight: bold; color: var(--erb-color-neutral-fg); margin-bottom: 0.5rem;">CTA</h4>
            <erb-cta
              title="Ready to dive in?"
              description="Start building your next masterpiece today with Erebus UI."
              [primaryAction]="{ label: 'Get Started' }"
              [secondaryAction]="{ label: 'Learn More' }">
            </erb-cta>
          </div>
        </div>
      </section>

      <section>
        <h3 style="font-size: 1.25rem; font-weight: bold; color: var(--erb-color-neutral-fg);">Data Display & States</h3>
        <div style="display: flex; flex-direction: column; gap: 3rem; margin-top: 1rem;">
          <div>
            <h4 style="font-size: 1.125rem; font-weight: bold; color: var(--erb-color-neutral-fg); margin-bottom: 0.5rem;">Stat</h4>
            <div style="display: flex; gap: 2rem;">
              <erb-stat label="Total Users" value="10,234" helpText="+12% from last month"></erb-stat>
              <erb-stat label="Revenue" value="$43,000" helpText="+5% from last month"></erb-stat>
            </div>
          </div>

          <div>
            <h4 style="font-size: 1.125rem; font-weight: bold; color: var(--erb-color-neutral-fg); margin-bottom: 0.5rem;">Timeline</h4>
            <erb-timeline>
              <erb-timeline-item title="Project Started" description="Initial commit and setup."></erb-timeline-item>
              <erb-timeline-item title="Alpha Release" description="First version released for internal testing."></erb-timeline-item>
              <erb-timeline-item title="Public Beta" description="Opened to the public." [isLast]="true"></erb-timeline-item>
            </erb-timeline>
          </div>

          <div>
            <h4 style="font-size: 1.125rem; font-weight: bold; color: var(--erb-color-neutral-fg); margin-bottom: 0.5rem;">EmptyState</h4>
            <erb-empty-state
              title="No projects found"
              description="Get started by creating a new project."
            >
              <button erbButton variant="solid" color="primary">Create Project</button>
            </erb-empty-state>
          </div>
        </div>
      </section>
    </div>
  `
})
export class AdvancedComponentsExampleComponent {
  isModalOpen = signal(false);
}
