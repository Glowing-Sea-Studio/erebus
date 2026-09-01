import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Tooltip } from './Tooltip';

describe('Tooltip', () => {
  it('renders trigger and opens tooltip on hover', async () => {
    render(
      <Tooltip trigger={<button data-testid="trigger">Trigger</button>} content="Tooltip Content" />
    );

    expect(screen.queryByText('Tooltip Content')).toBeNull();

    fireEvent.mouseEnter(screen.getByTestId('trigger'));

    await waitFor(() => {
      expect(screen.getByText('Tooltip Content')).toBeTruthy();
      expect(screen.getByText('Tooltip Content').getAttribute('role')).toBe('tooltip');
    });
  });

  it('opens tooltip on focus', async () => {
    render(
      <Tooltip trigger={<button data-testid="trigger">Trigger</button>} content="Tooltip Content" />
    );

    fireEvent.focus(screen.getByTestId('trigger'));

    await waitFor(() => {
      expect(screen.getByText('Tooltip Content')).toBeTruthy();
    });
  });
});
