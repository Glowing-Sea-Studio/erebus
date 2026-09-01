import type { Meta, StoryObj } from '@storybook/react';
import { Combobox } from './Combobox';

const meta: Meta<typeof Combobox> = {
  title: 'Components/Combobox',
  component: Combobox,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Combobox>;

const options = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Cherry', value: 'cherry' },
  { label: 'Date', value: 'date' },
  { label: 'Elderberry', value: 'elderberry' },
];

export const Default: Story = {
  args: {
    label: 'Select a fruit',
    options,
    placeholder: 'Type to search...',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Combobox',
    options,
    disabled: true,
  },
};

export const WithError: Story = {
  args: {
    label: 'Fruit',
    options,
    error: 'Please select a valid fruit.',
  },
};
