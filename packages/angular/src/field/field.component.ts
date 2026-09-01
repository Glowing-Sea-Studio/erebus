import { Component, input } from '@angular/core';
import { ErbLabelComponent } from '../label/label.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'erb-field',
  standalone: true,
  imports: [CommonModule, ErbLabelComponent],
  template: `
    <div
      class="erb-field"
      [class.erb-field--horizontal]="horizontal()"
    >
      <erb-label *ngIf="label()" [required]="required()" [disabled]="disabled()">
        {{ label() }}
      </erb-label>
      <div class="erb-field__content">
        <ng-content></ng-content>
        <div *ngIf="error()" class="erb-field__error">{{ error() }}</div>
        <div *ngIf="!error() && hint()" class="erb-field__hint">{{ hint() }}</div>
      </div>
    </div>
  `,
  host: {
    style: 'display: contents;'
  }
})
export class ErbFieldComponent {
  label = input<string>();
  hint = input<string>();
  error = input<string>();
  horizontal = input<boolean>(false);
  required = input<boolean>(false);
  disabled = input<boolean>(false);
}
