import type { Meta, StoryObj } from '@storybook/angular';
import { ErbCardComponent } from './card.component';


const meta: Meta = {
  title: 'Angular/Card',
  component: ErbCardComponent,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => ({
    template: `
      <erb-card class="w-96" style="display: block; width: 24rem;">
        <erb-card-header>
          <erb-card-title>Card Title</erb-card-title>
          <erb-card-description>Card description goes here.</erb-card-description>
        </erb-card-header>
        <erb-card-body>
          <p>Main content of the card.</p>
        </erb-card-body>
        <erb-card-footer>
          <button erbButton data-variant="solid" data-size="md">Action</button>
        </erb-card-footer>
      </erb-card>
    `,
  })
};
