// @ts-nocheck
import { Meta, StoryObj } from '@storybook/angular';
import { ErbSelectDirective } from './select.directive';

const meta: Meta<ErbSelectDirective & { disabled: boolean }> = {
  title: 'Components/Select',
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'radio' },
    },
    disabled: {
      control: 'boolean',
    },
    invalid: {
      control: 'boolean',
    },
  },
};

export default meta;

export const Default: StoryObj<ErbSelectDirective & { disabled: boolean }> = {
  render: (args: any) => ({
    props: args,
    template: `
      <select erbSelect [size]="size" [invalid]="invalid" [disabled]="disabled">
        <option value="">Select an option</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </select>
    `,
    moduleMetadata: {
      imports: [ErbSelectDirective],
    },
  }),
  args: {
    size: 'md',
    invalid: false,
    disabled: false,
  },
};
