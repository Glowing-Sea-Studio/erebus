import { render } from '@testing-library/react';
import { LoadingOverlay } from './loading-overlay';

describe('LoadingOverlay', () => {
  it('renders successfully', () => {
    const { baseElement } = render(<LoadingOverlay />);
    expect(baseElement).toBeTruthy();
  });
});
