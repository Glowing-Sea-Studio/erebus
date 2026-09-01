import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'erb-stepper',
  template: `
    <ol class="erb-stepper">
      <li *ngFor="let step of steps; let i = index" class="erb-stepper__step" [attr.aria-current]="currentStep === i ? 'step' : null">
        <span>{{ i + 1 }}</span> <span>{{ step }}</span>
      </li>
    </ol>
  `,
  styleUrls: ['../../../../packages/core/src/components/stepper.css'],
  standalone: true,
  imports: [CommonModule]
})
export class StepperComponent {
  @Input() currentStep = 0;
  @Input() steps: string[] = [];
}
