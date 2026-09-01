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
  ChangeDetectionStrategy,
} from '@angular/core';
import { CommonModule } from '@angular/common';

export interface MultiSelectOption {
  value: string;
  label: string;
}

@Component({
  selector: 'erb-multi-select',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="erb-multi-select-wrapper" #wrapper>
      <label *ngIf="label" [attr.for]="id" class="erb-label">
        {{ label }}
      </label>
      <div
        class="erb-multi-select-trigger"
        [class]="className"
        (click)="triggerClick()"
        [attr.aria-invalid]="!!error"
        [attr.aria-disabled]="disabled"
      >
        <span *ngFor="let opt of selectedOptions" class="erb-multi-select-tag">
          {{ opt.label }}
          <button
            type="button"
            class="erb-multi-select-tag-remove"
            (click)="removeOption(opt.value, $event)"
            [disabled]="disabled"
            [attr.aria-label]="'Remove ' + opt.label"
          >
            &times;
          </button>
        </span>
        <input
          #input
          [id]="id"
          type="text"
          class="erb-multi-select-input"
          role="combobox"
          [attr.aria-expanded]="isOpen"
          [attr.aria-controls]="listboxId"
          [attr.aria-activedescendant]="isOpen && activeIndex >= 0 ? listboxId + '-option-' + activeIndex : null"
          [attr.aria-describedby]="error ? errorId : null"
          [value]="inputValue"
          (input)="onInput($event)"
          (keydown)="onKeyDown($event)"
          [disabled]="disabled"
          [placeholder]="value.length === 0 ? placeholder : ''"
        />
      </div>
      <ul
        [id]="listboxId"
        class="erb-multi-select-listbox"
        [attr.data-open]="isOpen && filteredOptions.length > 0"
        role="listbox"
        aria-multiselectable="true"
      >
        <li
          *ngFor="let opt of filteredOptions; let i = index"
          [id]="listboxId + '-option-' + i"
          class="erb-multi-select-option"
          role="option"
          aria-selected="false"
          (click)="selectOption(opt.value)"
          (mouseenter)="activeIndex = i"
          [attr.data-focused]="activeIndex === i"
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
      useExisting: forwardRef(() => MultiSelectComponent),
      multi: true,
    },
  ],
  
})
export class MultiSelectComponent implements ControlValueAccessor {
  @Input() options: MultiSelectOption[] = [];
  @Input() label?: string;
  @Input() error?: string;
  @Input() id: string = 'erb-multi-select-' + Math.random().toString(36).substring(2, 9);
  @Input() disabled: boolean = false;
  @Input() placeholder: string = '';
  @Input() className: string = '';

  @Output() valueChange = new EventEmitter<string[]>();

  @ViewChild('wrapper') wrapperRef!: ElementRef<HTMLDivElement>;
  @ViewChild('input') inputRef!: ElementRef<HTMLInputElement>;

  value: string[] = [];
  inputValue: string = '';
  isOpen: boolean = false;
  activeIndex: number = -1;

  get errorId(): string {
    return `${this.id}-error`;
  }

  get listboxId(): string {
    return `${this.id}-listbox`;
  }

  get selectedOptions(): MultiSelectOption[] {
    return this.options.filter(opt => this.value.includes(opt.value));
  }

  get unselectedOptions(): MultiSelectOption[] {
    return this.options.filter(opt => !this.value.includes(opt.value));
  }

  get filteredOptions(): MultiSelectOption[] {
    return this.unselectedOptions.filter(opt =>
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

  triggerClick() {
    if (!this.disabled) {
      this.isOpen = true;
      setTimeout(() => this.inputRef.nativeElement.focus(), 0);
    }
  }

  onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.inputValue = input.value;
    this.isOpen = true;
    this.activeIndex = -1;
  }

  removeOption(valToRemove: string, event?: Event) {
    if (event) event.stopPropagation();
    if (this.disabled) return;
    this.value = this.value.filter(v => v !== valToRemove);
    this.onChange(this.value);
    this.valueChange.emit(this.value);
  }

  selectOption(selectedValue: string) {
    if (this.disabled) return;
    this.value = [...this.value, selectedValue];
    this.inputValue = '';
    this.onChange(this.value);
    this.valueChange.emit(this.value);
    this.isOpen = false;
    setTimeout(() => this.inputRef.nativeElement.focus(), 0);
  }

  onKeyDown(e: KeyboardEvent) {
    if (this.disabled) return;

    if (e.key === 'Backspace' && this.inputValue === '' && this.value.length > 0) {
      this.removeOption(this.value[this.value.length - 1]!);
      return;
    }

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
    if (Array.isArray(val)) {
      this.value = val;
    } else {
      this.value = [];
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
