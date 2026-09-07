import { render } from '@testing-library/react';
import { FeatureGrid } from './FeatureGrid';

describe('FeatureGrid', () => {
  it('renders correctly', () => {
    const { container } = render(<FeatureGrid features={[{title: 'T1', description: 'D1'}]} />);
    expect(container.firstChild).toHaveClass('erb-featuregrid');
  });
});
