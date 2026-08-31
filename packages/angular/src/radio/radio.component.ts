import { Component, input, output } from '@angular/core';

export type RadioSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'erb-radio',
  standalone: true,
  template: `
    <label class="erb-radio-wrapper" [attr.data-disabled]="disabled()">
      <input 
        type="radio" 
        class="erb-radio" 
        [name]="name()"
        [attr.data-size]="size()"
        [disabled]="disabled()"
        [checked]="checked()"
        (change)="onChange($event)"
      />
      <span class="erb-radio-label">
        <ng-content></ng-content>
      </span>
    </label>
  `,
  host: {
    style: 'display: contents;'
  }
})
export class ErbRadioComponent {
  size = input<RadioSize>('md');
  disabled = input<boolean>(false);
  checked = input<boolean>(false);
  name = input<string>();
  
  checkedChange = output<boolean>();

  onChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.checkedChange.emit(input.checked);
  }
}
