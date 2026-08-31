import { Component, input } from '@angular/core';

@Component({
  selector: 'erb-radio-group',
  standalone: true,
  template: `
    <fieldset class="erb-radio-group" [disabled]="disabled()">
      @if (legend()) {
        <legend class="erb-radio-group-legend">{{ legend() }}</legend>
      }
      <div class="erb-radio-group-content">
        <ng-content></ng-content>
      </div>
    </fieldset>
  `,
  host: {
    style: 'display: contents;'
  }
})
export class ErbRadioGroupComponent {
  legend = input<string>();
  disabled = input<boolean>(false);
}
