import { Component } from '@angular/core';

@Component({
  selector: 'erb-modal-overlay',
  standalone: true,
  
  template: `<ng-content></ng-content>`,
  host: { class: 'erb-modal-overlay' }
})
export class ErbModalOverlayComponent {}

@Component({
  selector: 'erb-modal-content',
  standalone: true,
  
  template: `<ng-content></ng-content>`,
  host: { class: 'erb-modal-content' }
})
export class ErbModalContentComponent {}

@Component({
  selector: 'erb-modal-header',
  standalone: true,
  
  template: `<ng-content></ng-content>`,
  host: { class: 'erb-modal-header' }
})
export class ErbModalHeaderComponent {}

@Component({
  selector: 'erb-modal-title',
  standalone: true,
  
  template: `<ng-content></ng-content>`,
  host: { class: 'erb-modal-title' }
})
export class ErbModalTitleComponent {}

@Component({
  selector: 'erb-modal-description',
  standalone: true,
  
  template: `<ng-content></ng-content>`,
  host: { class: 'erb-modal-description' }
})
export class ErbModalDescriptionComponent {}

@Component({
  selector: 'erb-modal-body',
  standalone: true,
  
  template: `<ng-content></ng-content>`,
  host: { class: 'erb-modal-body' }
})
export class ErbModalBodyComponent {}

@Component({
  selector: 'erb-modal-footer',
  standalone: true,
  
  template: `<ng-content></ng-content>`,
  host: { class: 'erb-modal-footer' }
})
export class ErbModalFooterComponent {}
