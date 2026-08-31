import type { Meta, StoryObj } from '@storybook/angular';
import { ErbSwitchComponent } from './switch.component';

const meta: Meta = {
  title: 'Angular/Switch',
  component: ErbSwitchComponent,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    disabled: { control: 'boolean' },
    checked: { control: 'boolean' },
  }
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    size: 'md',
    disabled: false,
    checked: false,
  },
  render: (args: any) => ({
    props: args,
    template: `
      <erb-switch [size]="size" [disabled]="disabled" [checked]="checked">
        Toggle me
      </erb-switch>
    `,
  })
};

export const Disabled: Story = {
  args: {
    size: 'md',
    disabled: true,
    checked: true,
  },
  render: (args: any) => ({
    props: args,
    template: `
      <erb-switch [size]="size" [disabled]="disabled" [checked]="checked">
        Disabled toggle
      </erb-switch>
    `,
  })
};
