import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'erb-hero',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="erb-hero {{className}}"><ng-content></ng-content></div>`,
  styleUrls: ['../../../../core/src/components/hero.css']
})
export class HeroComponent {
  @Input() className = '';
}
