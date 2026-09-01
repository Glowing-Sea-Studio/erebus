import { Component, input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'erb-datepicker',
  standalone: true,
  template: `<input type="date" [attr.data-size]="size()" class="erb-datepicker-input" (input)="onInput($event)" (blur)="onTouched()" [value]="value" [disabled]="disabled">`,
  host: {
    class: 'erb-datepicker'
  },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ErbDatePickerComponent),
      multi: true
    }
  ]
})
export class ErbDatePickerComponent implements ControlValueAccessor {
  size = input<'sm' | 'md' | 'lg'>('md');
  value: string = '';
  disabled: boolean = false;

  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(value: any): void {
    this.value = value || '';
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
  
  onInput(event: Event) {
    const val = (event.target as HTMLInputElement).value;
    this.value = val;
    this.onChange(val);
  }
}
