import { Directive, ElementRef, OnDestroy, OnInit, effect, input } from '@angular/core';

const FOCUSABLE_ELEMENTS = [
  'a[href]',
  'area[href]',
  'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
  'select:not([disabled]):not([aria-hidden])',
  'textarea:not([disabled]):not([aria-hidden])',
  'button:not([disabled]):not([aria-hidden])',
  'iframe',
  'object',
  'embed',
  '[contenteditable]',
  '[tabindex]:not([tabindex^="-"])'
].join(',');

@Directive({
  selector: '[erbFocusTrap]',
  standalone: true
})
export class FocusTrapDirective implements OnInit, OnDestroy {
  active = input<boolean | undefined>(true, { alias: 'erbFocusTrap' });

  private previousFocus: HTMLElement | null = null;
  private handleKeyDownBound: (e: KeyboardEvent) => void;

  constructor(
    private el: ElementRef<HTMLElement>
  ) {
    this.handleKeyDownBound = this.handleKeyDown.bind(this);
    effect(() => {
      if (this.active()) {
        this.activate();
      } else {
        this.deactivate();
      }
    });
  }

  ngOnInit() {
    if (this.active()) {
      this.activate();
    }
  }

  ngOnDestroy() {
    this.deactivate();
  }

  private activate() {
    if (typeof window !== 'undefined') {
      if (!this.previousFocus) {
          this.previousFocus = document.activeElement as HTMLElement;
      }

      // Ensure the container is focusable
      this.el.nativeElement.tabIndex = -1;

      // Focus first element or container
      setTimeout(() => {
        const focusableElements = Array.from(
          this.el.nativeElement.querySelectorAll<HTMLElement>(FOCUSABLE_ELEMENTS)
        );

        if (focusableElements.length > 0 && focusableElements[0]) {
          focusableElements[0].focus();
        } else {
          this.el.nativeElement.focus();
        }
      });

      document.addEventListener('keydown', this.handleKeyDownBound);
    }
  }

  private deactivate() {
    if (typeof window !== 'undefined') {
      document.removeEventListener('keydown', this.handleKeyDownBound);

      if (this.previousFocus) {
        this.previousFocus.focus();
        this.previousFocus = null;
      }
    }
  }

  private handleKeyDown(e: KeyboardEvent) {
    if (e.key !== 'Tab') return;

    const container = this.el.nativeElement;
    const focusableElements = Array.from(
      container.querySelectorAll<HTMLElement>(FOCUSABLE_ELEMENTS)
    );

    if (focusableElements.length === 0) {
      e.preventDefault();
      return;
    }

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (e.shiftKey) {
      if (firstElement && document.activeElement === firstElement) {
        e.preventDefault();
        if (lastElement) lastElement.focus();
      }
    } else {
      if (lastElement && document.activeElement === lastElement) {
        e.preventDefault();
        if (firstElement) firstElement.focus();
      }
    }
  }
}
