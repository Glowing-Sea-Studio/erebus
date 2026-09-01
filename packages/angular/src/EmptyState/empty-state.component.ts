import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'erb-empty-state',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="erb-empty-state" [ngClass]="className">
      <div class="erb-empty-state-title">{{ title }}</div>
      <div class="erb-empty-state-description" *ngIf="description">{{ description }}</div>
      <ng-content></ng-content>
    </div>
  `
})
export class EmptyStateComponent {
  @Input() title: string = '';
  @Input() description?: string;
  @Input() className: string = '';
}