import { Component, input, output } from '@angular/core';

export type SwitchSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'erb-switch',
  standalone: true,
  template: `
    <label class="erb-switch-wrapper" [attr.data-disabled]="disabled()">
      <input 
        type="checkbox" 
        role="switch"
        class="erb-switch" 
        [attr.data-size]="size()"
        [disabled]="disabled()"
        [checked]="checked()"
        (change)="onChange($event)"
      />
      <span class="erb-switch-label">
        <ng-content></ng-content>
      </span>
    </label>
  `,
  host: {
    style: 'display: contents;'
  }
})
export class ErbSwitchComponent {
  size = input<SwitchSize>('md');
  disabled = input<boolean>(false);
  checked = input<boolean>(false);
  
  checkedChange = output<boolean>();

  onChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.checkedChange.emit(input.checked);
  }
}
