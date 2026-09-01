import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'erb-testimonial',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="erb-testimonial {{className}}"><ng-content></ng-content></div>`,
  styleUrls: ['../../../../core/src/components/testimonial.css']
})
export class TestimonialComponent {
  @Input() className = '';
}
