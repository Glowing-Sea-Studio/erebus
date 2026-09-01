import { Component } from '@angular/core';

@Component({
  selector: 'erb-kbd',
  standalone: true,
  template: `<ng-content></ng-content>`,
  host: {
    class: 'erb-kbd'
  }
})
export class KbdComponent {}

