import { render } from '@testing-library/react';
import { Hero } from './Hero';

describe('Hero', () => {
  it('renders correctly', () => {
    const { container } = render(<Hero>Test</Hero>);
    expect(container.firstChild).toHaveClass('erb-hero');
  });
});
