import { Directive, input } from '@angular/core';

export type InputSize = 'sm' | 'md' | 'lg';

@Directive({
  selector: 'input[erbInput], textarea[erbInput]',
  standalone: true,
  host: {
    class: 'erb-input',
    '[attr.data-size]': 'size()',
  }
})
export class ErbInputDirective {
  size = input<InputSize>('md');
}
