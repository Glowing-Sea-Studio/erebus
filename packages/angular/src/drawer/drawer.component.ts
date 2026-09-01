import { Component } from '@angular/core';

@Component({
  selector: 'erb-drawer-overlay',
  standalone: true,
  template: `<ng-content></ng-content>`,
  host: { class: 'erb-drawer-overlay' }
})
export class ErbDrawerOverlayComponent {}

@Component({
  selector: 'erb-drawer-content',
  standalone: true,
  template: `<ng-content></ng-content>`,
  host: { 
    class: 'erb-drawer-content',
    role: 'dialog'
  }
})
export class ErbDrawerContentComponent {}

@Component({
  selector: 'erb-drawer-header',
  standalone: true,
  template: `<ng-content></ng-content>`,
  host: { class: 'erb-drawer-header' }
})
export class ErbDrawerHeaderComponent {}

@Component({
  selector: 'erb-drawer-title',
  standalone: true,
  template: `<ng-content></ng-content>`,
  host: { class: 'erb-drawer-title' }
})
export class ErbDrawerTitleComponent {}

@Component({
  selector: 'erb-drawer-description',
  standalone: true,
  template: `<ng-content></ng-content>`,
  host: { class: 'erb-drawer-description' }
})
export class ErbDrawerDescriptionComponent {}

@Component({
  selector: 'erb-drawer-body',
  standalone: true,
  template: `<ng-content></ng-content>`,
  host: { class: 'erb-drawer-body' }
})
export class ErbDrawerBodyComponent {}

@Component({
  selector: 'erb-drawer-footer',
  standalone: true,
  template: `<ng-content></ng-content>`,
  host: { class: 'erb-drawer-footer' }
})
export class ErbDrawerFooterComponent {}
