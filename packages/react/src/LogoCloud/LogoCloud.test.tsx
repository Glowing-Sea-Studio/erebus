import { render } from '@testing-library/react';
import { LogoCloud } from './LogoCloud';

describe('LogoCloud', () => {
  it('renders correctly', () => {
    const { container } = render(<LogoCloud logos={[{src: 'l1.png', alt: 'a1'}]} />);
    expect(container.firstChild).toHaveClass('erb-logocloud');
  });
});
