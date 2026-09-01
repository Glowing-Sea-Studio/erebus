import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'erb-color-picker',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="erb-color-picker" [ngClass]="className">
      <input
        type="color"
        class="erb-color-picker-input"
        [value]="value"
        (input)="onInputChange($event)"
      />
    </div>
  `,
})
export class ColorPickerComponent {
  @Input() value: string = '#000000';
  @Input() className: string = '';
  @Output() valueChange = new EventEmitter<string>();

  onInputChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
    this.valueChange.emit(this.value);
  }
}
