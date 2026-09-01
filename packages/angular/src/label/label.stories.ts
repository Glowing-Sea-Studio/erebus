import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { ErbLabelComponent } from './label.component';

const meta: Meta<ErbLabelComponent> = {
  title: 'Components/Label',
  component: ErbLabelComponent,
  tags: ['autodocs'],
  render: (args) => ({
    props: {
      ...args,
    },
    template: `<erb-label [disabled]="disabled" [required]="required">Label Content</erb-label>`,
  }),
};

export default meta;
type Story = StoryObj<ErbLabelComponent>;

export const Default: Story = {};

export const Required: Story = {
  args: {
    required: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
