import {  Component, input, computed } from '@angular/core';
import { ResponsiveValue, resolveResponsiveProps } from '../utils';

@Component({
  selector: 'erb-grid',
  standalone: true,
  template: `<ng-content></ng-content>`,
  
  host: {
    '[class.erb-grid]': 'true',
    '[style]': 'customStyle()'
  }
})
export class GridComponent {
  cols = input<ResponsiveValue<number>>(1);
  gap = input<ResponsiveValue<number>>();
  align = input<ResponsiveValue<'start' | 'end' | 'center' | 'stretch'>>();
  justify = input<ResponsiveValue<'start' | 'end' | 'center' | 'stretch'>>();

  customStyle = computed(() => {
    return {
      ...resolveResponsiveProps('--erb-grid-cols', this.cols(), (v) => `repeat(${v}, minmax(0, 1fr))`),
      ...resolveResponsiveProps('--erb-grid-gap', this.gap(), (v) => `var(--erb-space-${v})`),
      ...resolveResponsiveProps('--erb-grid-align', this.align()),
      ...resolveResponsiveProps('--erb-grid-justify', this.justify())
    };
  });
}
