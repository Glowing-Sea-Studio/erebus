import { Component, input } from '@angular/core';

export type PanelPosition = 'left' | 'right';

@Component({
  selector: 'erb-panel-overlay',
  standalone: true,
  
  template: `<ng-content></ng-content>`,
  host: { class: 'erb-panel-overlay' }
})
export class ErbPanelOverlayComponent {}

@Component({
  selector: 'erb-panel',
  standalone: true,
  
  template: `<ng-content></ng-content>`,
  host: { 
    class: 'erb-panel',
    '[attr.data-position]': 'position()'
  }
})
export class ErbPanelComponent {
  position = input<PanelPosition>('right');
}

@Component({
  selector: 'erb-panel-header',
  standalone: true,
  
  template: `<ng-content></ng-content>`,
  host: { class: 'erb-panel-header' }
})
export class ErbPanelHeaderComponent {}

@Component({
  selector: 'erb-panel-title',
  standalone: true,
  
  template: `<ng-content></ng-content>`,
  host: { class: 'erb-panel-title' }
})
export class ErbPanelTitleComponent {}

@Component({
  selector: 'erb-panel-body',
  standalone: true,
  
  template: `<ng-content></ng-content>`,
  host: { class: 'erb-panel-body' }
})
export class ErbPanelBodyComponent {}

@Component({
  selector: 'erb-panel-footer',
  standalone: true,
  
  template: `<ng-content></ng-content>`,
  host: { class: 'erb-panel-footer' }
})
export class ErbPanelFooterComponent {}
