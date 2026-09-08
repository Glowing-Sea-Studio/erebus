import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface FAQItemProps {
  question: string;
  answer: string;
}

@Component({
  selector: 'erb-faq',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="erb-faq" [ngClass]="className()">
      <div *ngFor="let item of items()" class="erb-faq-item">
        <p class="erb-faq-question">{{ item.question }}</p>
        <p class="erb-faq-answer">{{ item.answer }}</p>
      </div>
    </div>
  `,
})
export class FAQComponent {
  className = input<string>('');
  items = input.required<FAQItemProps[]>();
}
