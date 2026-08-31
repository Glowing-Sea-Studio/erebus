import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from './Radio';

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: {
    label: 'Option 1',
    name: 'radio-group',
  },
};

export const Checked: Story = {
  args: {
    label: 'Checked option',
    name: 'radio-group',
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled option',
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: 'Disabled checked option',
    disabled: true,
    defaultChecked: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Radio size="sm" label="Small radio" name="size-group-sm" />
      <Radio size="md" label="Medium radio" name="size-group-md" />
      <Radio size="lg" label="Large radio" name="size-group-lg" />
    </div>
  ),
};
