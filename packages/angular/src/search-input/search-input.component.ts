import { Component, input, output, ElementRef, ViewChild } from '@angular/core';

export type SearchInputSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'erb-search-input',
  standalone: true,
  template: `
    <div class="erb-search-input-wrapper">
      <div class="erb-search-input-icon">
        <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </div>
      <input 
        #inputRef
        type="search" 
        class="erb-search-input"
        [attr.data-size]="size()"
        [disabled]="disabled()"
        [value]="value()"
        [placeholder]="placeholder()"
        (input)="onInput($event)"
      />
      @if (value()) {
        <button 
          type="button" 
          class="erb-search-input-clear-btn" 
          aria-label="Clear search"
          (click)="clear()"
        >
          <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      }
    </div>
  `,
  host: {
    style: 'display: block; width: 100%;'
  }
})
export class ErbSearchInputComponent {
  size = input<SearchInputSize>('md');
  disabled = input<boolean>(false);
  value = input<string>('');
  placeholder = input<string>('Search...');

  valueChange = output<string>();

  @ViewChild('inputRef') inputRef!: ElementRef<HTMLInputElement>;

  onInput(event: Event) {
    const val = (event.target as HTMLInputElement).value;
    this.valueChange.emit(val);
  }

  clear() {
    this.valueChange.emit('');
    if (this.inputRef) {
      this.inputRef.nativeElement.focus();
    }
  }
}
