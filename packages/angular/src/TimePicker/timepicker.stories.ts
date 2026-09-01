import { Meta, StoryObj } from '@storybook/angular';
import { ErbTimePickerComponent } from './timepicker.component';

const meta: Meta<ErbTimePickerComponent> = {
  title: 'Components/TimePicker',
  component: ErbTimePickerComponent,
};

export default meta;
type Story = StoryObj<ErbTimePickerComponent>;

export const Default: Story = {
  args: {},
};
