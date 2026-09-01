import { render } from '@testing-library/react';
import { Banner } from './banner';

describe('Banner', () => {
  it('renders successfully', () => {
    const { baseElement } = render(<Banner>Hello</Banner>);
    expect(baseElement).toBeTruthy();
  });
});
