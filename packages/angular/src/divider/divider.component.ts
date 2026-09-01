import { Component, input } from '@angular/core';

@Component({
  selector: 'erb-divider',
  standalone: true,
  template: `<hr class="erb-divider" [attr.data-orientation]="orientation()" role="separator" [attr.aria-orientation]="orientation()" />`,
  host: {
    display: 'contents'
  }
})
export class DividerComponent {
  orientation = input<'horizontal' | 'vertical'>('horizontal');
}

