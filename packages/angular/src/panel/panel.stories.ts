// @ts-nocheck
import type { Meta, StoryObj } from '@storybook/angular';
import { ErbPanelComponent } from './panel.component';

const meta: Meta = {
  title: 'Angular/Panel',
  component: ErbPanelComponent,
  parameters: { layout: 'centered' },
  argTypes: {
    position: {
      control: 'select',
      options: ['left', 'right'],
    }
  }
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    position: 'right',
  },
  render: (args: any) => ({
    props: args,
    template: `
      <erb-panel-overlay>
        <erb-panel [attr.data-position]="position">
          <erb-panel-header>
            <erb-panel-title>Settings</erb-panel-title>
          </erb-panel-header>
          <erb-panel-body>
            <p>Panel content goes here.</p>
          </erb-panel-body>
          <erb-panel-footer>
            <button erbButton data-variant="solid" data-size="md">Close</button>
          </erb-panel-footer>
        </erb-panel>
      </erb-panel-overlay>
    `,
  })
};
