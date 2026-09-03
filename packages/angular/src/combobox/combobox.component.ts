import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import {
  Component,
  Input,
  Output,
  EventEmitter,
  forwardRef,
  HostListener,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';

export interface ComboboxOption {
  value: string;
  label: string;
}

@Component({
  selector: 'erb-combobox',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="erb-combobox-wrapper" #wrapper>
      <label *ngIf="label" [attr.for]="id" class="erb-label">
        {{ label }}
      </label>
      <div class="erb-combobox">
        <input
          #input
          [id]="id"
          type="text"
          role="combobox"
          [attr.aria-expanded]="isOpen"
          [attr.aria-controls]="listboxId"
          [attr.aria-activedescendant]="isOpen && activeIndex >= 0 ? listboxId + '-option-' + activeIndex : null"
          [attr.aria-invalid]="!!error"
          [attr.aria-describedby]="error ? errorId : null"
          class="erb-combobox-input"
          [class]="className"
          [value]="inputValue"
          (input)="onInput($event)"
          (keydown)="onKeyDown($event)"
          (focus)="isOpen = true"
          [disabled]="disabled"
          [placeholder]="placeholder"
        />
      </div>
      <ul
        [id]="listboxId"
        class="erb-combobox-listbox"
        [attr.data-open]="isOpen && filteredOptions.length > 0"
        role="listbox"
      >
        <li
          *ngFor="let opt of filteredOptions; let i = index"
          [id]="listboxId + '-option-' + i"
          class="erb-combobox-option"
          role="option"
          [attr.aria-selected]="opt.value === value"
          (click)="selectOption(opt.value)"
          (mouseenter)="activeIndex = i"
          [style.backgroundColor]="activeIndex === i ? 'var(--erb-color-bg-surface)' : ''"
        >
          {{ opt.label }}
        </li>
      </ul>
      <span *ngIf="error" [id]="errorId" class="erb-error-message">
        {{ error }}
      </span>
    </div>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ComboboxComponent),
      multi: true,
    },
  ],
  
})
export class ComboboxComponent implements ControlValueAccessor {
  @Input() options: ComboboxOption[] = [];
  @Input() label?: string;
  @Input() error?: string;
  @Input() id: string = 'erb-combobox-' + Math.random().toString(36).substring(2, 9);
  @Input() disabled: boolean = false;
  @Input() placeholder: string = '';
  @Input() className: string = '';

  @Output() valueChange = new EventEmitter<string>();

  @ViewChild('wrapper') wrapperRef!: ElementRef<HTMLDivElement>;
  @ViewChild('input') inputRef!: ElementRef<HTMLInputElement>;

  value: string = '';
  inputValue: string = '';
  isOpen: boolean = false;
  activeIndex: number = -1;

  get errorId(): string {
    return `${this.id}-error`;
  }

  get listboxId(): string {
    return `${this.id}-listbox`;
  }

  get filteredOptions(): ComboboxOption[] {
    return this.options.filter(opt =>
      opt.label.toLowerCase().includes(this.inputValue.toLowerCase())
    );
  }

  onChange: any = () => {};
  onTouch: any = () => {};

  @HostListener('document:mousedown', ['$event'])
  onClickOutside(event: MouseEvent) {
    if (this.wrapperRef && !this.wrapperRef.nativeElement.contains(event.target as Node)) {
      this.isOpen = false;
    }
  }

  onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.inputValue = input.value;
    this.isOpen = true;
    this.activeIndex = -1;
  }

  selectOption(selectedValue: string) {
    if (this.disabled) return;
    const selectedOption = this.options.find(opt => opt.value === selectedValue);
    if (selectedOption) {
      this.inputValue = selectedOption.label;
      this.value = selectedValue;
      this.onChange(selectedValue);
      this.valueChange.emit(selectedValue);
    }
    this.isOpen = false;
    setTimeout(() => this.inputRef.nativeElement.focus(), 0);
  }

  onKeyDown(e: KeyboardEvent) {
    if (this.disabled) return;

    if (!this.isOpen) {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === 'Enter') {
        this.isOpen = true;
      }
      return;
    }

    const maxIndex = this.filteredOptions.length - 1;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        this.activeIndex = this.activeIndex < maxIndex ? this.activeIndex + 1 : this.activeIndex;
        break;
      case 'ArrowUp':
        e.preventDefault();
        this.activeIndex = this.activeIndex > 0 ? this.activeIndex - 1 : 0;
        break;
      case 'Enter':
        e.preventDefault();
        if (this.activeIndex >= 0 && this.activeIndex <= maxIndex) {
          this.selectOption(this.filteredOptions[this.activeIndex]!.value);
        }
        break;
      case 'Escape':
        this.isOpen = false;
        break;
    }
  }

  writeValue(val: any): void {
    if (val !== undefined && val !== null) {
      this.value = val;
      const selectedOption = this.options.find(opt => opt.value === val);
      this.inputValue = selectedOption ? selectedOption.label : '';
    } else {
      this.value = '';
      this.inputValue = '';
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
