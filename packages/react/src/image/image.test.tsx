import { render } from '@testing-library/react';
import { Image } from './image';

describe('Image', () => {
  it('renders successfully', () => {
    const { baseElement } = render(<Image src="https://via.placeholder.com/150" alt="Placeholder" />);
    expect(baseElement).toBeTruthy();
  });
});
