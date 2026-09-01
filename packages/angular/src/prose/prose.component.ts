import { Component } from '@angular/core';

@Component({
  selector: 'erb-prose',
  standalone: true,
  template: `<ng-content></ng-content>`,
  host: {
    class: 'erb-prose'
  }
})
export class ProseComponent {}
