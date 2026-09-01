import type { Meta, StoryObj } from '@storybook/react';
import { Image } from './image';

const meta: Meta<typeof Image> = { title: 'Components/Image', component: Image };
export default meta;
type Story = StoryObj<typeof Image>;
export const Default: Story = { args: { src: 'https://via.placeholder.com/150', alt: 'Placeholder', lazy: true } };
export const Fallback: Story = { args: { src: 'invalid-url', alt: 'Fallback' } };
