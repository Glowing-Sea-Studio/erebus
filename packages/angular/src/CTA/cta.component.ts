import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErbButtonDirective } from '../button/button.directive';

export interface CTAActionProps {
  label: string;
}

@Component({
  selector: 'erb-cta',
  standalone: true,
  imports: [CommonModule, ErbButtonDirective],
  template: `
    <div class="erb-cta" [ngClass]="className()">
      <h2 class="erb-cta-title">{{ title() }}</h2>
      <p *ngIf="description()" class="erb-cta-description">{{ description() }}</p>
      <div *ngIf="primaryAction() || secondaryAction()" class="erb-cta-actions">
        <button *ngIf="primaryAction()" erbButton variant="solid" color="primary" (click)="primaryClick.emit()">
          {{ primaryAction()?.label }}
        </button>
        <button *ngIf="secondaryAction()" erbButton variant="outline" (click)="secondaryClick.emit()">
          {{ secondaryAction()?.label }}
        </button>
      </div>
    </div>
  `,
})
export class CTAComponent {
  className = input<string>('');
  title = input.required<string>();
  description = input<string>();
  primaryAction = input<CTAActionProps>();
  secondaryAction = input<CTAActionProps>();
  primaryClick = output<void>();
  secondaryClick = output<void>();
}
