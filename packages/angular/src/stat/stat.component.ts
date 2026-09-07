import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({


  selector: 'erb-stat',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="erb-stat" [ngClass]="className()">
      <p class="erb-stat-label">{{ label() }}</p>
      <p class="erb-stat-value">{{ value() }}</p>
      <p *ngIf="helpText()" class="erb-stat-help-text">{{ helpText() }}</p>
    </div>
  `,
})
export class ErbStatComponent {
  className = input<string>('');
  label = input.required<string>();
  value = input.required<string | number>();
  helpText = input<string>();
}
