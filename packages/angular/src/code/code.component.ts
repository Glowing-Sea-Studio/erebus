import { Component } from '@angular/core';

@Component({
  selector: 'erb-code',
  standalone: true,
  template: `<ng-content></ng-content>`,
  host: {
    class: 'erb-code'
  }
})
export class CodeComponent {}

