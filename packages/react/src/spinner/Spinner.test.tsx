import { render } from '@testing-library/react';
import { Spinner } from './Spinner';

describe('Spinner', () => {
  it('renders correctly', () => {
    const { container } = render(<Spinner />);
    expect(container.firstChild).toHaveClass('erb-spinner');
  });
});
