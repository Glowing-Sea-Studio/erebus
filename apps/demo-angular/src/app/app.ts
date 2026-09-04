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
    <erb-app-shell style="display: flex; flex-direction: column; min-height: 100vh; background-color: var(--erb-color-bg-canvas-subtle); font-family: var(--erb-font-sans);">
      <erb-header style="padding: 1rem; border-bottom: 1px solid var(--erb-color-border-default); display: flex; justify-content: space-between; align-items: center;">
        <div style="font-weight: bold; font-size: 1.5rem; color: var(--erb-color-neutral-fg);">Erebus Angular</div>
        <nav>
          <a href="#" style="color: var(--erb-color-fg-muted); text-decoration: none; margin-right: 1rem;">Docs</a>
          <a href="#" style="color: var(--erb-color-fg-muted); text-decoration: none;">GitHub</a>
        </nav>
      </erb-header>

      <div style="display: flex; flex: 1;">
        <erb-sidebar style="width: 250px; border-right: 1px solid var(--erb-color-border-default); padding: 1rem; display: flex; flex-direction: column; gap: 1rem;">
          <div style="font-weight: bold; color: var(--erb-color-neutral-fg);">Components</div>
          <a href="#" style="color: var(--erb-color-primary-base); text-decoration: none;">Kitchen Sink</a>
          <a href="#" style="color: var(--erb-color-fg-muted); text-decoration: none;">Buttons</a>
          <a href="#" style="color: var(--erb-color-fg-muted); text-decoration: none;">Forms</a>
        </erb-sidebar>

        <main style="flex: 1; padding: 3rem; overflow-y: auto;">
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
      </div>

      <erb-footer style="padding: 2rem; border-top: 1px solid var(--erb-color-border-default); text-align: center; color: var(--erb-color-fg-muted);">
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
