import type { Meta, StoryObj } from '@storybook/angular';
import { ErbFooterComponent } from './footer.component';

const meta: Meta = {
  title: 'Angular/Footer',
  component: ErbFooterComponent,
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => ({
    template: `
      <erb-footer>
        <div style="text-align: center;">© 2026 Glowing Sea Studio. All rights reserved.</div>
      </erb-footer>
    `,
  })
};
