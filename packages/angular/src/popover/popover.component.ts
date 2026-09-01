import { Component } from '@angular/core';

@Component({
  selector: 'erb-popover',
  standalone: true,
  template: `<ng-content></ng-content>`,
  host: { class: 'erb-popover' }
})
export class ErbPopoverComponent {}
