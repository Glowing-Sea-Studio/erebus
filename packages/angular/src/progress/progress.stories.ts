import type { Meta, StoryObj } from '@storybook/angular';
import { ProgressComponent } from './progress.component';

const meta: Meta<ProgressComponent> = { title: 'Components/Progress', component: ProgressComponent };
export default meta;
type Story = StoryObj<ProgressComponent>;
export const Default: Story = { args: { value: 50, max: 100 } };
