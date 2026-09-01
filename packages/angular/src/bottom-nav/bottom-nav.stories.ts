
import { Meta, StoryObj } from '@storybook/angular';
import { BottomNavComponent } from './bottom-nav.component';

const meta: Meta<BottomNavComponent> = {
  title: 'Components/BottomNav',
  component: BottomNavComponent,
};

export default meta;
type Story = StoryObj<BottomNavComponent>;

export const Default: Story = {
  args: {}
};
