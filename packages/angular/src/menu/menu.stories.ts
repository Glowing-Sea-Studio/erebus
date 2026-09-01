// @ts-nocheck
import type { Meta, StoryObj } from '@storybook/angular';
import { ErbMenuComponent } from './menu.component';

const meta: Meta = {
  title: 'Angular/Menu',
  component: ErbMenuComponent,
  parameters: { layout: 'centered' },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => ({
    template: `
      <erb-menu>
        <button erbMenuItem>Profile</button>
        <button erbMenuItem>Settings</button>
        <erb-menu-separator></erb-menu-separator>
        <button erbMenuItem>Logout</button>
      </erb-menu>
    `,
  })
};
