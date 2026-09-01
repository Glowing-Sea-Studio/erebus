// @ts-nocheck
import type { Meta, StoryObj } from '@storybook/angular';
import { ErbRadioComponent } from './radio.component';

const meta: Meta = {
  title: 'Angular/Radio',
  component: ErbRadioComponent,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    disabled: { control: 'boolean' },
    checked: { control: 'boolean' },
    name: { control: 'text' },
  }
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    size: 'md',
    disabled: false,
    checked: false,
    name: 'options',
  },
  render: (args: any) => ({
    props: args,
    template: `
      <erb-radio [size]="size" [disabled]="disabled" [checked]="checked" [name]="name">
        Option 1
      </erb-radio>
    `,
  })
};

export const Disabled: Story = {
  args: {
    size: 'md',
    disabled: true,
    checked: true,
    name: 'options',
  },
  render: (args: any) => ({
    props: args,
    template: `
      <erb-radio [size]="size" [disabled]="disabled" [checked]="checked" [name]="name">
        Disabled option
      </erb-radio>
    `,
  })
};
