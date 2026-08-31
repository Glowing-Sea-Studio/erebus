import type { Meta, StoryObj } from '@storybook/angular';
import { ErbTabsComponent } from './tabs.component';

const meta: Meta = {
  title: 'Angular/Tabs',
  component: ErbTabsComponent,
  parameters: { layout: 'centered' },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => ({
    template: `
      <erb-tabs style="display: block; width: 24rem;">
        <erb-tabs-list>
          <button erbTab data-state="active">Account</button>
          <button erbTab data-state="inactive">Password</button>
        </erb-tabs-list>
        <erb-tabs-panel data-state="active">
          <p>Make changes to your account here.</p>
        </erb-tabs-panel>
        <erb-tabs-panel data-state="inactive">
          <p>Change your password here.</p>
        </erb-tabs-panel>
      </erb-tabs>
    `,
  })
};
