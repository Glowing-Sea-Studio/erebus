
import { render } from '@testing-library/react';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
  it('renders correctly', () => {
    const { container } = render(<Sidebar>Test</Sidebar>);
    // The sidebar now returns a fragment with overlay as first child, so we check second child
    expect(container.childNodes[1]).toHaveClass('erb-sidebar');
  });
});
