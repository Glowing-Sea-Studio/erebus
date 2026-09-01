import { Component, Input, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'erb-list',
  standalone: true,
  imports: [CommonModule],
  template: `<ng-content></ng-content>`,
  styleUrls: ['../../../../packages/core/src/components/list.css']
})
export class ErbListComponent {
  @Input() as: 'ul' | 'ol' = 'ul';

  @HostBinding('class.erb-list') get isList() { return true; }
  @HostBinding('class.erb-list--unordered') get isUnordered() { return this.as === 'ul'; }
  @HostBinding('class.erb-list--ordered') get isOrdered() { return this.as === 'ol'; }
}

@Component({
  selector: 'erb-list-item',
  standalone: true,
  template: `<ng-content></ng-content>`
})
export class ErbListItemComponent {
  @HostBinding('class.erb-list-item') get isListItem() { return true; }
}
