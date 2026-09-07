import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({


  selector: 'erb-cta',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="erb-cta" [ngClass]="className()">
      <ng-content></ng-content>
    </div>
  `,
})
export class CTAComponent {
  className = input<string>('');
}
