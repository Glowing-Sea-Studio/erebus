import { Component, Input, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'erb-stat',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="erb-stat-label">{{ label }}</div>
    <div class="erb-stat-value">{{ value }}</div>
    <div *ngIf="helpText" class="erb-stat-help-text">{{ helpText }}</div>
  `,
  styleUrls: ['../../../../packages/core/src/components/stat.css']
})
export class ErbStatComponent {
  @Input() label: string = '';
  @Input() value: string = '';
  @Input() helpText?: string;

  @HostBinding('class.erb-stat') get isStat() { return true; }
}
