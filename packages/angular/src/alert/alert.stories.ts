import type { Meta, StoryObj } from '@storybook/angular';
import { ErbAlertComponent } from './alert.component';

const meta: Meta = {
  title: 'Angular/Alert',
  component: ErbAlertComponent,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    intent: {
      control: 'select',
      options: ['info', 'success', 'warning', 'danger'],
    }
  }
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    intent: 'info',
    title: 'Information'
  },
  render: (args: any) => ({
    props: args,
    template: `
      <erb-alert [intent]="intent" [title]="title">
        This is an important alert message.
      </erb-alert>
    `,
  })
};
