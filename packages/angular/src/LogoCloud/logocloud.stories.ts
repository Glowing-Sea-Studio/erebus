import type { Meta, StoryObj } from '@storybook/angular';
import { LogoCloudComponent } from './logocloud.component';

const meta: Meta<LogoCloudComponent> = {
  title: 'Components/LogoCloud',
  component: LogoCloudComponent,
};

export default meta;
type Story = StoryObj<LogoCloudComponent>;

export const Default: Story = {
  args: {},
};
