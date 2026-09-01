
import { Component } from '@angular/core';

@Component({
  selector: 'erb-bottom-nav',
  template: `<div class="erb-bottom-nav"><ng-content></ng-content></div>`,
  styleUrls: ['../../../../packages/core/src/components/bottom-nav.css'],
  standalone: true
})
export class BottomNavComponent {
}
