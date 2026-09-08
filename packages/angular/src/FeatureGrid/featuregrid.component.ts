import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface FeatureProps {
  title: string;
  description: string;
}

@Component({
  selector: 'erb-featuregrid',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="erb-featuregrid" [ngClass]="className()">
      <div *ngFor="let feature of features()" class="erb-featuregrid-item">
        <h3 class="erb-featuregrid-title">{{ feature.title }}</h3>
        <p class="erb-featuregrid-description">{{ feature.description }}</p>
      </div>
    </div>
  `,
})
export class FeatureGridComponent {
  className = input<string>('');
  features = input.required<FeatureProps[]>();
}
