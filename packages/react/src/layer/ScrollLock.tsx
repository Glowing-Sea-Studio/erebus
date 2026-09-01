import { useLayoutEffect } from 'react';

// Use a counter to handle multiple overlays trying to lock scroll simultaneously.
let scrollLockCount = 0;
let originalStyle: string | null = null;
let originalPadding: string | null = null;

const getScrollbarWidth = () => {
  return window.innerWidth - document.documentElement.clientWidth;
};

export const useScrollLock = (lock: boolean) => {
  useLayoutEffect(() => {
    if (!lock) return;

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

    return () => {
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
    };
  }, [lock]);
};

export function ScrollLock({ lock = true }: { lock?: boolean }) {
  useScrollLock(lock);
  return null;
}
