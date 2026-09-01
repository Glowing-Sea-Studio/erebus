import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { ColorPicker } from './ColorPicker';

describe('ColorPicker', () => {
  it('renders correctly', () => {
    render(<ColorPicker data-testid="color-picker" value="#ff0000" />);
    const input = screen.getByTestId('color-picker');
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue('#ff0000');
  });

  it('calls onChange with correct value', () => {
    const handleChange = vi.fn();
    render(<ColorPicker data-testid="color-picker" onChange={handleChange} />);
    const input = screen.getByTestId('color-picker');
    
    fireEvent.change(input, { target: { value: '#00ff00' } });
    expect(handleChange).toHaveBeenCalledWith('#00ff00');
  });
});
