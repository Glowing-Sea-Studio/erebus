import { render, screen } from '@testing-library/react';
import { Label } from './Label';

describe('Label', () => {
  it('renders correctly', () => {
    render(<Label>Test Label</Label>);
    expect(screen.getByText('Test Label')).toBeInTheDocument();
    expect(screen.getByText('Test Label')).toHaveClass('erb-label');
  });

  it('applies disabled styles', () => {
    render(<Label disabled>Test Label</Label>);
    expect(screen.getByText('Test Label')).toHaveClass('erb-label--disabled');
  });

  it('applies required styles', () => {
    render(<Label required>Test Label</Label>);
    expect(screen.getByText('Test Label')).toHaveClass('erb-label--required');
  });
});
