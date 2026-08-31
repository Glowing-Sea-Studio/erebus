import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './index';

const meta = {
  title: 'React/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    'data-variant': {
      control: 'select',
      options: ['solid', 'outline', 'ghost'],
    },
    'data-size': {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    'data-variant': 'solid',
    'data-size': 'md',
    children: 'Button',
  },
};

export const Outline: Story = {
  args: {
    'data-variant': 'outline',
    'data-size': 'md',
    children: 'Button',
  },
};

export const Ghost: Story = {
  args: {
    'data-variant': 'ghost',
    'data-size': 'md',
    children: 'Button',
  },
};

export const Disabled: Story = {
  args: {
    'data-variant': 'solid',
    'data-size': 'md',
    disabled: true,
    children: 'Button (Disabled)',
  },
};
