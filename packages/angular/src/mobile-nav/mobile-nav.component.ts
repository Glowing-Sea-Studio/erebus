
import { Component, Input } from '@angular/core';

@Component({
  selector: 'erb-mobile-nav',
  template: `<div class="erb-mobile-nav"><ng-content></ng-content></div>`,
  styleUrls: ['../../../../core/src/components/mobile-nav.css'],
  standalone: true
})
export class MobileNavComponent {
}
