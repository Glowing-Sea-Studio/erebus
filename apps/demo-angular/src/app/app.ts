import { Component } from '@angular/core';
import { ErbButtonDirective, ToastComponent, ToastService } from '@glowing-sea-studio/erebus-angular';
import { KitchenSinkComponent } from './kitchen-sink.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ErbButtonDirective,
    ToastComponent,
    KitchenSinkComponent
  ],
  template: `
    <div style="min-height: 100vh; background-color: var(--erb-color-bg-canvas-subtle); padding: 3rem; font-family: var(--erb-font-sans);">
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

      <erb-toast-container></erb-toast-container>
    </div>
  `,
})
export class App {
  title = 'demo-angular';

  constructor(private toastService: ToastService) {}

  showToast() {
    this.toastService.show('Hello depuis Angular ! Le design system fonctionne parfaitement.');
  }
}
