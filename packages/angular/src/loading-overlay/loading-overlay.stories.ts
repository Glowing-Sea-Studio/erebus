import type { Meta, StoryObj } from '@storybook/angular';
import { LoadingOverlayComponent } from './loading-overlay.component';

const meta: Meta<LoadingOverlayComponent> = { title: 'Components/LoadingOverlay', component: LoadingOverlayComponent };
export default meta;
type Story = StoryObj<LoadingOverlayComponent>;
export const Default: Story = { args: { active: true } };
