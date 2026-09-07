import { render } from '@testing-library/react';
import { Testimonial } from './Testimonial';

describe('Testimonial', () => {
  it('renders correctly', () => {
    const { container } = render(<Testimonial quote="q1" author="a1" />);
    expect(container.firstChild).toHaveClass('erb-testimonial');
  });
});
