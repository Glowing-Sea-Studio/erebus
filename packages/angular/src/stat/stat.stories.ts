import { Meta, StoryObj } from '@storybook/angular';
import { ErbStatComponent } from './stat.component';

const meta: Meta<ErbStatComponent> = {
  title: 'Components/Stat',
  component: ErbStatComponent,
};
export default meta;

type Story = StoryObj<ErbStatComponent>;

export const Default: Story = {
  args: {
    label: 'Total Revenue',
    value: '$45,231.89',
    helpText: '+20.1% from last month',
  }
};
