// @ts-nocheck
import { Meta, StoryObj } from '@storybook/angular';
import { ErbNumberInputComponent } from './number-input.component';

const meta: Meta<ErbNumberInputComponent> = {
  title: 'Components/NumberInput',
  component: ErbNumberInputComponent,
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
    value: {
      control: 'number',
    },
    min: {
      control: 'number',
    },
    max: {
      control: 'number',
    },
    step: {
      control: 'number',
    },
  },
};

export default meta;
type Story = StoryObj<ErbNumberInputComponent>;

export const Default: Story = {
  args: {
    size: 'md',
    disabled: false,
    invalid: false,
    value: 0,
    step: 1,
  },
};
