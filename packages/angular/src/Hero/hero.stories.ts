// @ts-nocheck
import type { Meta, StoryObj } from '@storybook/angular';
import { HeroComponent } from './hero.component';

const meta: Meta<HeroComponent> = {
  title: 'Components/Hero',
  component: HeroComponent,
};

export default meta;
type Story = StoryObj<HeroComponent>;

export const Default: Story = {
  args: {},
};
