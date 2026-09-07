import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({


  selector: 'erb-empty-state',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="erb-empty-state" [ngClass]="className()">
      <h3 class="erb-empty-state-title">{{ title() }}</h3>
      <p class="erb-empty-state-description" *ngIf="description()">{{ description() }}</p>
      <div class="erb-empty-state-action">
        <ng-content></ng-content>
      </div>
    </div>
  `,
})
export class EmptyStateComponent {
  className = input<string>('');
  title = input.required<string>();
  description = input<string>();
}
