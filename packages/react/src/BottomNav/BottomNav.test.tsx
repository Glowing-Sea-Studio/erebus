
import React from 'react';
import { render } from '@testing-library/react';
import { BottomNav } from './BottomNav';

describe('BottomNav', () => {
  it('renders correctly', () => {
    const { container } = render(<BottomNav>Test</BottomNav>);
    expect(container.firstChild).toHaveClass('erb-bottom-nav');
  });
});
