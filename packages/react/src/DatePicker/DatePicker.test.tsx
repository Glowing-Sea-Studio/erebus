import React from 'react';
import { render } from '@testing-library/react';
import { DatePicker } from './DatePicker';

describe('DatePicker', () => {
  it('renders correctly', () => {
    const { container } = render(<DatePicker />);
    expect(container.firstChild).toBeInTheDocument();
  });
});
