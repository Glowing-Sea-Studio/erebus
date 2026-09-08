import { Component } from '@angular/core';
import { KitchenSinkComponent } from '../kitchen-sink.component';

@Component({
  selector: 'app-overview-page',
  standalone: true,
  imports: [KitchenSinkComponent],
  template: `
    <div>
      <h1 style="font-size: 2.5rem; font-weight: bold; margin-bottom: 1rem; color: var(--erb-color-neutral-fg);">Overview</h1>
      <p style="color: var(--erb-color-fg-muted); margin-bottom: 2rem; font-size: 1.125rem;">
        A complete kitchen sink of all components available in Erebus Angular.
      </p>
      
      <div style="padding: 2rem; border: 1px solid var(--erb-color-border-default); border-radius: 8px; background-color: var(--erb-color-bg-base);">
        <app-kitchen-sink></app-kitchen-sink>
      </div>
    </div>
  `
})
export class OverviewPageComponent {}
