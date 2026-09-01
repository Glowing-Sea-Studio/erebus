import { Component, Input, Output, EventEmitter, HostListener, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'erb-rating',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span
      *ngFor="let star of stars; let i = index"
      class="erb-rating__item"
      [class.erb-rating__item--active]="(i + 1) <= (hoverValue || value)"
      (click)="onClick(i + 1)"
      (mouseenter)="onMouseEnter(i + 1)"
      aria-hidden="true"
    >
      ★
    </span>
  `,
})
export class RatingComponent {
  @Input() max = 5;
  @Input() value = 0;
  @Input() disabled = false;
  @Output() valueChange = new EventEmitter<number>();

  hoverValue: number | null = null;

  get stars() {
    return Array(this.max).fill(0);
  }

  @HostBinding('class.erb-rating') hostClass = true;
  @HostBinding('attr.role') role = 'slider';
  @HostBinding('attr.aria-valuemin') ariaValueMin = 1;
  @HostBinding('attr.aria-valuemax') get ariaValueMax() { return this.max; }
  @HostBinding('attr.aria-valuenow') get ariaValueNow() { return this.value; }
  @HostBinding('attr.aria-disabled') get ariaDisabled() { return this.disabled; }
  @HostBinding('attr.tabindex') get tabIndex() { return this.disabled ? -1 : 0; }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.hoverValue = null;
  }

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (this.disabled) return;
    
    let newValue = this.value;
    if (event.key === 'ArrowRight' || event.key === 'ArrowUp') {
      newValue = Math.min(this.value + 1, this.max);
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowDown') {
      newValue = Math.max(this.value - 1, 1);
    }

    if (newValue !== this.value) {
      event.preventDefault();
      this.value = newValue;
      this.valueChange.emit(this.value);
    }
  }

  onClick(val: number) {
    if (this.disabled) return;
    this.value = val;
    this.valueChange.emit(this.value);
  }

  onMouseEnter(val: number) {
    if (this.disabled) return;
    this.hoverValue = val;
  }
}
