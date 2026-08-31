import { Component  } from '@angular/core';

@Component({
  selector: 'erb-card',
  standalone: true,
  
  template: `<ng-content></ng-content>`,
  host: {
    class: 'erb-card',
  }
})
export class ErbCardComponent {}

@Component({
  selector: 'erb-card-header',
  standalone: true,
  
  template: `<ng-content></ng-content>`,
  host: {
    class: 'erb-card-header',
  }
})
export class ErbCardHeaderComponent {}

@Component({
  selector: 'erb-card-title',
  standalone: true,
  
  template: `<ng-content></ng-content>`,
  host: {
    class: 'erb-card-title',
  }
})
export class ErbCardTitleComponent {}

@Component({
  selector: 'erb-card-description',
  standalone: true,
  
  template: `<ng-content></ng-content>`,
  host: {
    class: 'erb-card-description',
  }
})
export class ErbCardDescriptionComponent {}

@Component({
  selector: 'erb-card-body',
  standalone: true,
  
  template: `<ng-content></ng-content>`,
  host: {
    class: 'erb-card-body',
  }
})
export class ErbCardBodyComponent {}

@Component({
  selector: 'erb-card-footer',
  standalone: true,
  
  template: `<ng-content></ng-content>`,
  host: {
    class: 'erb-card-footer',
  }
})
export class ErbCardFooterComponent {}
