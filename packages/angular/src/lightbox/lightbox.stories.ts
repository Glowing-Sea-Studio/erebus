// @ts-nocheck
import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { LightboxComponent } from './lightbox.component';

const meta: Meta<LightboxComponent> = {
  title: 'Components/Lightbox',
  component: LightboxComponent,
  decorators: [
    moduleMetadata({
      imports: [LightboxComponent],
    }),
  ],
};

export default meta;
type Story = StoryObj<LightboxComponent>;

export const Default: Story = {
  args: {
    isOpen: true,
    imageSrc: 'https://via.placeholder.com/800x600',
    imageAlt: 'Placeholder',
  },
};
