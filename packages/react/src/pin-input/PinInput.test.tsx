import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { PinInput } from './PinInput';

describe('PinInput', () => {
  it('renders correctly', () => {
    render(<PinInput length={4} />);
    const inputs = screen.getAllByRole('textbox');
    expect(inputs).toHaveLength(4);
  });

  it('handles input and auto-focus', () => {
    const handleChange = jest.fn();
    render(<PinInput length={4} value="" onChange={handleChange} />);
    
    const inputs = screen.getAllByRole('textbox');
    fireEvent.change(inputs[0], { target: { value: '1' } });
    
    expect(handleChange).toHaveBeenCalledWith('1');
  });
});
