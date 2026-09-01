import { Component, Input } from '@angular/core';

@Component({
  selector: 'erb-progress',
  standalone: true,
  template: `
    <div class="erb-progress" role="progressbar" [attr.aria-valuenow]="value" [attr.aria-valuemin]="0" [attr.aria-valuemax]="max">
      <div class="erb-progress__bar" [style.width.%]="getPercentage()"></div>
    </div>
  `,
})
export class ProgressComponent {
  @Input() value: number = 0;
  @Input() max: number = 100;

  getPercentage(): number {
    return Math.min(100, Math.max(0, (this.value / this.max) * 100));
  }
}
