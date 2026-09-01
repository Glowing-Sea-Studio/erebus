import { Component, Input, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'erb-spinner',
  standalone: true,
  imports: [CommonModule],
  template: '',
  host: {
    'class': 'erb-spinner'
  }
})
export class SpinnerComponent {
  @Input() size?: number | string;

  @HostBinding('style.--erb-spinner-size')
  get spinnerSize(): string | null {
    if (this.size === undefined) return null;
    return typeof this.size === 'number' ? `${this.size}px` : this.size;
  }
}
