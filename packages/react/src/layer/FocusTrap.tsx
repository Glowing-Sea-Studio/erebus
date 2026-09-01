import React, { useEffect, useRef } from 'react';

export interface FocusTrapProps {
  children: React.ReactElement;
  active?: boolean;
}

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

export function FocusTrap({ children, active = true }: FocusTrapProps) {
  const containerRef = useRef<HTMLElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (active) {
      previousFocusRef.current = document.activeElement as HTMLElement;

      const container = containerRef.current;
      if (container) {
        const focusableElements = Array.from(
          container.querySelectorAll<HTMLElement>(FOCUSABLE_ELEMENTS)
        );
        if (focusableElements.length > 0 && focusableElements[0]) {
          focusableElements[0].focus();
        } else {
          container.focus();
        }
      }
    }

    return () => {
      if (active && previousFocusRef.current) {
        previousFocusRef.current.focus();
      }
    };
  }, [active]);

  useEffect(() => {
    if (!active) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      const container = containerRef.current;
      if (!container) return;

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
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [active]);

  return React.cloneElement(children, {
    ref: (node: HTMLElement) => {
      // Cast down so we can assign to current in callback
      (containerRef as any).current = node;
      // Also pass the ref to the child if it needs one
      const { ref } = children as any;
      if (typeof ref === 'function') ref(node);
      else if (ref) (ref as any).current = node;
    },
    tabIndex: -1,
  });
}
