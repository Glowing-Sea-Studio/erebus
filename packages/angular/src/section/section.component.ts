import {  Component } from '@angular/core';

@Component({
  selector: 'erb-section',
  standalone: true,
  template: `<ng-content></ng-content>`,
  
  host: {
    '[class.erb-section]': 'true'
  }
})
export class SectionComponent {}
