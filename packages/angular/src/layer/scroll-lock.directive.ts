import { Directive, input, effect, OnDestroy } from '@angular/core';

let scrollLockCount = 0;
let originalStyle: string | null = null;
let originalPadding: string | null = null;

const getScrollbarWidth = () => {
  return window.innerWidth - document.documentElement.clientWidth;
};

@Directive({
  selector: '[erbScrollLock]',
  standalone: true
})
export class ScrollLockDirective implements OnDestroy {
  lock = input<boolean | undefined>(true, { alias: 'erbScrollLock' });
  private locked = false;

  constructor() {
    effect(() => {
      if (this.lock()) {
        this.enableLock();
      } else {
        this.disableLock();
      }
    });
  }

  ngOnDestroy() {
    this.disableLock();
  }

  private enableLock() {
    if (this.locked || typeof window === 'undefined') return;

    if (scrollLockCount === 0) {
      originalStyle = document.body.style.overflow;
      originalPadding = document.body.style.paddingRight;

      const scrollbarWidth = getScrollbarWidth();

      document.body.style.overflow = 'hidden';
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `calc(${window.getComputedStyle(document.body).paddingRight} + ${scrollbarWidth}px)`;
      }
    }

    scrollLockCount++;
    this.locked = true;
  }

  private disableLock() {
    if (!this.locked || typeof window === 'undefined') return;

    scrollLockCount--;
    if (scrollLockCount === 0) {
      if (originalStyle !== null) {
        document.body.style.overflow = originalStyle;
      } else {
        document.body.style.removeProperty('overflow');
      }

      if (originalPadding !== null) {
        document.body.style.paddingRight = originalPadding;
      } else {
        document.body.style.removeProperty('padding-right');
      }
    }

    this.locked = false;
  }
}
