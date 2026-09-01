import type { Meta, StoryObj } from '@storybook/react';
import { FeatureGrid } from './FeatureGrid';

const meta: Meta<typeof FeatureGrid> = {
  title: 'Components/FeatureGrid',
  component: FeatureGrid,
};

export default meta;
type Story = StoryObj<typeof FeatureGrid>;

export const Default: Story = {
  args: {
    children: 'Hello FeatureGrid',
  },
};
