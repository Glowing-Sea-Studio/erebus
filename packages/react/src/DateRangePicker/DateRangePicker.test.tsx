import React from 'react';
import { render } from '@testing-library/react';
import { DateRangePicker } from './DateRangePicker';

describe('DateRangePicker', () => {
  it('renders correctly', () => {
    const { container } = render(<DateRangePicker />);
    expect(container.firstChild).toBeInTheDocument();
  });
});
