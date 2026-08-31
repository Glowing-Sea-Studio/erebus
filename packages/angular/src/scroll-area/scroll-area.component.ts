import {  Component, input, computed } from '@angular/core';

@Component({
  selector: 'erb-scroll-area',
  standalone: true,
  template: `<ng-content></ng-content>`,
  
  host: {
    '[class.erb-scroll-area]': 'true',
    '[style.--erb-scroll-area-max-height]': 'formattedMaxHeight()'
  }
})
export class ScrollAreaComponent {
  maxHeight = input<number | string>();

  formattedMaxHeight = computed(() => {
    const mh = this.maxHeight();
    if (mh === undefined) return undefined;
    return typeof mh === 'number' ? `${mh}px` : mh;
  });
}
