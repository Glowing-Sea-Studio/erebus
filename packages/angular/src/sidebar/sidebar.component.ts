
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppShellService } from '../app-shell/app-shell.service';

@Component({
  selector: 'erb-sidebar',
  template: `
    <div
      class="erb-sidebar-overlay"
      [class.open]="isMobileOpen()"
      [attr.data-mobile-open]="isMobileOpen()"
      (click)="closeSidebar()"
      aria-hidden="true"
    ></div>
    <div
      class="erb-sidebar"
      [attr.data-mobile-open]="isMobileOpen()"
    >
      <button
        type="button"
        class="erb-sidebar-close"
        (click)="closeSidebar()"
        aria-label="Close sidebar"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['../../../../packages/core/src/components/sidebar.css'],
  standalone: true,
  imports: [CommonModule],

  host: {
    style: 'display: contents;'
  }
})
export class SidebarComponent {
  private appShellService = inject(AppShellService, { optional: true });

  isMobileOpen = () => this.appShellService?.isMobileSidebarOpen() ?? false;

  closeSidebar() {
    this.appShellService?.closeMobileSidebar();
  }
}
