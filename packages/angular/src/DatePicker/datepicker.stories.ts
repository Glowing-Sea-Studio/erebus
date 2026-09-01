// @ts-nocheck
import { Meta, StoryObj } from '@storybook/angular';
import { ErbDatePickerComponent } from './datepicker.component';

const meta: Meta<ErbDatePickerComponent> = {
  title: 'Components/DatePicker',
  component: ErbDatePickerComponent,
};

export default meta;
type Story = StoryObj<ErbDatePickerComponent>;

export const Default: Story = {
  args: {},
};
