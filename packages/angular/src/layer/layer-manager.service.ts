import { Injectable, OnDestroy } from '@angular/core';

export type LayerEntry = {
  id: string;
  element: HTMLElement;
  close: () => void;
};

@Injectable({
  providedIn: 'root'
})
export class LayerManagerService implements OnDestroy {
  private stack: LayerEntry[] = [];
  private handleKeyDownBound: (e: KeyboardEvent) => void;

  constructor() {
    this.handleKeyDownBound = this.handleKeyDown.bind(this);
    if (typeof window !== 'undefined') {
      window.addEventListener('keydown', this.handleKeyDownBound);
    }
  }

  ngOnDestroy() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('keydown', this.handleKeyDownBound);
    }
  }

  register(id: string, element: HTMLElement, close: () => void) {
    this.stack.push({ id, element, close });
    this.updateInert();
    this.updateZIndex(element);
  }

  unregister(id: string) {
    this.stack = this.stack.filter(entry => entry.id !== id);
    this.updateInert();
  }

  private handleKeyDown(e: KeyboardEvent) {
    if (e.key === 'Escape' && this.stack.length > 0) {
      const topLayer = this.stack[this.stack.length - 1];
      if (topLayer) {
        topLayer.close();
        e.stopPropagation();
      }
    }
  }

  private updateInert() {
    if (typeof document === 'undefined') return;

    const root = document.querySelector('[data-erebus-root]') || document.body;
    const hasLayers = this.stack.length > 0;

    Array.from(root.children).forEach((child) => {
      const isLayer = this.stack.some(layer => layer.element === child || layer.element.contains(child));
      if (!isLayer && child.tagName !== 'SCRIPT' && child.tagName !== 'STYLE' && child.tagName !== 'NOSCRIPT') {
        if (hasLayers) {
          child.setAttribute('inert', '');
        } else {
          child.removeAttribute('inert');
        }
      }
    });
  }

  private updateZIndex(element: HTMLElement) {
    const baseZ = 1300; // Value for --erb-z-overlay based on shared.json
    element.style.zIndex = `calc(var(--erb-z-overlay, ${baseZ}) + ${this.stack.length})`;
  }
}
