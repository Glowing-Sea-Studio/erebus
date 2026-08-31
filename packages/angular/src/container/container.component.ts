import {  Component } from '@angular/core';

@Component({
  selector: 'erb-container',
  standalone: true,
  template: `<ng-content></ng-content>`,
  
  host: {
    '[class.erb-container]': 'true'
  }
})
export class ContainerComponent {}
