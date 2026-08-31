import type { Meta, StoryObj } from '@storybook/react';
import { Panel, PanelOverlay, PanelHeader, PanelTitle, PanelBody, PanelFooter } from './index';
import { useState } from 'react';

const meta = {
  title: 'React/Panel',
  component: Panel,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Panel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <button className="erb-button" data-variant="solid" data-size="md" onClick={() => setOpen(true)}>Open Panel</button>
        <Panel open={open} onOpenChange={setOpen} data-position="right">
          <PanelOverlay />
          <PanelHeader>
            <PanelTitle>Settings</PanelTitle>
          </PanelHeader>
          <PanelBody>
            <p>Panel content goes here.</p>
          </PanelBody>
          <PanelFooter>
            <button className="erb-button" data-variant="solid" data-size="md" onClick={() => setOpen(false)}>Close</button>
          </PanelFooter>
        </Panel>
      </>
    );
  }
};
