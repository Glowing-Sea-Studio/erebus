// @ts-nocheck
import type { Meta, StoryObj } from '@storybook/angular';
import { ErbInputWrapperComponent } from './input-wrapper.component';

const meta: Meta = {
  title: 'Angular/Input',
  component: ErbInputWrapperComponent,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    label: { control: 'text' },
    error: { control: 'text' },
  }
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    label: 'Username',
  },
  render: (args: any) => ({
    props: args,
    template: `
      <erb-input-wrapper [label]="label" [error]="error">
        <input erbInput placeholder="Enter username" data-size="md" />
      </erb-input-wrapper>
    `,
  })
};

export const WithError: Story = {
  args: {
    label: 'Email',
    error: 'Invalid email address.',
  },
  render: (args: any) => ({
    props: args,
    template: `
      <erb-input-wrapper [label]="label" [error]="error">
        <input erbInput placeholder="Enter email" data-size="md" aria-invalid="true" />
      </erb-input-wrapper>
    `,
  })
};
