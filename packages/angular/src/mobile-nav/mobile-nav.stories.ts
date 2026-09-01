
import { Meta, StoryObj } from '@storybook/angular';
import { MobileNavComponent } from './mobile-nav.component';

const meta: Meta<MobileNavComponent> = {
  title: 'Components/MobileNav',
  component: MobileNavComponent,
};

export default meta;
type Story = StoryObj<MobileNavComponent>;

export const Default: Story = {
  args: {}
};
