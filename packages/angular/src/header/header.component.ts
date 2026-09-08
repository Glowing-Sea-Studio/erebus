import { Component, input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppShellService } from '../app-shell/app-shell.service';

@Component({
  selector: 'erb-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ng-content></ng-content>
    @if (showHamburgerMenu()) {
      <button
        type="button"
        class="erb-header-hamburger"
        (click)="toggleSidebar()"
        aria-label="Toggle Menu"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>
    }
  `,
  host: { class: 'erb-header' },
  
})
export class ErbHeaderComponent {
  showHamburgerMenu = input(false);
  private appShellService = inject(AppShellService, { optional: true });

  toggleSidebar() {
    if (this.appShellService) {
      this.appShellService.toggleMobileSidebar();
    }
  }
}
