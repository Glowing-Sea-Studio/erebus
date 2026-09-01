import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Popover } from './Popover';

describe('Popover', () => {
  it('renders trigger and opens popover on click', async () => {
    render(
      <Popover trigger={<button data-testid="trigger">Trigger</button>}>
        <div data-testid="content">Popover Content</div>
      </Popover>
    );

    expect(screen.queryByTestId('content')).toBeNull();

    fireEvent.click(screen.getByTestId('trigger'));

    await waitFor(() => {
      expect(screen.getByTestId('content')).toBeTruthy();
    });
  });

  it('respects controlled state', () => {
    const onOpenChange = vi.fn();
    const { rerender } = render(
      <Popover open={true} onOpenChange={onOpenChange} trigger={<button data-testid="trigger">Trigger</button>}>
        <div data-testid="content">Popover Content</div>
      </Popover>
    );

    expect(screen.getByTestId('content')).toBeTruthy();

    fireEvent.click(screen.getByTestId('trigger'));
    expect(onOpenChange).toHaveBeenCalledWith(false);

    rerender(
      <Popover open={false} onOpenChange={onOpenChange} trigger={<button data-testid="trigger">Trigger</button>}>
        <div data-testid="content">Popover Content</div>
      </Popover>
    );

    expect(screen.queryByTestId('content')).toBeNull();
  });
});
