
import React from 'react';
import { render } from '@testing-library/react';
import { AppShell } from './AppShell';

describe('AppShell', () => {
  it('renders correctly', () => {
    const { container } = render(<AppShell>Test</AppShell>);
    expect(container.firstChild).toHaveClass('erb-app-shell');
  });
});
