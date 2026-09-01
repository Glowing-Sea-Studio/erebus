import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { GalleryComponent } from './gallery.component';

const meta: Meta<GalleryComponent> = {
  title: 'Components/Gallery',
  component: GalleryComponent,
  decorators: [
    moduleMetadata({
      imports: [GalleryComponent],
    }),
  ],
};

export default meta;
type Story = StoryObj<GalleryComponent>;

export const Default: Story = {
  args: {
    images: [
      { src: 'https://via.placeholder.com/150', alt: 'Placeholder 1' },
      { src: 'https://via.placeholder.com/150', alt: 'Placeholder 2' },
    ],
  },
};
