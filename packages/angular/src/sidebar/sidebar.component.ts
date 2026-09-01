
import { Component, Input } from '@angular/core';

@Component({
  selector: 'erb-sidebar',
  template: `<div class="erb-sidebar"><ng-content></ng-content></div>`,
  styleUrls: ['../../../../core/src/components/sidebar.css'],
  standalone: true
})
export class SidebarComponent {
}
