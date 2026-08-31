import {  Component, input } from '@angular/core';

@Component({
  selector: 'erb-center',
  standalone: true,
  template: `<ng-content></ng-content>`,
  
  host: {
    '[class.erb-center]': 'true',
    '[attr.data-inline]': 'inline() ? "true" : undefined'
  }
})
export class CenterComponent {
  inline = input<boolean>(false);
}
