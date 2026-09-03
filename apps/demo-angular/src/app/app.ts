import { Component } from '@angular/core';
import { ErbButtonDirective, ToastComponent, ToastService, ErbCardComponent, ErbCardHeaderComponent, ErbCardTitleComponent, ErbCardDescriptionComponent, ErbCardBodyComponent, ErbCardFooterComponent } from '@glowing-sea-studio/erebus-angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ErbButtonDirective,
    ToastComponent,
    ErbCardComponent,
    ErbCardHeaderComponent,
    ErbCardTitleComponent,
    ErbCardDescriptionComponent,
    ErbCardBodyComponent,
    ErbCardFooterComponent
  ],
  template: `
    <div style="min-height: 100vh; background-color: var(--erb-color-bg-canvas-subtle); padding: 3rem; font-family: var(--erb-font-sans);">
      <div style="max-width: 600px; margin: 0 auto; display: flex; flex-direction: column; gap: 2rem;">
        <div>
          <h1 style="font-size: 2.5rem; font-weight: bold; color: var(--erb-color-neutral-fg); margin-bottom: 0.5rem;">Erebus Angular Demo</h1>
          <p style="color: var(--erb-color-fg-muted); font-size: 1.125rem;">Bienvenue dans la démo du Design System avec Angular !</p>
        </div>

        <erb-card>
          <erb-card-header>
            <erb-card-title>Composant interactif</erb-card-title>
            <erb-card-description>Essaie de cliquer sur le bouton ci-dessous pour voir le toast s'afficher.</erb-card-description>
          </erb-card-header>
          <erb-card-body>
            <p style="color: var(--erb-color-fg-default);">Ce composant utilise les directives et composants du Design System Erebus.</p>
          </erb-card-body>
          <erb-card-footer>
            <button erbButton (click)="showToast()">Afficher un Toast</button>
            <button erbButton style="margin-left: 1rem;" (click)="showSecondaryToast()">Autre action</button>
          </erb-card-footer>
        </erb-card>
      </div>

      <erb-toast-container></erb-toast-container>
    </div>
  `,
})
export class App {
  title = 'demo-angular';

  constructor(private toastService: ToastService) {}

  showToast() {
    this.toastService.show('Hello depuis Angular ! Le design system est incroyable.');
  }

  showSecondaryToast() {
    this.toastService.show('Action secondaire effectuée.');
  }
}
