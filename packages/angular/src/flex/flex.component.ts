import {  Component, input, computed } from '@angular/core';
import { ResponsiveValue, resolveResponsiveProps } from '../utils';

const justifyMap: Record<string, string> = {
  start: 'flex-start',
  end: 'flex-end',
  center: 'center',
  'space-between': 'space-between',
  'space-around': 'space-around',
  'space-evenly': 'space-evenly'
};

const alignMap: Record<string, string> = {
  start: 'flex-start',
  end: 'flex-end',
  center: 'center',
  stretch: 'stretch',
  baseline: 'baseline'
};

@Component({
  selector: 'erb-flex',
  standalone: true,
  template: `<ng-content></ng-content>`,
  
  host: {
    '[class.erb-flex]': 'true',
    '[style]': 'customStyle()'
  }
})
export class FlexComponent {
  direction = input<ResponsiveValue<'row' | 'row-reverse' | 'column' | 'column-reverse'>>();
  gap = input<ResponsiveValue<number>>();
  align = input<ResponsiveValue<'start' | 'end' | 'center' | 'stretch' | 'baseline'>>();
  justify = input<ResponsiveValue<'start' | 'end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'>>();
  wrap = input<ResponsiveValue<'nowrap' | 'wrap' | 'wrap-reverse'>>();

  customStyle = computed(() => {
    return {
      ...resolveResponsiveProps('--erb-flex-direction', this.direction()),
      ...resolveResponsiveProps('--erb-flex-gap', this.gap(), (v) => `var(--erb-space-${v})`),
      ...resolveResponsiveProps('--erb-flex-align', this.align(), (v) => alignMap[v as string] || v),
      ...resolveResponsiveProps('--erb-flex-justify', this.justify(), (v) => justifyMap[v as string] || v),
      ...resolveResponsiveProps('--erb-flex-wrap', this.wrap())
    };
  });
}
