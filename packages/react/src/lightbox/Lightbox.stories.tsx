import { Meta, StoryObj } from '@storybook/react';
import { Lightbox } from './Lightbox';

const meta: Meta<typeof Lightbox> = {
  title: 'Components/Lightbox',
  component: Lightbox,
};

export default meta;
type Story = StoryObj<typeof Lightbox>;

export const Default: Story = {
  args: {
    isOpen: true,
    imageSrc: 'https://via.placeholder.com/800x600',
    imageAlt: 'Placeholder',
  },
};
