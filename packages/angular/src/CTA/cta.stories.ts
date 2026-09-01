import type { Meta, StoryObj } from '@storybook/angular';
import { CTAComponent } from './cta.component';

const meta: Meta<CTAComponent> = {
  title: 'Components/CTA',
  component: CTAComponent,
};

export default meta;
type Story = StoryObj<CTAComponent>;

export const Default: Story = {
  args: {},
};
