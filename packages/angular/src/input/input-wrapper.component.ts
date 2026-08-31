import { Component, input  } from '@angular/core';

@Component({
  selector: 'erb-input-wrapper',
  standalone: true,
  
  template: `
    @if (label()) {
      <label class="erb-label" [attr.for]="inputId()">{{ label() }}</label>
    }
    <ng-content></ng-content>
    @if (error()) {
      <div class="erb-error-message">{{ error() }}</div>
    }
  `,
  host: {
    class: 'erb-input-wrapper',
  }
})
export class ErbInputWrapperComponent {
  label = input<string>();
  error = input<string>();
  inputId = input<string>();
}
