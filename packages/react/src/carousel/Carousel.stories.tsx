import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Carousel } from './Carousel';

const meta: Meta<typeof Carousel> = {
  title: 'Components/Carousel',
  component: Carousel,
};

export default meta;
type Story = StoryObj<typeof Carousel>;

export const Default: Story = {
  args: {
    images: [
      { src: 'https://via.placeholder.com/800x400/ff0000', alt: 'Red' },
      { src: 'https://via.placeholder.com/800x400/00ff00', alt: 'Green' },
      { src: 'https://via.placeholder.com/800x400/0000ff', alt: 'Blue' },
    ],
  },
};
