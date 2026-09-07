import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({


  selector: 'erb-timeline',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ul class="erb-timeline" [ngClass]="className()">
      <ng-content></ng-content>
    </ul>
  `,
})
export class TimelineComponent {
  className = input<string>('');
}

@Component({


  selector: 'erb-timeline-item',
  standalone: true,
  imports: [CommonModule],
  template: `
    <li class="erb-timeline-item" [ngClass]="className()">
      <div class="erb-timeline-indicator">
        <div class="erb-timeline-dot"></div>
        <div class="erb-timeline-line" *ngIf="!isLast()"></div>
      </div>
      <div class="erb-timeline-content">
        <p class="erb-timeline-title">{{ title() }}</p>
        <p class="erb-timeline-description" *ngIf="description()">{{ description() }}</p>
        <p class="erb-timeline-date" *ngIf="date()">{{ date() }}</p>
      </div>
    </li>
  `,
})
export class TimelineItemComponent {
  className = input<string>('');
  title = input.required<string>();
  description = input<string>();
  date = input<string>();
  isLast = input<boolean>(false);
}
