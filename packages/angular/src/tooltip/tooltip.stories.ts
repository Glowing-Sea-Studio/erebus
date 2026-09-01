import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { ErbTooltipComponent } from './tooltip.component';

const meta: Meta<ErbTooltipComponent> = {
  title: 'Components/Tooltip',
  component: ErbTooltipComponent,
  decorators: [
    moduleMetadata({
      imports: [ErbTooltipComponent],
    }),
  ],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<ErbTooltipComponent>;

export const Default: Story = {
  render: () => ({
    template: `
      <erb-tooltip>
        This is a tooltip
      </erb-tooltip>
    `,
  }),
};
