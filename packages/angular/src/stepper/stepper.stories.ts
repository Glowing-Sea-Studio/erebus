import { Meta, StoryObj } from '@storybook/angular';
import { StepperComponent } from './stepper.component';

const meta: Meta<StepperComponent> = { title: 'Components/Stepper', component: StepperComponent };
export default meta;
type Story = StoryObj<StepperComponent>;

export const Default: Story = { args: {
  currentStep: 0, steps: ['A']
} };
