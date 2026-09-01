import { Component, Input } from '@angular/core';

@Component({
  selector: 'erb-badge',
  standalone: true,
  template: `
    <span
      class="erb-badge"
      [class.erb-badge--variant-solid]="variant === 'solid'"
      [class.erb-badge--variant-outline]="variant === 'outline'"
      [class.erb-badge--variant-soft]="variant === 'soft'"
      [class]="'erb-badge--color-' + color"
      [class]="'erb-badge--size-' + size"
      [class]="'erb-badge--shape-' + shape"
    >
      <ng-content></ng-content>
    </span>
  `,
  styleUrls: []
})
export class BadgeComponent {
  @Input() variant: 'solid' | 'outline' | 'soft' = 'solid';
  @Input() color: 'primary' | 'success' | 'warning' | 'danger' | 'neutral' = 'primary';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() shape: 'rounded' | 'pill' = 'rounded';
}
