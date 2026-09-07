import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({


  selector: 'erb-faq',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="erb-faq" [ngClass]="className()">
      <ng-content></ng-content>
    </div>
  `,
})
export class FAQComponent {
  className = input<string>('');
}
