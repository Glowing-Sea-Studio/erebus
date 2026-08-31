import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './index';

const meta = {
  title: 'React/Input',
  component: Input,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter username',
    inputSize: 'md'
  }
};

export const WithError: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter email',
    inputSize: 'md',
    error: 'Invalid email address.'
  }
};
