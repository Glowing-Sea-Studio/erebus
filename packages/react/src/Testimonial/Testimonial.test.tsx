import React from 'react';
import { render } from '@testing-library/react';
import { Testimonial } from './Testimonial';

describe('Testimonial', () => {
  it('renders correctly', () => {
    const { container } = render(<Testimonial>Test</Testimonial>);
    expect(container.firstChild).toHaveClass('erb-testimonial');
  });
});
