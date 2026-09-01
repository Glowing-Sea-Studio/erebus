import type { Meta, StoryObj } from '@storybook/react';
import { TimePicker } from './TimePicker';

const meta: Meta<typeof TimePicker> = {
  title: 'Components/TimePicker',
  component: TimePicker,
};

export default meta;
type Story = StoryObj<typeof TimePicker>;

export const Default: Story = {
  args: {},
};
