
import { render } from '@testing-library/react';
import { MobileNav } from './MobileNav';

describe('MobileNav', () => {
  it('renders correctly', () => {
    const { container } = render(<MobileNav>Test</MobileNav>);
    expect(container.firstChild).toHaveClass('erb-mobile-nav');
  });
});
