import { Component, Input, Output, EventEmitter, ElementRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'erb-range-slider',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="erb-slider-track"></div>
    <div class="erb-slider-fill" [style.left.%]="p0" [style.width.%]="p1 - p0"></div>
    <div
      class="erb-slider-thumb"
      [style.left.%]="p0"
      role="slider"
      [attr.tabindex]="disabled ? -1 : 0"
      [attr.aria-valuemin]="min"
      [attr.aria-valuemax]="value[1]"
      [attr.aria-valuenow]="value[0]"
      [attr.aria-disabled]="disabled"
      (keydown)="onKeyDown(0, $event)"
    ></div>
    <div
      class="erb-slider-thumb"
      [style.left.%]="p1"
      role="slider"
      [attr.tabindex]="disabled ? -1 : 0"
      [attr.aria-valuemin]="value[0]"
      [attr.aria-valuemax]="max"
      [attr.aria-valuenow]="value[1]"
      [attr.aria-disabled]="disabled"
      (keydown)="onKeyDown(1, $event)"
    ></div>
  `,
  host: {
    'class': 'erb-slider-container',
    '[class.erb-slider-container--disabled]': 'disabled',
  }
})
export class RangeSliderComponent {
  @Input() min: number = 0;
  @Input() max: number = 100;
  @Input() step: number = 1;
  @Input() value: [number, number] = [0, 100];
  @Input() disabled: boolean = false;

  @Output() valueChange = new EventEmitter<[number, number]>();

  activeThumb: 0 | 1 | null = null;

  constructor(private el: ElementRef) {}

  get p0(): number {
    return ((this.value[0] - this.min) / (this.max - this.min)) * 100;
  }

  get p1(): number {
    return ((this.value[1] - this.min) / (this.max - this.min)) * 100;
  }

  updateValue(index: 0 | 1, newVal: number) {
    const clamped = Math.min(Math.max(newVal, this.min), this.max);
    const stepped = Math.round((clamped - this.min) / this.step) * this.step + this.min;
    const finalVal = Math.min(Math.max(stepped, this.min), this.max);
    
    const newValues: [number, number] = [...this.value] as [number, number];
    newValues[index] = finalVal;
    
    if (index === 0 && newValues[0] > newValues[1]) {
      newValues[0] = newValues[1];
    } else if (index === 1 && newValues[1] < newValues[0]) {
      newValues[1] = newValues[0];
    }

    if (this.value[0] !== newValues[0] || this.value[1] !== newValues[1]) {
      this.value = newValues;
      this.valueChange.emit(this.value);
    }
  }

  getClosestThumb(val: number): 0 | 1 {
    const d0 = Math.abs(this.value[0] - val);
    const d1 = Math.abs(this.value[1] - val);
    return d0 < d1 ? 0 : 1;
  }

  @HostListener('pointerdown', ['$event'])
  onPointerDown(event: PointerEvent) {
    if (this.disabled) return;
    (event.target as HTMLElement).setPointerCapture(event.pointerId);
    
    const rect = this.el.nativeElement.getBoundingClientRect();
    const percent = (event.clientX - rect.left) / rect.width;
    const val = this.min + percent * (this.max - this.min);
    
    this.activeThumb = this.getClosestThumb(val);
    this.updateValue(this.activeThumb, val);
  }

  @HostListener('pointermove', ['$event'])
  onPointerMove(event: PointerEvent) {
    if (this.disabled || this.activeThumb === null) return;
    
    const rect = this.el.nativeElement.getBoundingClientRect();
    const percent = (event.clientX - rect.left) / rect.width;
    const val = this.min + percent * (this.max - this.min);
    
    this.updateValue(this.activeThumb, val);
  }

  @HostListener('pointerup', ['$event'])
  @HostListener('pointercancel', ['$event'])
  onPointerUp(event: PointerEvent) {
    (event.target as HTMLElement).releasePointerCapture(event.pointerId);
    this.activeThumb = null;
  }

  onKeyDown(index: 0 | 1, event: KeyboardEvent) {
    if (this.disabled) return;
    let newVal = this.value[index];
    switch (event.key) {
      case 'ArrowRight':
      case 'ArrowUp':
        newVal += this.step;
        break;
      case 'ArrowLeft':
      case 'ArrowDown':
        newVal -= this.step;
        break;
      case 'Home':
        newVal = index === 0 ? this.min : this.value[0];
        break;
      case 'End':
        newVal = index === 1 ? this.max : this.value[1];
        break;
      default:
        return;
    }
    event.preventDefault();
    this.updateValue(index, newVal);
  }
}
