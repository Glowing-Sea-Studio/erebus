import { Component } from '@angular/core';
import { ErbButtonDirective, ToastComponent, ToastService, AppShellComponent, ErbHeaderComponent, SidebarComponent, ErbFooterComponent } from '@glowing-sea-studio/erebus-angular';
import { KitchenSinkComponent } from './kitchen-sink.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ErbButtonDirective,
    ToastComponent,
    KitchenSinkComponent,
    AppShellComponent,
    ErbHeaderComponent,
    SidebarComponent,
    ErbFooterComponent
  ],
  template: `
    <erb-app-shell>
      <erb-header [showHamburgerMenu]="true">
        <div style="flex: 1; font-weight: bold; font-size: 1.5rem; color: var(--erb-color-neutral-fg);">Erebus Angular</div>
        <nav>
          <a href="#" style="color: var(--erb-color-fg-muted); text-decoration: none; margin-right: 1rem;">Docs</a>
          <a href="#" style="color: var(--erb-color-fg-muted); text-decoration: none;">GitHub</a>
        </nav>
      </erb-header>

      <erb-sidebar style="padding: 1rem; gap: 1rem;">
        <div style="font-weight: bold; color: var(--erb-color-neutral-fg);">Components</div>
        <a href="#" style="color: var(--erb-color-primary-base); text-decoration: none;">Kitchen Sink</a>
        <a href="#" style="color: var(--erb-color-fg-muted); text-decoration: none;">Buttons</a>
        <a href="#" style="color: var(--erb-color-fg-muted); text-decoration: none;">Forms</a>
      </erb-sidebar>

      <main style="padding: 3rem;">
        <div style="max-width: 800px; margin: 0 auto; display: flex; flex-direction: column; gap: 2rem;">
          <div>
            <h1 style="font-size: 2.5rem; font-weight: bold; color: var(--erb-color-neutral-fg); margin-bottom: 0.5rem;">Erebus Angular Demo</h1>
            <p style="color: var(--erb-color-fg-muted); font-size: 1.125rem;">Aperçu de l'ensemble des composants du Design System</p>
          </div>

          <app-kitchen-sink></app-kitchen-sink>

          <div style="padding: 1rem; border: 1px solid var(--erb-color-border-default); border-radius: 8px;">
            <h2 style="font-size: 1.25rem; margin-bottom: 1rem;">Toasts</h2>
            <button erbButton variant="solid" color="primary" (click)="showToast()">Afficher un Toast</button>
          </div>
        </div>
      </main>

      <erb-footer style="padding: 2rem; text-align: center; color: var(--erb-color-fg-muted);">
        <p>© 2026 Glowing Sea Studio. All rights reserved.</p>
      </erb-footer>

      <erb-toast-container></erb-toast-container>
    </erb-app-shell>
  `,
})
export class App {
  title = 'demo-angular';

  constructor(private toastService: ToastService) {}

  showToast() {
    this.toastService.show('Hello depuis Angular ! Le design system fonctionne parfaitement.');
  }
}
