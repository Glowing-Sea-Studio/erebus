import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'erb-timeline',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ul class="erb-timeline" [ngClass]="className">
      <ng-content></ng-content>
    </ul>
  `
})
export class TimelineComponent {
  @Input() className: string = '';
}

@Component({
  selector: 'erb-timeline-item',
  standalone: true,
  imports: [CommonModule],
  template: `
    <li class="erb-timeline-item">
      <div class="erb-timeline-indicator">
        <div class="erb-timeline-dot"></div>
        <div class="erb-timeline-line" *ngIf="!isLast"></div>
      </div>
      <div class="erb-timeline-content">
        <div class="erb-timeline-title">{{ title }}</div>
        <div class="erb-timeline-description" *ngIf="description">{{ description }}</div>
      </div>
    </li>
  `
})
export class TimelineItemComponent {
  @Input() title: string = '';
  @Input() description?: string;
  @Input() isLast: boolean = false;
}