import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'erb-featuregrid',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="erb-featuregrid {{className}}"><ng-content></ng-content></div>`,
  styleUrls: ['../../../../core/src/components/featuregrid.css']
})
export class FeatureGridComponent {
  @Input() className = '';
}
