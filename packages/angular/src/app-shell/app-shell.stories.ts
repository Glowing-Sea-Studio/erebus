
import { Meta, StoryObj } from '@storybook/angular';
import { AppShellComponent } from './app-shell.component';

const meta: Meta<AppShellComponent> = {
  title: 'Components/AppShell',
  component: AppShellComponent,
};

export default meta;
type Story = StoryObj<AppShellComponent>;

export const Default: Story = {
  args: {}
};
