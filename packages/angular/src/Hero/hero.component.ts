import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErbButtonDirective } from '../button/button.directive';

export interface HeroActionProps {
  label: string;
}

@Component({
  selector: 'erb-hero',
  standalone: true,
  imports: [CommonModule, ErbButtonDirective],
  template: `
    <div class="erb-hero" [ngClass]="className()">
      <h1 class="erb-hero-title">{{ title() }}</h1>
      <p *ngIf="subtitle()" class="erb-hero-subtitle">{{ subtitle() }}</p>
      <div *ngIf="primaryAction() || secondaryAction()" class="erb-hero-actions">
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
export class HeroComponent {
  className = input<string>('');
  title = input.required<string>();
  subtitle = input<string>();
  primaryAction = input<HeroActionProps>();
  secondaryAction = input<HeroActionProps>();
  primaryClick = output<void>();
  secondaryClick = output<void>();
}
