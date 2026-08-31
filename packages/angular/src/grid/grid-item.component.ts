import {  Component, input, computed } from '@angular/core';
import { ResponsiveValue, resolveResponsiveProps } from '../utils';

@Component({
  selector: 'erb-grid-item',
  standalone: true,
  template: `<ng-content></ng-content>`,
  
  host: {
    '[class.erb-grid-item]': 'true',
    '[style]': 'customStyle()'
  }
})
export class GridItemComponent {
  colSpan = input<ResponsiveValue<number>>();
  rowSpan = input<ResponsiveValue<number>>();

  customStyle = computed(() => {
    return {
      ...resolveResponsiveProps('--erb-grid-item-col-span', this.colSpan()),
      ...resolveResponsiveProps('--erb-grid-item-row-span', this.rowSpan())
    };
  });
}
