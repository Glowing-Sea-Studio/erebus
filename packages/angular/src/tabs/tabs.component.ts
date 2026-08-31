import { Component, Directive, input } from '@angular/core';

@Component({
  selector: 'erb-tabs',
  standalone: true,
  
  template: `<ng-content></ng-content>`,
  host: { class: 'erb-tabs' }
})
export class ErbTabsComponent {}

@Component({
  selector: 'erb-tabs-list',
  standalone: true,
  
  template: `<ng-content></ng-content>`,
  host: { class: 'erb-tabs-list' }
})
export class ErbTabsListComponent {}

@Directive({
  selector: '[erbTab]',
  standalone: true,
  host: { 
    class: 'erb-tab',
    '[attr.data-state]': 'active() ? "active" : "inactive"'
  }
})
export class ErbTabDirective {
  active = input<boolean>(false);
}

@Component({
  selector: 'erb-tabs-panel',
  standalone: true,
  
  template: `<ng-content></ng-content>`,
  host: { 
    class: 'erb-tabs-panel',
    '[attr.data-state]': 'active() ? "active" : "inactive"'
  }
})
export class ErbTabsPanelComponent {
  active = input<boolean>(false);
}
