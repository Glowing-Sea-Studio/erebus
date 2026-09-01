import { Component, input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'erb-daterangepicker',
  standalone: true,
  template: `
    <input type="date" class="erb-daterangepicker-start" [value]="value?.start || ''" (input)="onStartInput($event)" [disabled]="disabled">
    <span class="erb-daterangepicker-separator">-</span>
    <input type="date" class="erb-daterangepicker-end" [value]="value?.end || ''" (input)="onEndInput($event)" [disabled]="disabled">
  `,
  host: {
    class: 'erb-daterangepicker',
    '[attr.data-size]': 'size()'
  },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ErbDateRangePickerComponent),
      multi: true
    }
  ]
})
export class ErbDateRangePickerComponent implements ControlValueAccessor {
  size = input<'sm' | 'md' | 'lg'>('md');
  value: { start?: string, end?: string } = {};
  disabled: boolean = false;

  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(value: any): void {
    this.value = value || {};
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
  
  onStartInput(event: Event) {
    const val = (event.target as HTMLInputElement).value;
    this.value = { ...this.value, start: val };
    this.onChange(this.value);
  }
  
  onEndInput(event: Event) {
    const val = (event.target as HTMLInputElement).value;
    this.value = { ...this.value, end: val };
    this.onChange(this.value);
  }
}
