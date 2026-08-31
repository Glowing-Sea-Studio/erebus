import {  Component, input } from '@angular/core';

@Component({
  selector: 'erb-aspect-ratio',
  standalone: true,
  template: `<ng-content></ng-content>`,
  
  host: {
    '[class.erb-aspect-ratio]': 'true',
    '[style.--erb-aspect-ratio]': 'ratio()'
  }
})
export class AspectRatioComponent {
  ratio = input<number>(4 / 3);
}
