import { render } from '@testing-library/react';
import { Timeline, TimelineItem } from './Timeline';

describe('Timeline', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <Timeline>
        <TimelineItem title="Step 1" />
      </Timeline>
    );
    expect(getByText('Step 1')).toBeInTheDocument();
  });
});