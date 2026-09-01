// @ts-nocheck
import { Meta, moduleMetadata } from '@storybook/angular';
import { TimelineComponent, TimelineItemComponent } from './timeline.component';

export default {
  title: 'Components/Timeline',
  component: TimelineComponent,
  decorators: [
    moduleMetadata({
      imports: [TimelineComponent, TimelineItemComponent],
    }),
  ],
} as Meta;

export const Default = () => ({
  template: `
    <erb-timeline>
      <erb-timeline-item title="Started" description="Process started"></erb-timeline-item>
      <erb-timeline-item title="Ended" description="Process ended" [isLast]="true"></erb-timeline-item>
    </erb-timeline>
  `,
});