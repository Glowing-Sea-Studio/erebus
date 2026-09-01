import { Component, Input, Output, EventEmitter, ElementRef, HostBinding, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'erb-slider',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="erb-slider-track"></div>
    <div class="erb-slider-fill" [style.width.%]="percentage" style="left: 0;"></div>
    <div
      class="erb-slider-thumb"
      [style.left.%]="percentage"
      role="slider"
      [attr.tabindex]="disabled ? -1 : 0"
      [attr.aria-valuemin]="min"
      [attr.aria-valuemax]="max"
      [attr.aria-valuenow]="value"
      [attr.aria-disabled]="disabled"
      (keydown)="onKeyDown($event)"
    ></div>
  `,
  host: {
    'class': 'erb-slider-container',
    '[class.erb-slider-container--disabled]': 'disabled',
  }
})
export class SliderComponent {
  @Input() min: number = 0;
  @Input() max: number = 100;
  @Input() step: number = 1;
  @Input() value: number = 0;
  @Input() disabled: boolean = false;

  @Output() valueChange = new EventEmitter<number>();

  isDragging = false;

  constructor(private el: ElementRef) {}

  get percentage(): number {
    return ((this.value - this.min) / (this.max - this.min)) * 100;
  }

  updateValue(newVal: number) {
    const clamped = Math.min(Math.max(newVal, this.min), this.max);
    const stepped = Math.round((clamped - this.min) / this.step) * this.step + this.min;
    const finalVal = Math.min(Math.max(stepped, this.min), this.max);
    
    if (this.value !== finalVal) {
      this.value = finalVal;
      this.valueChange.emit(this.value);
    }
  }

  @HostListener('pointerdown', ['$event'])
  onPointerDown(event: PointerEvent) {
    if (this.disabled) return;
    this.isDragging = true;
    (event.target as HTMLElement).setPointerCapture(event.pointerId);
    this.handlePointerEvent(event);
  }

  @HostListener('pointermove', ['$event'])
  onPointerMove(event: PointerEvent) {
    if (!this.isDragging || this.disabled) return;
    this.handlePointerEvent(event);
  }

  @HostListener('pointerup', ['$event'])
  @HostListener('pointercancel', ['$event'])
  onPointerUp(event: PointerEvent) {
    this.isDragging = false;
    (event.target as HTMLElement).releasePointerCapture(event.pointerId);
  }

  handlePointerEvent(event: PointerEvent) {
    const rect = this.el.nativeElement.getBoundingClientRect();
    const percent = (event.clientX - rect.left) / rect.width;
    this.updateValue(this.min + percent * (this.max - this.min));
  }

  onKeyDown(event: KeyboardEvent) {
    if (this.disabled) return;
    let newVal = this.value;
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
        newVal = this.min;
        break;
      case 'End':
        newVal = this.max;
        break;
      default:
        return;
    }
    event.preventDefault();
    this.updateValue(newVal);
  }
}
