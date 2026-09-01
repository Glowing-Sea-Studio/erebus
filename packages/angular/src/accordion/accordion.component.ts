import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'erb-accordion',
  template: `
    <div class="erb-accordion">
      <h3 class="erb-accordion__header">
        <button [attr.aria-expanded]="expanded" class="erb-accordion__button" (click)="toggle()">{{ title }}</button>
      </h3>
      <div class="erb-accordion__panel" [hidden]="!expanded">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styleUrls: ['../../../../core/src/components/accordion.css'],
  standalone: true,
  imports: [CommonModule]
})
export class AccordionComponent {
  @Input() title!: string;
  @Input() expanded = false;
  toggle() { this.expanded = !this.expanded; }
}
