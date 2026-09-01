import type { Meta, StoryObj } from '@storybook/react';
import { Label } from './Label';

const meta = {
  title: 'Components/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Label content',
  },
};

export const Required: Story = {
  args: {
    children: 'Required Label',
    required: true,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Label',
    disabled: true,
  },
};
