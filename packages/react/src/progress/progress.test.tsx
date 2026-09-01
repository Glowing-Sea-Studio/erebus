import { render } from '@testing-library/react';
import { Progress } from './progress';

describe('Progress', () => {
  it('renders successfully', () => {
    const { baseElement } = render(<Progress value={50} />);
    expect(baseElement).toBeTruthy();
  });
});
