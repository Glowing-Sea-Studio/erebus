import { Directive, input } from '@angular/core';

export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonVariant = 'solid' | 'outline' | 'ghost';

@Directive({
  selector: 'button[erbButton], a[erbButton]',
  standalone: true,
  host: {
    class: 'erb-button',
    '[attr.data-size]': 'size()',
    '[attr.data-variant]': 'variant()',
  }
})
export class ErbButtonDirective {
  size = input<ButtonSize>('md');
  variant = input<ButtonVariant>('solid');
}
