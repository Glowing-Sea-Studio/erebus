// @ts-nocheck
import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { CarouselComponent } from './carousel.component';

const meta: Meta<CarouselComponent> = {
  title: 'Components/Carousel',
  component: CarouselComponent,
  decorators: [
    moduleMetadata({
      imports: [CarouselComponent],
    }),
  ],
};

export default meta;
type Story = StoryObj<CarouselComponent>;

export const Default: Story = {
  args: {
    images: [
      { src: 'https://via.placeholder.com/800x400/ff0000', alt: 'Red' },
      { src: 'https://via.placeholder.com/800x400/00ff00', alt: 'Green' },
    ],
  },
};
