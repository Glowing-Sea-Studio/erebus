// @ts-nocheck
import { Meta, StoryObj } from '@storybook/angular';
import { ErbDateRangePickerComponent } from './daterangepicker.component';

const meta: Meta<ErbDateRangePickerComponent> = {
  title: 'Components/DateRangePicker',
  component: ErbDateRangePickerComponent,
};

export default meta;
type Story = StoryObj<ErbDateRangePickerComponent>;

export const Default: Story = {
  args: {},
};
