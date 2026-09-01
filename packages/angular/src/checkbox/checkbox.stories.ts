// @ts-nocheck
import type { Meta, StoryObj } from '@storybook/angular';
import { ErbCheckboxComponent } from './checkbox.component';

const meta: Meta = {
  title: 'Angular/Checkbox',
  component: ErbCheckboxComponent,
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
      <erb-checkbox [size]="size" [disabled]="disabled" [checked]="checked">
        Accept terms and conditions
      </erb-checkbox>
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
      <erb-checkbox [size]="size" [disabled]="disabled" [checked]="checked">
        Disabled checked
      </erb-checkbox>
    `,
  })
};
