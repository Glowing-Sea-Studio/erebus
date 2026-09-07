import { render } from '@testing-library/react';
import { CTA } from './CTA';

describe('CTA', () => {
  it('renders correctly', () => {
    const { container } = render(<CTA title="Test Title" />);
    expect(container.firstChild).toHaveClass('erb-cta');
  });
});
