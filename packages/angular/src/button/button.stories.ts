import type { Meta, StoryObj } from '@storybook/angular';
import { ErbButtonDirective } from './button.directive';

const meta: Meta = {
  title: 'Angular/Button',
  component: ErbButtonDirective,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    variant: {
      control: 'select',
      options: ['solid', 'outline', 'ghost'],
    },
    disabled: {
      control: 'boolean',
    },
  },
  render: (args: any) => ({
    props: args,
    template: `<button erbButton [attr.data-variant]="variant" [attr.data-size]="size" [disabled]="disabled">Button</button>`,
  }),
};

export default meta;
type Story = StoryObj;

export const Solid: Story = {
  args: {
    variant: 'solid',
    size: 'md',
    disabled: false,
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    size: 'md',
    disabled: false,
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    size: 'md',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    variant: 'solid',
    size: 'md',
    disabled: true,
  },
};
