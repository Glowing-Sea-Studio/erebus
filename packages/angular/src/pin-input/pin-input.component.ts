import { Component, Input, Output, EventEmitter, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'erb-pin-input',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="erb-pin-input">
      <input
        *ngFor="let item of items; let i = index"
        #pinInput
        type="text"
        inputmode="numeric"
        maxlength="1"
        class="erb-pin-input__field"
        [value]="value[i] || ''"
        [disabled]="disabled"
        (input)="onInput($event, i)"
        (keydown)="onKeyDown($event, i)"
        (paste)="onPaste($event)"
      />
    </div>
  `,
})
export class PinInputComponent {
  @Input() length = 4;
  @Input() value = '';
  @Input() disabled = false;
  @Output() valueChange = new EventEmitter<string>();

  @ViewChildren('pinInput') inputs!: QueryList<ElementRef<HTMLInputElement>>;

  get items() {
    return Array(this.length).fill(0);
  }

  onInput(event: Event, index: number) {
    const inputElement = event.target as HTMLInputElement;
    const val = inputElement.value;
    const char = val.slice(-1);

    if (char && !/^[0-9]$/.test(char)) {
      inputElement.value = this.value[index] || '';
      return;
    }

    const newValue = this.value.split('');
    newValue[index] = char;
    const finalValue = newValue.join('').slice(0, this.length);
    
    this.value = finalValue;
    this.valueChange.emit(this.value);

    if (char && index < this.length - 1) {
      this.focusInput(index + 1);
    }
  }

  onKeyDown(event: KeyboardEvent, index: number) {
    if (event.key === 'Backspace') {
      if (!this.value[index] && index > 0) {
        this.focusInput(index - 1);
      } else {
        const newValue = this.value.split('');
        newValue[index] = '';
        this.value = newValue.join('');
        this.valueChange.emit(this.value);
      }
    } else if (event.key === 'ArrowLeft' && index > 0) {
      this.focusInput(index - 1);
    } else if (event.key === 'ArrowRight' && index < this.length - 1) {
      this.focusInput(index + 1);
    }
  }

  onPaste(event: ClipboardEvent) {
    event.preventDefault();
    const pastedData = event.clipboardData?.getData('text/plain')?.replace(/\\D/g, '').slice(0, this.length) || '';
    if (pastedData) {
      this.value = pastedData;
      this.valueChange.emit(this.value);
      const nextFocus = Math.min(pastedData.length, this.length - 1);
      this.focusInput(nextFocus);
    }
  }

  private focusInput(index: number) {
    const inputsArray = this.inputs.toArray();
    if (inputsArray[index]) {
      inputsArray[index].nativeElement.focus();
    }
  }
}
