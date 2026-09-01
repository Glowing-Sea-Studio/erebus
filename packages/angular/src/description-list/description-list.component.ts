import { Component, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'erb-description-list',
  standalone: true,
  imports: [CommonModule],
  template: `<ng-content></ng-content>`,
  styleUrls: ['../../../../packages/core/src/components/description-list.css']
})
export class ErbDescriptionListComponent {
  @HostBinding('class.erb-description-list') get isDl() { return true; }
}

@Component({
  selector: 'erb-description-term',
  standalone: true,
  template: `<ng-content></ng-content>`
})
export class ErbDescriptionTermComponent {
  @HostBinding('class.erb-description-list-term') get isDt() { return true; }
}

@Component({
  selector: 'erb-description-details',
  standalone: true,
  template: `<ng-content></ng-content>`
})
export class ErbDescriptionDetailsComponent {
  @HostBinding('class.erb-description-list-details') get isDd() { return true; }
}
