import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Gallery } from './Gallery';

const meta: Meta<typeof Gallery> = {
  title: 'Components/Gallery',
  component: Gallery,
};

export default meta;
type Story = StoryObj<typeof Gallery>;

export const Default: Story = {
  args: {
    images: [
      { src: 'https://via.placeholder.com/150', alt: '150x150 placeholder' },
    ],
  },
};
