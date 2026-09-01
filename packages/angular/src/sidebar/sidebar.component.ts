
import { Component } from '@angular/core';

@Component({
  selector: 'erb-sidebar',
  template: `<div class="erb-sidebar"><ng-content></ng-content></div>`,
  styleUrls: ['../../../../packages/core/src/components/sidebar.css'],
  standalone: true
})
export class SidebarComponent {
}
