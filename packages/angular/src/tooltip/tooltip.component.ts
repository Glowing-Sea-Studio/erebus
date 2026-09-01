import { Component } from '@angular/core';

@Component({
  selector: 'erb-tooltip',
  standalone: true,
  template: `<ng-content></ng-content>`,
  host: { 
    class: 'erb-tooltip',
    role: 'tooltip'
  }
})
export class ErbTooltipComponent {}
