
import { Component} from '@angular/core';
import { AppShellService } from './app-shell.service';

@Component({
  selector: 'erb-app-shell',
  template: `<div class="erb-app-shell"><ng-content></ng-content></div>`,
  styleUrls: ['../../../../packages/core/src/components/app-shell.css'],
  standalone: true,

  providers: [AppShellService]
})
export class AppShellComponent {
}
