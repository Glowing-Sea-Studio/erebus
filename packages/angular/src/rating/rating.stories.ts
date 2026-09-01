import { Meta, StoryObj } from '@storybook/angular';
import { RatingComponent } from './rating.component';

const meta: Meta<RatingComponent> = {
  title: 'Components/Rating',
  component: RatingComponent,
};

export default meta;
type Story = StoryObj<RatingComponent>;

export const Default: Story = {
  args: {
    max: 5,
    value: 3,
  },
};

export const Disabled: Story = {
  args: {
    max: 5,
    value: 4,
    disabled: true,
  },
};
