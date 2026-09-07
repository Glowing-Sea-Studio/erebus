import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({


  selector: 'erb-logocloud',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="erb-logocloud" [ngClass]="className()">
      <ng-content></ng-content>
    </div>
  `,
})
export class LogoCloudComponent {
  className = input<string>('');
}
