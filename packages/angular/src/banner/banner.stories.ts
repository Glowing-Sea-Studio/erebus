// @ts-nocheck
import type { Meta, StoryObj } from '@storybook/angular';
import { BannerComponent } from './banner.component';

const meta: Meta<BannerComponent> = { title: 'Components/Banner', component: BannerComponent };
export default meta;
type Story = StoryObj<BannerComponent>;
export const Default: Story = { args: { variant: 'info' } };
