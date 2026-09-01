// @ts-nocheck
import { Meta, StoryObj } from '@storybook/angular';
import { RangeSliderComponent } from './range-slider.component';

const meta: Meta<RangeSliderComponent> = {
  title: 'Components/RangeSlider',
  component: RangeSliderComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<RangeSliderComponent>;

export const Default: Story = {
  args: {
    min: 0,
    max: 100,
    value: [20, 80],
  },
};
