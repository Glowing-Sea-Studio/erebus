import type { Meta, StoryObj } from '@storybook/react';
import { RangeSlider } from './RangeSlider';

const meta: Meta<typeof RangeSlider> = {
  title: 'Components/RangeSlider',
  component: RangeSlider,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof RangeSlider>;

export const Default: Story = {
  args: {
    min: 0,
    max: 100,
    defaultValue: [20, 80],
  },
};
