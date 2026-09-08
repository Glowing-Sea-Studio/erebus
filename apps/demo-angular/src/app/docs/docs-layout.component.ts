import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { AppShellComponent, ErbHeaderComponent, SidebarComponent, ErbFooterComponent, ToastComponent } from '@glowing-sea-studio/erebus-angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-docs-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    AppShellComponent,
    ErbHeaderComponent,
    SidebarComponent,
    ErbFooterComponent,
    ToastComponent
  ],
  template: `
    <erb-app-shell>
      <erb-header [showHamburgerMenu]="true">
        <div style="flex: 1; font-weight: bold; font-size: 1.5rem; color: var(--erb-color-neutral-fg);">Erebus Angular Docs</div>
        <nav>
          <a href="#" style="color: var(--erb-color-fg-muted); text-decoration: none; margin-right: 1rem;">Docs</a>
          <a href="#" style="color: var(--erb-color-fg-muted); text-decoration: none;">GitHub</a>
        </nav>
      </erb-header>

      <erb-sidebar style="padding: 1rem; gap: 1rem;">
        <div style="font-weight: bold; color: var(--erb-color-neutral-fg);">Components</div>
        <a routerLink="/" routerLinkActive="active-link" [routerLinkActiveOptions]="{exact: true}" style="text-decoration: none; display: block; margin-bottom: 0.5rem;" [ngStyle]="{'color': isActive('/') ? 'var(--erb-color-primary-base)' : 'var(--erb-color-fg-muted)'}">Overview</a>
        <a routerLink="/button" routerLinkActive="active-link" style="text-decoration: none; display: block; margin-bottom: 0.5rem;" [ngStyle]="{'color': isActive('/button') ? 'var(--erb-color-primary-base)' : 'var(--erb-color-fg-muted)'}">Button</a>
        <a routerLink="/forms" routerLinkActive="active-link" style="text-decoration: none; display: block; margin-bottom: 0.5rem;" [ngStyle]="{'color': isActive('/forms') ? 'var(--erb-color-primary-base)' : 'var(--erb-color-fg-muted)'}">Forms</a>
        <a routerLink="/feedback-display" routerLinkActive="active-link" style="text-decoration: none; display: block; margin-bottom: 0.5rem;" [ngStyle]="{'color': isActive('/feedback-display') ? 'var(--erb-color-primary-base)' : 'var(--erb-color-fg-muted)'}">Feedback & Display</a>
        <a routerLink="/layout-navigation" routerLinkActive="active-link" style="text-decoration: none; display: block; margin-bottom: 0.5rem;" [ngStyle]="{'color': isActive('/layout-navigation') ? 'var(--erb-color-primary-base)' : 'var(--erb-color-fg-muted)'}">Layout & Navigation</a>
        <a routerLink="/advanced-components" routerLinkActive="active-link" style="text-decoration: none; display: block; margin-bottom: 0.5rem;" [ngStyle]="{'color': isActive('/advanced-components') ? 'var(--erb-color-primary-base)' : 'var(--erb-color-fg-muted)'}">Advanced Components</a>
      </erb-sidebar>

      <main style="padding: 3rem; max-width: 1000px; margin: 0 auto; width: 100%; box-sizing: border-box;">
        <router-outlet></router-outlet>
      </main>

      <erb-footer style="padding: 2rem; text-align: center; color: var(--erb-color-fg-muted);">
        <p>© 2026 Glowing Sea Studio. All rights reserved.</p>
      </erb-footer>
      
      <erb-toast-container></erb-toast-container>
    </erb-app-shell>
  `,
  styles: [`
    .active-link {
      color: var(--erb-color-primary-base) !important;
    }
  `]
})
export class DocsLayoutComponent {
  isActive(url: string): boolean {
    return window.location.pathname === url;
  }
}
