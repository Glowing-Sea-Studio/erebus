import type { Meta, StoryObj } from '@storybook/react';
import { Tabs, TabsList, Tab, TabsPanel } from './index';
import { useState } from 'react';

const meta = {
  title: 'React/Tabs',
  component: Tabs,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('account');
    return (
      <Tabs className="w-96">
        <TabsList>
          <Tab data-state={activeTab === 'account' ? 'active' : 'inactive'} onClick={() => setActiveTab('account')}>Account</Tab>
          <Tab data-state={activeTab === 'password' ? 'active' : 'inactive'} onClick={() => setActiveTab('password')}>Password</Tab>
        </TabsList>
        <TabsPanel data-state={activeTab === 'account' ? 'active' : 'inactive'}>
          <p>Make changes to your account here.</p>
        </TabsPanel>
        <TabsPanel data-state={activeTab === 'password' ? 'active' : 'inactive'}>
          <p>Change your password here.</p>
        </TabsPanel>
      </Tabs>
    );
  }
};
