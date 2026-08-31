import { Component, input, output } from '@angular/core';

export type CheckboxSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'erb-checkbox',
  standalone: true,
  template: `
    <label class="erb-checkbox-wrapper" [attr.data-disabled]="disabled()">
      <input 
        type="checkbox" 
        class="erb-checkbox" 
        [attr.data-size]="size()"
        [disabled]="disabled()"
        [checked]="checked()"
        (change)="onChange($event)"
      />
      <span class="erb-checkbox-label">
        <ng-content></ng-content>
      </span>
    </label>
  `,
  host: {
    style: 'display: contents;'
  }
})
export class ErbCheckboxComponent {
  size = input<CheckboxSize>('md');
  disabled = input<boolean>(false);
  checked = input<boolean>(false);
  
  checkedChange = output<boolean>();

  onChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.checkedChange.emit(input.checked);
  }
}
