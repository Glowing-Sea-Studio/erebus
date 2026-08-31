import type { Meta, StoryObj } from '@storybook/react';
import { Menu, MenuItem, MenuSeparator } from './index';
import { useState } from 'react';

const meta = {
  title: 'React/Menu',
  component: Menu,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <div className="relative">
        <button className="erb-button" data-variant="solid" data-size="md" onClick={() => setOpen(!open)}>
          Toggle Menu
        </button>
        {open && (
          <div className="absolute top-full mt-2">
            <Menu>
              <MenuItem onClick={() => setOpen(false)}>Profile</MenuItem>
              <MenuItem onClick={() => setOpen(false)}>Settings</MenuItem>
              <MenuSeparator />
              <MenuItem onClick={() => setOpen(false)}>Logout</MenuItem>
            </Menu>
          </div>
        )}
      </div>
    );
  }
};
