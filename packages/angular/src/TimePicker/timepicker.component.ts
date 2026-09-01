import { Component, input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'erb-timepicker',
  standalone: true,
  template: `<input type="time" [attr.data-size]="size()" class="erb-timepicker-input" (input)="onInput($event)" (blur)="onTouched()" [value]="value" [disabled]="disabled">`,
  host: {
    class: 'erb-timepicker'
  },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ErbTimePickerComponent),
      multi: true
    }
  ]
})
export class ErbTimePickerComponent implements ControlValueAccessor {
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
