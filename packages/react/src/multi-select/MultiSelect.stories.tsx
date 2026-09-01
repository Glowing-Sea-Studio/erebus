import type { Meta, StoryObj } from '@storybook/react';
import { MultiSelect } from './MultiSelect';

const meta: Meta<typeof MultiSelect> = {
  title: 'Components/MultiSelect',
  component: MultiSelect,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MultiSelect>;

const options = [
  { label: 'React', value: 'react' },
  { label: 'Vue', value: 'vue' },
  { label: 'Angular', value: 'angular' },
  { label: 'Svelte', value: 'svelte' },
  { label: 'Solid', value: 'solid' },
];

export const Default: Story = {
  args: {
    label: 'Frameworks',
    options,
    placeholder: 'Select frameworks...',
    value: ['react'],
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    options,
    value: ['vue'],
    disabled: true,
  },
};

export const WithError: Story = {
  args: {
    label: 'Frameworks',
    options,
    error: 'Please select at least one framework.',
  },
};
