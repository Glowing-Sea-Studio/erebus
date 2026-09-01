import type { Meta, StoryObj } from '@storybook/react';
import { Popover } from './Popover';
import { Button } from '../button';

const meta: Meta<typeof Popover> = {
  title: 'Components/Popover',
  component: Popover,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  args: {
    trigger: <Button>Open Popover</Button>,
    children: (
      <div style={{ padding: '8px' }}>
        <h4>Popover Content</h4>
        <p>This is a popover.</p>
      </div>
    ),
  },
};
