import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'erb-logocloud',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="erb-logocloud {{className}}"><ng-content></ng-content></div>`,
  styleUrls: ['../../../../core/src/components/logocloud.css']
})
export class LogoCloudComponent {
  @Input() className = '';
}
