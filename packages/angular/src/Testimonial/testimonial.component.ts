import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({


  selector: 'erb-testimonial',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="erb-testimonial" [ngClass]="className()">
      <blockquote class="erb-testimonial-quote">"{{ quote() }}"</blockquote>
      <div class="erb-testimonial-author-container">
        <img *ngIf="avatarUrl()" [src]="avatarUrl()" [alt]="author()" class="erb-testimonial-avatar" />
        <div class="erb-testimonial-author-info">
          <p class="erb-testimonial-author">{{ author() }}</p>
          <p *ngIf="role()" class="erb-testimonial-role">{{ role() }}</p>
        </div>
      </div>
      <ng-content></ng-content>
    </div>
  `,
})
export class TestimonialComponent {
  className = input<string>('');
  quote = input.required<string>();
  author = input.required<string>();
  role = input<string>();
  avatarUrl = input<string>();
}
