import { render, screen, fireEvent } from '@testing-library/react';
import { RangeSlider } from './RangeSlider';

describe('RangeSlider', () => {
  it('renders correctly', () => {
    render(<RangeSlider />);
    const sliders = screen.getAllByRole('slider');
    expect(sliders).toHaveLength(2);
  });
});
