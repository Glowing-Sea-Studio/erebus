import { Component, Input, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'erb-skeleton',
  standalone: true,
  imports: [CommonModule],
  template: '',
  host: {
    '[class.erb-skeleton]': 'true',
    '[class.erb-skeleton--circle]': 'variant === "circle"'
  }
})
export class SkeletonComponent {
  @Input() variant: 'rect' | 'circle' = 'rect';
  @Input() width?: number | string;
  @Input() height?: number | string;

  @HostBinding('style.width')
  get styleWidth(): string | null {
    if (this.width === undefined) return null;
    return typeof this.width === 'number' ? `${this.width}px` : this.width;
  }

  @HostBinding('style.height')
  get styleHeight(): string | null {
    if (this.height === undefined) return null;
    return typeof this.height === 'number' ? `${this.height}px` : this.height;
  }
}
