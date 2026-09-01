import { Component, Input } from '@angular/core';

@Component({
  selector: 'erb-banner',
  standalone: true,
  template: `<div class="erb-banner erb-banner--{{variant}}" role="alert"><ng-content></ng-content></div>`,
})
export class BannerComponent {
  @Input() variant: 'info' | 'success' | 'warning' | 'error' = 'info';
}
