import { Component } from '@angular/core';

@Component({
  selector: 'erb-header',
  standalone: true,
  
  template: `<ng-content></ng-content>`,
  host: { class: 'erb-header' }
})
export class ErbHeaderComponent {}
