import { Component, Input, Output, EventEmitter, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'erb-tags-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <span *ngFor="let tag of tags" class="erb-tags-input__tag">
      {{ tag }}
      <button
        *ngIf="!disabled"
        type="button"
        class="erb-tags-input__tag-remove"
        (click)="removeTag(tag)"
        [attr.aria-label]="'Remove ' + tag"
      >
        ×
      </button>
    </span>
    <input
      type="text"
      class="erb-tags-input__input"
      [(ngModel)]="inputValue"
      (keydown)="onKeyDown($event)"
      [disabled]="disabled"
      [placeholder]="tags.length === 0 && placeholder ? placeholder : ''"
    />
  `,
})
export class TagsInputComponent {
  @Input() tags: string[] = [];
  @Input() disabled = false;
  @Input() placeholder = '';
  @Output() tagsChange = new EventEmitter<string[]>();

  inputValue = '';

  @HostBinding('class.erb-tags-input') hostClass = true;
  @HostBinding('class.erb-tags-input--disabled') get isDisabledClass() { return this.disabled; }

  onKeyDown(event: KeyboardEvent) {
    if (this.disabled) return;

    if (event.key === 'Enter' && this.inputValue.trim()) {
      event.preventDefault();
      const val = this.inputValue.trim();
      if (!this.tags.includes(val)) {
        this.tags = [...this.tags, val];
        this.tagsChange.emit(this.tags);
      }
      this.inputValue = '';
    } else if (event.key === 'Backspace' && !this.inputValue && this.tags.length > 0) {
      this.tags = this.tags.slice(0, -1);
      this.tagsChange.emit(this.tags);
    }
  }

  removeTag(tagToRemove: string) {
    if (this.disabled) return;
    this.tags = this.tags.filter(tag => tag !== tagToRemove);
    this.tagsChange.emit(this.tags);
  }
}
