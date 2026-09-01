import type { Meta, StoryObj } from '@storybook/angular';
import { ImageComponent } from './image.component';

const meta: Meta<ImageComponent> = { title: 'Components/Image', component: ImageComponent };
export default meta;
type Story = StoryObj<ImageComponent>;
export const Default: Story = { args: { src: 'https://via.placeholder.com/150', alt: 'Placeholder', lazy: true } };
export const Fallback: Story = { args: { src: 'invalid-url', alt: 'Fallback' } };
