import { Component, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'erb-table',
  standalone: true,
  imports: [CommonModule],
  template: `<ng-content></ng-content>`,
  styleUrls: ['../../../../core/src/components/table.css']
})
export class ErbTableComponent {
  @HostBinding('class.erb-table') get isTable() { return true; }
}

@Component({
  selector: 'erb-table-head',
  standalone: true,
  template: `<ng-content></ng-content>`
})
export class ErbTableHeadComponent {}

@Component({
  selector: 'erb-table-body',
  standalone: true,
  template: `<ng-content></ng-content>`
})
export class ErbTableBodyComponent {}

@Component({
  selector: 'erb-table-row',
  standalone: true,
  template: `<ng-content></ng-content>`
})
export class ErbTableRowComponent {}

@Component({
  selector: 'erb-table-cell',
  standalone: true,
  template: `<ng-content></ng-content>`
})
export class ErbTableCellComponent {}

@Component({
  selector: 'erb-table-header-cell',
  standalone: true,
  template: `<ng-content></ng-content>`
})
export class ErbTableHeaderCellComponent {}
