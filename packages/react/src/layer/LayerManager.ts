import { useEffect } from 'react';

type LayerEntry = {
  id: string;
  close: () => void;
  element: HTMLElement;
};

class LayerManagerImpl {
  private stack: LayerEntry[] = [];

  constructor() {
    if (typeof window !== 'undefined') {
      window.addEventListener('keydown', this.handleKeyDown);
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

  private handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && this.stack.length > 0) {
      const topLayer = this.stack[this.stack.length - 1];
      if (topLayer) {
        topLayer.close();
        e.stopPropagation();
      }
    }
  };

  private updateInert() {
    if (typeof document === 'undefined') return;

    const root = document.querySelector('[data-erebus-root]') || document.body;
    const hasLayers = this.stack.length > 0;

    // Convert root children to an array to handle inert safely.
    // Usually elements injected via portals are appended to document.body.
    Array.from(root.children).forEach((child) => {
      // Check if child is part of our layer stack
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
    // Determine the base z-index class/variable from tokens. For overlays, we use `--erb-z-overlay`
    // or modal via stacking contexts. But since T4.1 specifies z-index from tokens,
    // we'll assign the highest level + stack order.
    // The design system tokens define z-index values, e.g., --erb-z-modal.
    // Here we can assign an inline z-index or a class based on stack size.
    // Typically, layers stack on top of each other.

    // Get the base z-index from the CSS variable if needed, or simply assign it if missing.
    const baseZ = 1300; // Value for --erb-z-overlay based on shared.json
    element.style.zIndex = `calc(var(--erb-z-overlay, ${baseZ}) + ${this.stack.length})`;
  }
}

export const LayerManager = new LayerManagerImpl();

export function useLayerEscape(isOpen: boolean, onClose: () => void, layerElement: HTMLElement | null, id: string) {
  useEffect(() => {
    if (isOpen && layerElement) {
      LayerManager.register(id, layerElement, onClose);
      return () => LayerManager.unregister(id);
    }
  }, [isOpen, onClose, layerElement, id]);
}
