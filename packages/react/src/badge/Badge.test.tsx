import { render, screen } from '@testing-library/react';
import { Badge } from './Badge';
import '@testing-library/jest-dom';

describe('Badge', () => {
  it('renders correctly', () => {
    render(<Badge>Test Badge</Badge>);
    expect(screen.getByText('Test Badge')).toBeInTheDocument();
    expect(screen.getByText('Test Badge')).toHaveClass('erb-badge');
  });

  it('applies variant classes', () => {
    render(<Badge variant="outline">Test Badge</Badge>);
    expect(screen.getByText('Test Badge')).toHaveClass('erb-badge--variant-outline');
  });
});
