import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'erb-tag',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span
      class="erb-tag"
      [class.erb-tag--variant-solid]="variant === 'solid'"
      [class.erb-tag--variant-outline]="variant === 'outline'"
      [class.erb-tag--variant-soft]="variant === 'soft'"
      [class]="'erb-tag--color-' + color"
      [class]="'erb-tag--size-' + size"
    >
      <ng-content></ng-content>
      <button *ngIf="closable" type="button" class="erb-tag__close" aria-label="Close" (click)="onCloseClick($event)">
        &times;
      </button>
    </span>
  `,
  styleUrls: []
})
export class TagComponent {
  @Input() variant: 'solid' | 'outline' | 'soft' = 'solid';
  @Input() color: 'primary' | 'success' | 'warning' | 'danger' | 'neutral' = 'primary';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() closable = false;
  
  @Output() closed = new EventEmitter<Event>();

  onCloseClick(event: Event) {
    this.closed.emit(event);
  }
}
