import { Component, input, output } from '@angular/core';

export type NumberInputSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'erb-number-input',
  standalone: true,
  template: `
    <div class="erb-number-input-wrapper">
      <input 
        type="number" 
        class="erb-number-input"
        [attr.data-size]="size()"
        [attr.aria-invalid]="invalid() ? 'true' : null"
        [disabled]="disabled()"
        [value]="value()"
        [min]="min()"
        [max]="max()"
        [step]="step()"
        (input)="onInput($event)"
      />
      <div class="erb-number-input-stepper">
        <button 
          type="button" 
          class="erb-number-input-stepper-btn" 
          [disabled]="disabled()"
          (click)="increment()"
          aria-label="Increment"
        >
          <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
        </button>
        <button 
          type="button" 
          class="erb-number-input-stepper-btn" 
          [disabled]="disabled()"
          (click)="decrement()"
          aria-label="Decrement"
        >
          <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </button>
      </div>
    </div>
  `,
  host: {
    style: 'display: block; width: 100%;'
  }
})
export class ErbNumberInputComponent {
  size = input<NumberInputSize>('md');
  disabled = input<boolean>(false);
  invalid = input<boolean>(false);
  value = input<number>(0);
  min = input<number>();
  max = input<number>();
  step = input<number>(1);

  valueChange = output<number>();

  onInput(event: Event) {
    const val = (event.target as HTMLInputElement).valueAsNumber;
    this.valueChange.emit(val);
  }

  increment() {
    let current = this.value();
    if (isNaN(current)) current = 0;
    const s = this.step() ?? 1;
    let newVal = current + s;
    const mx = this.max();
    if (mx !== undefined && newVal > mx) newVal = mx;
    this.valueChange.emit(newVal);
  }

  decrement() {
    let current = this.value();
    if (isNaN(current)) current = 0;
    const s = this.step() ?? 1;
    let newVal = current - s;
    const mn = this.min();
    if (mn !== undefined && newVal < mn) newVal = mn;
    this.valueChange.emit(newVal);
  }
}
