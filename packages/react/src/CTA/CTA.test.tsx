import React from 'react';
import { render } from '@testing-library/react';
import { CTA } from './CTA';

describe('CTA', () => {
  it('renders correctly', () => {
    const { container } = render(<CTA>Test</CTA>);
    expect(container.firstChild).toHaveClass('erb-cta');
  });
});
