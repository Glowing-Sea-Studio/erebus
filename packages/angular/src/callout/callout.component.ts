import { Component, input } from '@angular/core';

export type CalloutIntent = 'info' | 'success' | 'warning' | 'danger' | 'neutral';

@Component({
  selector: 'erb-callout',
  standalone: true,
  template: `<ng-content></ng-content>`,
  host: {
    class: 'erb-callout',
    '[attr.data-intent]': 'intent()'
  }
})
export class CalloutComponent {
  intent = input<CalloutIntent>('neutral');
}
