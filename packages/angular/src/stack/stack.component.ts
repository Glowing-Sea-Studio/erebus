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
  selector: 'erb-stack',
  standalone: true,
  template: `<ng-content></ng-content>`,
  
  host: {
    '[class.erb-stack]': 'true',
    '[style]': 'customStyle()'
  }
})
export class StackComponent {
  gap = input<ResponsiveValue<number>>();
  align = input<ResponsiveValue<'start' | 'end' | 'center' | 'stretch' | 'baseline'>>();
  justify = input<ResponsiveValue<'start' | 'end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'>>();

  customStyle = computed(() => {
    return {
      ...resolveResponsiveProps('--erb-stack-gap', this.gap(), (v) => `var(--erb-space-${v})`),
      ...resolveResponsiveProps('--erb-stack-align', this.align(), (v) => alignMap[v as string] || v),
      ...resolveResponsiveProps('--erb-stack-justify', this.justify(), (v) => justifyMap[v as string] || v)
    };
  });
}
