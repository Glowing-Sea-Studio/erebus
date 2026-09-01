import { Meta, StoryObj } from '@storybook/angular';
import { SliderComponent } from './slider.component';

const meta: Meta<SliderComponent> = {
  title: 'Components/Slider',
  component: SliderComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<SliderComponent>;

export const Default: Story = {
  args: {
    min: 0,
    max: 100,
    value: 50,
  },
};
