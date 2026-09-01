import React from 'react';
import { render, screen } from '@testing-library/react';
import { Field } from './Field';

describe('Field', () => {
  it('renders correctly', () => {
    render(
      <Field label="Test Label" hint="Test Hint">
        <input data-testid="input" />
      </Field>
    );
    expect(screen.getByText('Test Label')).toBeInTheDocument();
    expect(screen.getByText('Test Hint')).toBeInTheDocument();
    expect(screen.getByTestId('input')).toBeInTheDocument();
  });

  it('renders error message instead of hint', () => {
    render(
      <Field label="Test Label" hint="Test Hint" error="Test Error">
        <input />
      </Field>
    );
    expect(screen.getByText('Test Error')).toBeInTheDocument();
    expect(screen.queryByText('Test Hint')).not.toBeInTheDocument();
  });

  it('applies horizontal styles', () => {
    const { container } = render(<Field horizontal>Content</Field>);
    expect(container.firstChild).toHaveClass('erb-field--horizontal');
  });
});
