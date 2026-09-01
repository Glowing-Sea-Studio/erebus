import { Component, Input } from '@angular/core';

@Component({
  selector: 'erb-breadcrumb',
  template: `
    <nav [attr.aria-label]="ariaLabel" class="erb-breadcrumb">
      <ol class="erb-breadcrumb__list">
        <ng-content></ng-content>
      </ol>
    </nav>
  `,
  styleUrls: ['../../../../packages/core/src/components/breadcrumb.css'],
  standalone: true
})
export class BreadcrumbComponent {
  @Input() ariaLabel = 'Breadcrumb';
}
