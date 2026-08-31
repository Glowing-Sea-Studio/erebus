import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from './index';

const meta = {
  title: 'React/Footer',
  component: Footer,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Footer>
      <div className="text-center">© 2026 Glowing Sea Studio. All rights reserved.</div>
    </Footer>
  )
};
