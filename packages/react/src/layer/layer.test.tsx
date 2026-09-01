// @vitest-environment jsdom
import { describe, it, expect, beforeEach } from 'vitest';
import { render, act } from '@testing-library/react';
import { FocusTrap } from './FocusTrap';
import { ScrollLock } from './ScrollLock';

describe('Layer - React', () => {
  describe('FocusTrap', () => {
    it('traps focus correctly', async () => {
      const { getByTestId } = render(
        <FocusTrap active={true}>
          <div data-testid="trap">
            <button id="b1">Button 1</button>
            <button id="b2">Button 2</button>
          </div>
        </FocusTrap>
      );

      const trap = getByTestId('trap');
      const b1 = trap.querySelector('#b1') as HTMLElement;

      // Wait for FocusTrap to set focus
      await new Promise(resolve => setTimeout(resolve, 10));

      expect(document.activeElement).toBe(b1);
    });
  });

  describe('ScrollLock', () => {
    beforeEach(() => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    });

    it('sets document.body.style.overflow to hidden', async () => {
      const { unmount } = render(<ScrollLock lock={true} />);
      await act(async () => {});
      expect(document.body.style.overflow).toBe('hidden');
      unmount();
    });

    it('restores overflow when unmounted', async () => {
      const { unmount } = render(<ScrollLock lock={true} />);
      await act(async () => {});
      expect(document.body.style.overflow).toBe('hidden');
      unmount();
      expect(document.body.style.overflow).toBe('');
    });
  });
});
