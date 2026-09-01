import { Meta, StoryObj } from '@storybook/angular';
import { PinInputComponent } from './pin-input.component';

const meta: Meta<PinInputComponent> = {
  title: 'Components/PinInput',
  component: PinInputComponent,
};

export default meta;
type Story = StoryObj<PinInputComponent>;

export const Default: Story = {
  args: {
    length: 4,
    value: '',
  },
};

export const Disabled: Story = {
  args: {
    length: 4,
    value: '1234',
    disabled: true,
  },
};
