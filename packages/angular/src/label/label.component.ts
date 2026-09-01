import { Component, input } from '@angular/core';

@Component({
  selector: 'erb-label',
  standalone: true,
  template: `
    <label
      class="erb-label"
      [class.erb-label--disabled]="disabled()"
      [class.erb-label--required]="required()"
    >
      <ng-content></ng-content>
    </label>
  `,
  host: {
    style: 'display: contents;'
  }
})
export class ErbLabelComponent {
  disabled = input<boolean>(false);
  required = input<boolean>(false);
}
