import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'erb-error-state',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="erb-error-state" [ngClass]="className">
      <div class="erb-error-state-title">{{ title }}</div>
      <div class="erb-error-state-description" *ngIf="description">{{ description }}</div>
      <button *ngIf="showRetry" class="erb-error-state-retry" (click)="retry.emit()">Retry</button>
    </div>
  `
})
export class ErrorStateComponent {
  @Input() title: string = '';
  @Input() description?: string;
  @Input() className: string = '';
  @Input() showRetry: boolean = false;
  @Output() retry = new EventEmitter<void>();
}