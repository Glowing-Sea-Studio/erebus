import { Component, input } from '@angular/core';

export type TextSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'p[erbText], span[erbText]',
  standalone: true,
  template: `<ng-content></ng-content>`,
  host: {
    class: 'erb-text',
    '[attr.data-size]': 'size()',
    '[attr.data-muted]': 'muted()'
  }
})
export class TextComponent {
  size = input<TextSize>('md');
  muted = input<boolean>(false);
}

