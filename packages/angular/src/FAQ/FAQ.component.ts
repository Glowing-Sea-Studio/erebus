import { Component } from '@angular/core';

@Component({
  selector: 'erb-faq',
  standalone: true,
  template: `<ng-content></ng-content>`,
  host: {
    class: 'erb-faq'
  }
})
export class FAQComponent {}

