import { Component, Directive, input } from '@angular/core';

@Component({
  selector: 'erb-menu',
  standalone: true,
  
  template: `<ng-content></ng-content>`,
  host: { class: 'erb-menu' }
})
export class ErbMenuComponent {}

@Directive({
  selector: '[erbMenuItem]',
  standalone: true,
  host: {
    class: 'erb-menu-item',
    '[attr.disabled]': 'disabled() ? true : null'
  }
})
export class ErbMenuItemDirective {
  disabled = input<boolean>(false);
}

@Component({
  selector: 'erb-menu-separator',
  standalone: true,
  
  template: ``,
  host: { class: 'erb-menu-separator' }
})
export class ErbMenuSeparatorComponent {}
