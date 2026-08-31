import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './Textarea';

const meta: Meta<typeof Textarea> = {
  title: 'Components/Textarea',
  component: Textarea,
  args: {
    placeholder: 'Enter some text...',
  },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {};

export const WithLabel: Story = {
  args: {
    label: 'Description',
  },
};

export const WithError: Story = {
  args: {
    label: 'Description',
    error: 'This field is required',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Description',
    disabled: true,
  },
};
