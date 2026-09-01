import { Directive, input } from '@angular/core';

export type IconButtonSize = 'sm' | 'md' | 'lg';
export type IconButtonVariant = 'solid' | 'outline' | 'ghost';

@Directive({
  selector: 'button[erbIconButton], a[erbIconButton]',
  standalone: true,
  host: {
    class: 'erb-icon-button',
    '[attr.data-size]': 'size()',
    '[attr.data-variant]': 'variant()',
  }
})
export class ErbIconButtonDirective {
  size = input<IconButtonSize>('md');
  variant = input<IconButtonVariant>('solid');
}

