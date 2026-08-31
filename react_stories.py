import os

react_dir = "packages/react/src"
stories = {
    "card/Card.stories.tsx": """import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardHeader, CardTitle, CardDescription, CardBody, CardFooter } from './index';

const meta = {
  title: 'React/Card',
  component: Card,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here.</CardDescription>
      </CardHeader>
      <CardBody>
        <p>Main content of the card.</p>
      </CardBody>
      <CardFooter>
        <button className="erb-button" data-variant="solid" data-size="md">Action</button>
      </CardFooter>
    </Card>
  )
};
""",
    "input/Input.stories.tsx": """import type { Meta, StoryObj } from '@storybook/react';
import { Input, InputWrapper, Label, ErrorMessage } from './index';

const meta = {
  title: 'React/Input',
  component: Input,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <InputWrapper>
      <Label htmlFor="demo-input">Username</Label>
      <Input id="demo-input" placeholder="Enter username" data-size="md" />
    </InputWrapper>
  )
};

export const WithError: Story = {
  render: () => (
    <InputWrapper>
      <Label htmlFor="demo-input-error">Email</Label>
      <Input id="demo-input-error" placeholder="Enter email" data-size="md" aria-invalid="true" />
      <ErrorMessage>Invalid email address.</ErrorMessage>
    </InputWrapper>
  )
};
""",
    "alert/Alert.stories.tsx": """import type { Meta, StoryObj } from '@storybook/react';
import { Alert, AlertContent, AlertTitle, AlertDescription } from './index';

const meta = {
  title: 'React/Alert',
  component: Alert,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    'data-intent': {
      control: 'select',
      options: ['info', 'success', 'warning', 'danger'],
    }
  }
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    'data-intent': 'info',
  },
  render: (args) => (
    <Alert {...args}>
      <AlertContent>
        <AlertTitle>Information</AlertTitle>
        <AlertDescription>This is an important alert message.</AlertDescription>
      </AlertContent>
    </Alert>
  )
};
""",
    "modal/Modal.stories.tsx": """import type { Meta, StoryObj } from '@storybook/react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalTitle, ModalDescription, ModalBody, ModalFooter } from './index';
import { useState } from 'react';

const meta = {
  title: 'React/Modal',
  component: Modal,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <button className="erb-button" data-variant="solid" data-size="md" onClick={() => setOpen(true)}>Open Modal</button>
        <Modal open={open} onOpenChange={setOpen}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              <ModalTitle>Action Required</ModalTitle>
              <ModalDescription>Please confirm your action below.</ModalDescription>
            </ModalHeader>
            <ModalBody>
              <p>Are you sure you want to proceed?</p>
            </ModalBody>
            <ModalFooter>
              <button className="erb-button" data-variant="ghost" data-size="md" onClick={() => setOpen(false)}>Cancel</button>
              <button className="erb-button" data-variant="solid" data-size="md" onClick={() => setOpen(false)}>Confirm</button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  }
};
""",
    "panel/Panel.stories.tsx": """import type { Meta, StoryObj } from '@storybook/react';
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
""",
    "menu/Menu.stories.tsx": """import type { Meta, StoryObj } from '@storybook/react';
import { Menu, MenuItem, MenuSeparator } from './index';
import { useState } from 'react';

const meta = {
  title: 'React/Menu',
  component: Menu,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <div className="relative">
        <button className="erb-button" data-variant="solid" data-size="md" onClick={() => setOpen(!open)}>
          Toggle Menu
        </button>
        {open && (
          <div className="absolute top-full mt-2">
            <Menu>
              <MenuItem onClick={() => setOpen(false)}>Profile</MenuItem>
              <MenuItem onClick={() => setOpen(false)}>Settings</MenuItem>
              <MenuSeparator />
              <MenuItem onClick={() => setOpen(false)}>Logout</MenuItem>
            </Menu>
          </div>
        )}
      </div>
    );
  }
};
""",
    "tabs/Tabs.stories.tsx": """import type { Meta, StoryObj } from '@storybook/react';
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
""",
    "header/Header.stories.tsx": """import type { Meta, StoryObj } from '@storybook/react';
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
""",
    "footer/Footer.stories.tsx": """import type { Meta, StoryObj } from '@storybook/react';
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
"""
}

for filepath, content in stories.items():
    full_path = os.path.join(react_dir, filepath)
    if os.path.exists(os.path.dirname(full_path)):
        with open(full_path, "w") as f:
            f.write(content)
