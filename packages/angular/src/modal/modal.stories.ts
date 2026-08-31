import type { Meta, StoryObj } from '@storybook/angular';
import { ErbModalOverlayComponent } from './modal.component';

const meta: Meta = {
  title: 'Angular/Modal',
  component: ErbModalOverlayComponent,
  parameters: { layout: 'centered' },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => ({
    template: `
      <erb-modal-overlay>
        <erb-modal>
          <erb-modal-header>
            <erb-modal-title>Action Required</erb-modal-title>
            <erb-modal-description>Please confirm your action below.</erb-modal-description>
          </erb-modal-header>
          <erb-modal-body>
            <p>Are you sure you want to proceed?</p>
          </erb-modal-body>
          <erb-modal-footer>
            <button erbButton data-variant="ghost" data-size="md">Cancel</button>
            <button erbButton data-variant="solid" data-size="md">Confirm</button>
          </erb-modal-footer>
        </erb-modal>
      </erb-modal-overlay>
    `,
  })
};
