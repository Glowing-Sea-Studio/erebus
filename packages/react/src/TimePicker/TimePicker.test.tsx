import { render } from '@testing-library/react';
import { TimePicker } from './TimePicker';

describe('TimePicker', () => {
  it('renders correctly', () => {
    const { container } = render(<TimePicker />);
    expect(container.firstChild).toBeInTheDocument();
  });
});
