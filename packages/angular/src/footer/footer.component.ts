import { Component } from '@angular/core';

@Component({
  selector: 'erb-footer',
  standalone: true,
  
  template: `<ng-content></ng-content>`,
  host: { class: 'erb-footer' }
})
export class ErbFooterComponent {}
