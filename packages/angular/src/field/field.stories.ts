// @ts-nocheck
import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { ErbFieldComponent } from './field.component';
import { CommonModule } from '@angular/common';
import { ErbLabelComponent } from '../label/label.component';

const meta: Meta<ErbFieldComponent> = {
  title: 'Components/Field',
  component: ErbFieldComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [CommonModule, ErbLabelComponent],
    }),
  ],
  render: (args) => ({
    props: {
      ...args,
    },
    template: `
      <erb-field [label]="label" [hint]="hint" [error]="error" [required]="required" [horizontal]="horizontal">
        <input type="text" style="padding: 8px; border: 1px solid var(--erb-color-border-default); border-radius: 4px;" />
      </erb-field>
    `,
  }),
};

export default meta;
type Story = StoryObj<ErbFieldComponent>;

export const Default: Story = {
  args: {
    label: 'Username',
    hint: 'Enter your username',
  },
};

export const Required: Story = {
  args: {
    label: 'Email',
    required: true,
  },
};

export const WithError: Story = {
  args: {
    label: 'Password',
    error: 'Password is too short',
  },
};

export const Horizontal: Story = {
  args: {
    label: 'Newsletter',
    horizontal: true,
  },
  render: (args) => ({
    props: {
      ...args,
    },
    template: `
      <erb-field [label]="label" [hint]="hint" [error]="error" [required]="required" [horizontal]="horizontal">
        <input type="checkbox" />
      </erb-field>
    `,
  }),
};
