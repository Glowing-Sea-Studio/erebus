import { render } from '@testing-library/react';
import { ErrorState } from './ErrorState';

describe('ErrorState', () => {
  it('renders correctly', () => {
    const { getByText } = render(<ErrorState title="Error occurred" />);
    expect(getByText('Error occurred')).toBeInTheDocument();
  });
});