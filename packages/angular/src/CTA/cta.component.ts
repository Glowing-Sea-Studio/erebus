import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'erb-cta',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="erb-cta {{className}}"><ng-content></ng-content></div>`,
  styleUrls: ['../../../../packages/core/src/components/cta.css']
})
export class CTAComponent {
  @Input() className = '';
}
