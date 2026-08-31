import { Component, input } from '@angular/core';

@Component({
  selector: 'erb-checkbox-group',
  standalone: true,
  template: `
    <fieldset class="erb-checkbox-group" [disabled]="disabled()">
      @if (legend()) {
        <legend class="erb-checkbox-group-legend">{{ legend() }}</legend>
      }
      <div class="erb-checkbox-group-content">
        <ng-content></ng-content>
      </div>
    </fieldset>
  `,
  host: {
    style: 'display: contents;'
  }
})
export class ErbCheckboxGroupComponent {
  legend = input<string>();
  disabled = input<boolean>(false);
}
