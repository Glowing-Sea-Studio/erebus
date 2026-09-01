import type { Meta, StoryObj } from '@storybook/react';
import { LoadingOverlay } from './loading-overlay';

const meta: Meta<typeof LoadingOverlay> = { title: 'Components/LoadingOverlay', component: LoadingOverlay };
export default meta;
type Story = StoryObj<typeof LoadingOverlay>;
export const Default: Story = { args: { active: true } };
