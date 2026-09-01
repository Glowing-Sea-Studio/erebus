import type { Meta, StoryObj } from '@storybook/react';
import { LogoCloud } from './LogoCloud';

const meta: Meta<typeof LogoCloud> = {
  title: 'Components/LogoCloud',
  component: LogoCloud,
};

export default meta;
type Story = StoryObj<typeof LogoCloud>;

export const Default: Story = {
  args: {
    children: 'Hello LogoCloud',
  },
};
