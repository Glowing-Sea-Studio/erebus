import { Component, input  } from '@angular/core';

export type AlertIntent = 'info' | 'success' | 'warning' | 'danger';

@Component({
  selector: 'erb-alert',
  standalone: true,
  
  template: `
    <div class="erb-alert-content">
      @if (title()) {
        <div class="erb-alert-title">{{ title() }}</div>
      }
      <div class="erb-alert-description">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  host: {
    class: 'erb-alert',
    '[attr.data-intent]': 'intent()',
  }
})
export class ErbAlertComponent {
  intent = input<AlertIntent>('info');
  title = input<string>();
}
