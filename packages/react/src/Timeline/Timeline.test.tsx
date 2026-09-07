import { render } from '@testing-library/react';
import { Timeline } from './Timeline';

describe('Timeline', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <Timeline items={[{ title: 'Step 1' }]} />
    );
    expect(getByText('Step 1')).toBeInTheDocument();
  });
});
