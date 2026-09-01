// @ts-nocheck
import type { Meta, StoryObj } from '@storybook/angular';
import { ErbInputWrapperComponent } from '../input/input-wrapper.component';
import { ErbTextareaDirective } from './textarea.directive';

const meta: Meta = {
  title: 'Angular/Textarea',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    label: { control: 'text' },
    error: { control: 'text' },
    disabled: { control: 'boolean' },
    invalid: { control: 'boolean' },
  }
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    label: 'Message',
    disabled: false,
    invalid: false,
  },
  render: (args: any) => ({
    props: args,
    template: `
      <erb-input-wrapper [label]="label" [error]="error">
        <textarea erbTextarea placeholder="Enter your message" [disabled]="disabled" [attr.aria-invalid]="invalid"></textarea>
      </erb-input-wrapper>
    `,
    moduleMetadata: {
      imports: [ErbInputWrapperComponent, ErbTextareaDirective],
    },
  })
};

export const WithError: Story = {
  args: {
    label: 'Message',
    error: 'Message is required.',
    disabled: false,
    invalid: true,
  },
  render: (args: any) => ({
    props: args,
    template: `
      <erb-input-wrapper [label]="label" [error]="error">
        <textarea erbTextarea placeholder="Enter your message" [disabled]="disabled" [attr.aria-invalid]="invalid"></textarea>
      </erb-input-wrapper>
    `,
    moduleMetadata: {
      imports: [ErbInputWrapperComponent, ErbTextareaDirective],
    },
  })
};
