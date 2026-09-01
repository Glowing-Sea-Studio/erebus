import type { Meta, StoryObj } from '@storybook/angular';
import { SkeletonComponent } from './skeleton.component';

const meta: Meta<SkeletonComponent> = {
  title: 'Components/Skeleton',
  component: SkeletonComponent,
};

export default meta;
type Story = StoryObj<SkeletonComponent>;

export const Default: Story = {
  args: {
    width: 200,
    height: 20,
  }
};
