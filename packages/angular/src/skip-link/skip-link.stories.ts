// @ts-nocheck
import { Meta, StoryObj } from '@storybook/angular';
import { SkipLinkComponent } from './skip-link.component';

const meta: Meta<SkipLinkComponent> = { title: 'Components/SkipLink', component: SkipLinkComponent };
export default meta;
type Story = StoryObj<SkipLinkComponent>;

export const Default: Story = { args: {
  href: '#main'
} };
