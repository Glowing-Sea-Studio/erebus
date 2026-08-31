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
  selector: 'erb-inline',
  standalone: true,
  template: `<ng-content></ng-content>`,
  
  host: {
    '[class.erb-inline]': 'true',
    '[style]': 'customStyle()'
  }
})
export class InlineComponent {
  gap = input<ResponsiveValue<number>>();
  align = input<ResponsiveValue<'start' | 'end' | 'center' | 'stretch' | 'baseline'>>();
  justify = input<ResponsiveValue<'start' | 'end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'>>();

  customStyle = computed(() => {
    return {
      ...resolveResponsiveProps('--erb-inline-gap', this.gap(), (v) => `var(--erb-space-${v})`),
      ...resolveResponsiveProps('--erb-inline-align', this.align(), (v) => alignMap[v as string] || v),
      ...resolveResponsiveProps('--erb-inline-justify', this.justify(), (v) => justifyMap[v as string] || v)
    };
  });
}
