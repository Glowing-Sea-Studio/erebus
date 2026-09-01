import { Component, input } from '@angular/core';

@Component({
  selector: 'erb-button-group',
  standalone: true,
  template: `<ng-content></ng-content>`,
  host: {
    class: 'erb-button-group',
    '[attr.data-orientation]': 'orientation()',
    'role': 'group'
  }
})
export class ButtonGroupComponent {
  orientation = input<'horizontal' | 'vertical'>('horizontal');
}

