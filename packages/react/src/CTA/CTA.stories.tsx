import type { Meta, StoryObj } from '@storybook/react';
import { CTA } from './CTA';

const meta: Meta<typeof CTA> = {
  title: 'Components/CTA',
  component: CTA,
};

export default meta;
type Story = StoryObj<typeof CTA>;

export const Default: Story = {
  args: {
    children: 'Hello CTA',
  },
};
