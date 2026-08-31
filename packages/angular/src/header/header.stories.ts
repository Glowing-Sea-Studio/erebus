import type { Meta, StoryObj } from '@storybook/angular';
import { ErbHeaderComponent } from './header.component';

const meta: Meta = {
  title: 'Angular/Header',
  component: ErbHeaderComponent,
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => ({
    template: `
      <erb-header>
        <div style="font-weight: bold; font-size: 1.125rem;">Erebus</div>
        <div style="margin-left: auto; display: flex; gap: 1rem;">
          <span>Home</span>
          <span>About</span>
        </div>
      </erb-header>
    `,
  })
};
