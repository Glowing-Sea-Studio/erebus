import {  Component, input, computed } from '@angular/core';
import { ResponsiveValue, resolveResponsiveProps } from '../utils';

@Component({
  selector: 'erb-split',
  standalone: true,
  template: `<ng-content></ng-content>`,
  
  host: {
    '[class.erb-split]': 'true',
    '[attr.data-fraction]': 'fraction() !== "1/2" ? fraction() : undefined',
    '[style]': 'customStyle()'
  }
})
export class SplitComponent {
  gap = input<ResponsiveValue<number>>();
  fraction = input<'1/2' | '1/3' | '2/3' | '1/4' | '3/4' | 'auto-start' | 'auto-end'>('1/2');
  align = input<ResponsiveValue<'start' | 'end' | 'center' | 'stretch'>>();

  customStyle = computed(() => {
    return {
      ...resolveResponsiveProps('--erb-split-gap', this.gap(), (v) => `var(--erb-space-${v})`),
      ...resolveResponsiveProps('--erb-split-align', this.align())
    };
  });
}
