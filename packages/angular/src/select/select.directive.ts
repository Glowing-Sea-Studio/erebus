import { Directive, input } from '@angular/core';

export type SelectSize = 'sm' | 'md' | 'lg';

@Directive({
  selector: 'select[erbSelect]',
  standalone: true,
  host: {
    class: 'erb-select',
    '[attr.data-size]': 'size()',
    '[attr.aria-invalid]': 'invalid() ? "true" : null'
  }
})
export class ErbSelectDirective {
  size = input<SelectSize>('md');
  invalid = input<boolean>(false);
}
