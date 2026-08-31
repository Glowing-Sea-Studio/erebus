import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './index';

const meta = {
  title: 'React/Header',
  component: Header,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Header>
      <div className="font-bold text-lg">Erebus</div>
      <div className="ml-auto flex gap-4">
        <span>Home</span>
        <span>About</span>
      </div>
    </Header>
  )
};
