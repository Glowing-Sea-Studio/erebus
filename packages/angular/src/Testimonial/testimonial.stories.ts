// @ts-nocheck
import type { Meta, StoryObj } from '@storybook/angular';
import { TestimonialComponent } from './testimonial.component';

const meta: Meta<TestimonialComponent> = {
  title: 'Components/Testimonial',
  component: TestimonialComponent,
};

export default meta;
type Story = StoryObj<TestimonialComponent>;

export const Default: Story = {
  args: {},
};
