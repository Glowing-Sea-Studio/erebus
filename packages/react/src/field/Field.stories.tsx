import type { Meta, StoryObj } from '@storybook/react';
import { Field } from './Field';
import React from 'react';

const meta = {
  title: 'Components/Field',
  component: Field,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Field>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Username',
    hint: 'Enter your username',
    children: <input type="text" style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} />,
  },
};

export const Required: Story = {
  args: {
    label: 'Email',
    required: true,
    children: <input type="email" style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} />,
  },
};

export const WithError: Story = {
  args: {
    label: 'Password',
    error: 'Password is too short',
    children: <input type="password" style={{ padding: '8px', border: '1px solid red', borderRadius: '4px' }} />,
  },
};

export const Horizontal: Story = {
  args: {
    label: 'Newsletter',
    horizontal: true,
    children: <input type="checkbox" />,
  },
};
