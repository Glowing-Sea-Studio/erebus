import { Component } from '@angular/core';

@Component({
  selector: 'erb-alert-dialog-overlay',
  standalone: true,
  template: `<ng-content></ng-content>`,
  host: { 
    class: 'erb-alert-dialog-overlay'
  }
})
export class ErbAlertDialogOverlayComponent {}

@Component({
  selector: 'erb-alert-dialog-content',
  standalone: true,
  template: `<ng-content></ng-content>`,
  host: { 
    class: 'erb-alert-dialog-content',
    role: 'alertdialog'
  }
})
export class ErbAlertDialogContentComponent {}

@Component({
  selector: 'erb-alert-dialog-header',
  standalone: true,
  template: `<ng-content></ng-content>`,
  host: { class: 'erb-alert-dialog-header' }
})
export class ErbAlertDialogHeaderComponent {}

@Component({
  selector: 'erb-alert-dialog-title',
  standalone: true,
  template: `<ng-content></ng-content>`,
  host: { class: 'erb-alert-dialog-title' }
})
export class ErbAlertDialogTitleComponent {}

@Component({
  selector: 'erb-alert-dialog-description',
  standalone: true,
  template: `<ng-content></ng-content>`,
  host: { class: 'erb-alert-dialog-description' }
})
export class ErbAlertDialogDescriptionComponent {}

@Component({
  selector: 'erb-alert-dialog-body',
  standalone: true,
  template: `<ng-content></ng-content>`,
  host: { class: 'erb-alert-dialog-body' }
})
export class ErbAlertDialogBodyComponent {}

@Component({
  selector: 'erb-alert-dialog-footer',
  standalone: true,
  template: `<ng-content></ng-content>`,
  host: { class: 'erb-alert-dialog-footer' }
})
export class ErbAlertDialogFooterComponent {}
