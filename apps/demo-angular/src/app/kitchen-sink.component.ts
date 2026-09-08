import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-kitchen-sink',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <section>
        <h2 style="font-size: 1.5rem; font-weight: bold; color: var(--erb-color-neutral-fg);">All Components Extracted</h2>
        <p style="margin-top: 1rem; color: var(--erb-color-fg-muted); font-family: var(--erb-font-sans);">
          The components that used to be in this Kitchen Sink have been extracted into their own dedicated pages.
          Please use the sidebar to navigate to the specific component documentation.
        </p>
      </section>
    </div>
  `
})
export class KitchenSinkComponent {}
