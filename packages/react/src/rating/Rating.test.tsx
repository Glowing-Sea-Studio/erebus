import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Rating } from './Rating';

describe('Rating', () => {
  it('renders correctly', () => {
    render(<Rating value={3} max={5} />);
    const slider = screen.getByRole('slider');
    expect(slider).toBeInTheDocument();
    expect(slider).toHaveAttribute('aria-valuenow', '3');
  });

  it('handles keyboard navigation', () => {
    const handleChange = jest.fn();
    render(<Rating value={3} max={5} onChange={handleChange} />);
    
    const slider = screen.getByRole('slider');
    fireEvent.keyDown(slider, { key: 'ArrowRight' });
    expect(handleChange).toHaveBeenCalledWith(4);
    
    fireEvent.keyDown(slider, { key: 'ArrowLeft' });
    expect(handleChange).toHaveBeenCalledWith(2);
  });
});
