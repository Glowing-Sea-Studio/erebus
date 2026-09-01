import React from 'react';
import { render } from '@testing-library/react';
import { FeatureGrid } from './FeatureGrid';

describe('FeatureGrid', () => {
  it('renders correctly', () => {
    const { container } = render(<FeatureGrid>Test</FeatureGrid>);
    expect(container.firstChild).toHaveClass('erb-featuregrid');
  });
});
