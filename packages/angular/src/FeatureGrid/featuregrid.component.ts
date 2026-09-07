import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({


  selector: 'erb-featuregrid',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="erb-featuregrid" [ngClass]="className()">
      <ng-content></ng-content>
    </div>
  `,
})
export class FeatureGridComponent {
  className = input<string>('');
}
