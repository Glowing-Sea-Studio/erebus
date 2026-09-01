import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'erb-loading-overlay',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="erb-loading-overlay" *ngIf="active">
      <div class="erb-loading-overlay__spinner" aria-label="Loading"></div>
    </div>
  `,
})
export class LoadingOverlayComponent {
  @Input() active: boolean = true;
}
