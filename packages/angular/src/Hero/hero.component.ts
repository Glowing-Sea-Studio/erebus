import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({


  selector: 'erb-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="erb-hero" [ngClass]="className()">
      <ng-content></ng-content>
    </div>
  `,
})
export class HeroComponent {
  className = input<string>('');
}
