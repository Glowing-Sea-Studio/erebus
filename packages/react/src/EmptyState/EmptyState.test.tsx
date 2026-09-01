import { render } from '@testing-library/react';
import { EmptyState } from './EmptyState';

describe('EmptyState', () => {
  it('renders correctly', () => {
    const { getByText } = render(<EmptyState title="No items" />);
    expect(getByText('No items')).toBeInTheDocument();
  });
});