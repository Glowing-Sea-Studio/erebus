
import { Component, Input } from '@angular/core';

@Component({
  selector: 'erb-app-shell',
  template: `<div class="erb-app-shell"><ng-content></ng-content></div>`,
  styleUrls: ['../../../../packages/core/src/components/app-shell.css'],
  standalone: true
})
export class AppShellComponent {
}
