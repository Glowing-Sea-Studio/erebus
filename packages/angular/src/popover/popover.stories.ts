import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { ErbPopoverComponent } from './popover.component';

const meta: Meta<ErbPopoverComponent> = {
  title: 'Components/Popover',
  component: ErbPopoverComponent,
  decorators: [
    moduleMetadata({
      imports: [ErbPopoverComponent],
    }),
  ],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<ErbPopoverComponent>;

export const Default: Story = {
  render: () => ({
    template: `
      <erb-popover>
        <div style="padding: 8px">
          <h4>Popover Content</h4>
          <p>This is a popover.</p>
        </div>
      </erb-popover>
    `,
  }),
};
