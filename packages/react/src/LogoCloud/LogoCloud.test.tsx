import { render } from '@testing-library/react';
import { LogoCloud } from './LogoCloud';

describe('LogoCloud', () => {
  it('renders correctly', () => {
    const { container } = render(<LogoCloud>Test</LogoCloud>);
    expect(container.firstChild).toHaveClass('erb-logocloud');
  });
});
