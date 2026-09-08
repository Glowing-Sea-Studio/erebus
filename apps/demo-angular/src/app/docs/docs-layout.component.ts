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
        <div class="docs-header-title">
          <img src="/logo.svg" alt="Logo" class="docs-header-logo" />
          <span class="desktop-only">Erebus Angular Docs</span>
          <span class="mobile-only">Erebus Angular</span>
        </div>
        <nav class="desktop-only">
          <a href="#" style="color: var(--erb-color-fg-muted); text-decoration: none; margin-right: 1rem;">Docs</a>
          <a href="#" style="color: var(--erb-color-fg-muted); text-decoration: none;">GitHub</a>
        </nav>
      </erb-header>

      <erb-sidebar><div style="padding: 1rem; display: flex; flex-direction: column; gap: 0.25rem; height: 100%;">
        <div class="mobile-only" style="margin-bottom: 1rem; padding-bottom: 1rem; border-bottom: 1px solid var(--erb-color-border-default);">
          <a href="#" style="text-decoration: none; display: block; margin-bottom: 0.5rem; padding: 0.5rem; color: var(--erb-color-fg-muted);">Docs</a>
          <a href="#" style="text-decoration: none; display: block; padding: 0.5rem; color: var(--erb-color-fg-muted);">GitHub</a>
        </div>
        
        <h3 style="font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--erb-color-fg-muted); font-weight: 600; margin: 0.5rem 0; padding: 0 0.5rem;">Components</h3>
        <a routerLink="/" routerLinkActive="active-link" [routerLinkActiveOptions]="{exact: true}" style="text-decoration: none; display: block; margin-bottom: 0.25rem; padding: 0.5rem; border-radius: 6px;" [ngStyle]="{'color': isActive('/') ? 'var(--erb-color-primary-base)' : 'var(--erb-color-fg-muted)', 'background-color': isActive('/') ? 'var(--erb-color-bg-subtle)' : 'transparent', 'font-weight': isActive('/') ? '600' : '400'}">Overview</a>
        <a routerLink="/button" routerLinkActive="active-link" style="text-decoration: none; display: block; margin-bottom: 0.25rem; padding: 0.5rem; border-radius: 6px;" [ngStyle]="{'color': isActive('/button') ? 'var(--erb-color-primary-base)' : 'var(--erb-color-fg-muted)', 'background-color': isActive('/button') ? 'var(--erb-color-bg-subtle)' : 'transparent', 'font-weight': isActive('/button') ? '600' : '400'}">Button</a>
        <a routerLink="/forms" routerLinkActive="active-link" style="text-decoration: none; display: block; margin-bottom: 0.25rem; padding: 0.5rem; border-radius: 6px;" [ngStyle]="{'color': isActive('/forms') ? 'var(--erb-color-primary-base)' : 'var(--erb-color-fg-muted)', 'background-color': isActive('/forms') ? 'var(--erb-color-bg-subtle)' : 'transparent', 'font-weight': isActive('/forms') ? '600' : '400'}">Forms</a>
        <a routerLink="/feedback-display" routerLinkActive="active-link" style="text-decoration: none; display: block; margin-bottom: 0.25rem; padding: 0.5rem; border-radius: 6px;" [ngStyle]="{'color': isActive('/feedback-display') ? 'var(--erb-color-primary-base)' : 'var(--erb-color-fg-muted)', 'background-color': isActive('/feedback-display') ? 'var(--erb-color-bg-subtle)' : 'transparent', 'font-weight': isActive('/feedback-display') ? '600' : '400'}">Feedback & Display</a>
        <a routerLink="/layout-navigation" routerLinkActive="active-link" style="text-decoration: none; display: block; margin-bottom: 0.25rem; padding: 0.5rem; border-radius: 6px;" [ngStyle]="{'color': isActive('/layout-navigation') ? 'var(--erb-color-primary-base)' : 'var(--erb-color-fg-muted)', 'background-color': isActive('/layout-navigation') ? 'var(--erb-color-bg-subtle)' : 'transparent', 'font-weight': isActive('/layout-navigation') ? '600' : '400'}">Layout & Navigation</a>
        <a routerLink="/advanced-components" routerLinkActive="active-link" style="text-decoration: none; display: block; margin-bottom: 0.25rem; padding: 0.5rem; border-radius: 6px;" [ngStyle]="{'color': isActive('/advanced-components') ? 'var(--erb-color-primary-base)' : 'var(--erb-color-fg-muted)', 'background-color': isActive('/advanced-components') ? 'var(--erb-color-bg-subtle)' : 'transparent', 'font-weight': isActive('/advanced-components') ? '600' : '400'}">Advanced Components</a>
      </div></erb-sidebar>

      <main class="docs-main">
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
    .docs-main {
      padding: 1rem;
      max-width: 1000px;
      margin: 0 auto;
      width: 100%;
      box-sizing: border-box;
    }
    .docs-header-title {
      flex: 1;
      display: flex;
      align-items: center;
      gap: 0.75rem;
      font-weight: bold;
      font-size: 1.125rem;
      color: var(--erb-color-neutral-fg);
    }
    .docs-header-logo {
      width: 32px;
      height: 32px;
    }
    .mobile-only {
      display: block;
    }
    .desktop-only {
      display: none !important;
    }
    @media (min-width: 769px) {
      .docs-main {
        padding: 3rem;
      }
      .docs-header-title {
        font-size: 1.5rem;
      }
      .mobile-only {
        display: none !important;
      }
      .desktop-only {
        display: block !important;
      }
      nav.desktop-only {
        display: flex !important;
      }
    }
  `]
})
export class DocsLayoutComponent {
  isActive(url: string): boolean {
    return typeof window !== 'undefined' && window.location.pathname === url;
  }
}
