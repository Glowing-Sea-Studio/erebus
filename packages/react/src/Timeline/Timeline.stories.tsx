import { Timeline, TimelineItem } from './Timeline';

export default {
  title: 'Components/Timeline',
  component: Timeline,
};

export const Default = () => (
  <Timeline>
    <TimelineItem title="Step 1" description="First step" />
    <TimelineItem title="Step 2" description="Second step" isLast />
  </Timeline>
);