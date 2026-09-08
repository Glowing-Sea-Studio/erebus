export const layoutNavigationExampleCode = `import { Component } from '@angular/core';
import { BreadcrumbComponent, ErbCardComponent, ErbCardHeaderComponent, ErbCardTitleComponent, ErbCardBodyComponent, ErbCardFooterComponent, ErbButtonDirective } from '@glowing-sea-studio/erebus-angular';

@Component({
  selector: 'app-layout-navigation-example',
  standalone: true,
  imports: [BreadcrumbComponent, ErbCardComponent, ErbCardHeaderComponent, ErbCardTitleComponent, ErbCardBodyComponent, ErbCardFooterComponent, ErbButtonDirective],
  template: \`
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <section>
        <h3 style="font-size: 1.25rem; font-weight: bold; color: var(--erb-color-neutral-fg);">Breadcrumbs</h3>
        <div style="margin-top: 1rem; display: flex; flex-direction: column; gap: 1rem;">
          <erb-breadcrumb>
            <a href="#" style="color: var(--erb-color-primary-base); text-decoration: none;">Home</a>
            <a href="#" style="color: var(--erb-color-primary-base); text-decoration: none;">Components</a>
            <span style="color: var(--erb-color-fg-muted);" aria-current="page">Breadcrumb</span>
          </erb-breadcrumb>
        </div>
      </section>

      <section>
        <h3 style="font-size: 1.25rem; font-weight: bold; color: var(--erb-color-neutral-fg);">Cards</h3>
        <div style="margin-top: 1rem; display: flex; flex-direction: column; gap: 1rem;">
          <erb-card>
            <erb-card-header>
              <erb-card-title>Card Title</erb-card-title>
            </erb-card-header>
            <erb-card-body>
              <p style="color: var(--erb-color-neutral-fg); font-family: var(--erb-font-sans);">Card body content goes here. It provides a flexible container.</p>
            </erb-card-body>
            <erb-card-footer>
              <button erbButton variant="solid" color="primary">Action</button>
            </erb-card-footer>
          </erb-card>
        </div>
      </section>
    </div>
  \`
})
export class LayoutNavigationExampleComponent {}`;
