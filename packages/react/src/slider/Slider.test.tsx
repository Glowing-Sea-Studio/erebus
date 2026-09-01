import { render, screen, fireEvent } from '@testing-library/react';
import { Slider } from './Slider';

describe('Slider', () => {
  it('renders correctly', () => {
    render(<Slider aria-label="My Slider" />);
    const slider = screen.getByRole('slider');
    expect(slider).toBeInTheDocument();
  });

  it('handles keyboard navigation', () => {
    const handleChange = vi.fn();
    render(<Slider min={0} max={100} defaultValue={50} onChange={handleChange} />);
    const slider = screen.getByRole('slider');
    
    slider.focus();
    fireEvent.keyDown(slider, { key: 'ArrowRight' });
    expect(handleChange).toHaveBeenCalledWith(51);
  });
});
