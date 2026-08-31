import os

angular_dir = "packages/angular/src"
stories = {
    "card/card.stories.ts": """import type { Meta, StoryObj } from '@storybook/angular';
import { ErbCardComponent } from './card.component';
import { moduleMetadata } from '@storybook/angular';

const meta: Meta = {
  title: 'Angular/Card',
  component: ErbCardComponent,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => ({
    template: `
      <erb-card class="w-96" style="display: block; width: 24rem;">
        <erb-card-header>
          <erb-card-title>Card Title</erb-card-title>
          <erb-card-description>Card description goes here.</erb-card-description>
        </erb-card-header>
        <erb-card-body>
          <p>Main content of the card.</p>
        </erb-card-body>
        <erb-card-footer>
          <button erbButton data-variant="solid" data-size="md">Action</button>
        </erb-card-footer>
      </erb-card>
    `,
  })
};
""",
    "input/input.stories.ts": """import type { Meta, StoryObj } from '@storybook/angular';
import { ErbInputWrapperComponent } from './input-wrapper.component';

const meta: Meta = {
  title: 'Angular/Input',
  component: ErbInputWrapperComponent,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => ({
    template: `
      <erb-input-wrapper>
        <label erbLabel>Username</label>
        <input erbInput placeholder="Enter username" data-size="md" />
      </erb-input-wrapper>
    `,
  })
};

export const WithError: Story = {
  render: () => ({
    template: `
      <erb-input-wrapper>
        <label erbLabel>Email</label>
        <input erbInput placeholder="Enter email" data-size="md" aria-invalid="true" />
        <erb-error-message>Invalid email address.</erb-error-message>
      </erb-input-wrapper>
    `,
  })
};
""",
    "alert/alert.stories.ts": """import type { Meta, StoryObj } from '@storybook/angular';
import { ErbAlertComponent } from './alert.component';

const meta: Meta = {
  title: 'Angular/Alert',
  component: ErbAlertComponent,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    intent: {
      control: 'select',
      options: ['info', 'success', 'warning', 'danger'],
    }
  }
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    intent: 'info',
  },
  render: (args) => ({
    props: args,
    template: `
      <erb-alert [attr.data-intent]="intent">
        <erb-alert-content>
          <erb-alert-title>Information</erb-alert-title>
          <erb-alert-description>This is an important alert message.</erb-alert-description>
        </erb-alert-content>
      </erb-alert>
    `,
  })
};
""",
    "modal/modal.stories.ts": """import type { Meta, StoryObj } from '@storybook/angular';
import { ErbModalOverlayComponent } from './modal.component';

const meta: Meta = {
  title: 'Angular/Modal',
  component: ErbModalOverlayComponent,
  parameters: { layout: 'centered' },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => ({
    template: `
      <erb-modal-overlay>
        <erb-modal>
          <erb-modal-header>
            <erb-modal-title>Action Required</erb-modal-title>
            <erb-modal-description>Please confirm your action below.</erb-modal-description>
          </erb-modal-header>
          <erb-modal-body>
            <p>Are you sure you want to proceed?</p>
          </erb-modal-body>
          <erb-modal-footer>
            <button erbButton data-variant="ghost" data-size="md">Cancel</button>
            <button erbButton data-variant="solid" data-size="md">Confirm</button>
          </erb-modal-footer>
        </erb-modal>
      </erb-modal-overlay>
    `,
  })
};
""",
    "panel/panel.stories.ts": """import type { Meta, StoryObj } from '@storybook/angular';
import { ErbPanelComponent } from './panel.component';

const meta: Meta = {
  title: 'Angular/Panel',
  component: ErbPanelComponent,
  parameters: { layout: 'centered' },
  argTypes: {
    position: {
      control: 'select',
      options: ['left', 'right'],
    }
  }
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    position: 'right',
  },
  render: (args) => ({
    props: args,
    template: `
      <erb-panel-overlay>
        <erb-panel [attr.data-position]="position">
          <erb-panel-header>
            <erb-panel-title>Settings</erb-panel-title>
          </erb-panel-header>
          <erb-panel-body>
            <p>Panel content goes here.</p>
          </erb-panel-body>
          <erb-panel-footer>
            <button erbButton data-variant="solid" data-size="md">Close</button>
          </erb-panel-footer>
        </erb-panel>
      </erb-panel-overlay>
    `,
  })
};
""",
    "menu/menu.stories.ts": """import type { Meta, StoryObj } from '@storybook/angular';
import { ErbMenuComponent } from './menu.component';

const meta: Meta = {
  title: 'Angular/Menu',
  component: ErbMenuComponent,
  parameters: { layout: 'centered' },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => ({
    template: `
      <erb-menu>
        <button erbMenuItem>Profile</button>
        <button erbMenuItem>Settings</button>
        <erb-menu-separator></erb-menu-separator>
        <button erbMenuItem>Logout</button>
      </erb-menu>
    `,
  })
};
""",
    "tabs/tabs.stories.ts": """import type { Meta, StoryObj } from '@storybook/angular';
import { ErbTabsComponent } from './tabs.component';

const meta: Meta = {
  title: 'Angular/Tabs',
  component: ErbTabsComponent,
  parameters: { layout: 'centered' },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => ({
    template: `
      <erb-tabs style="display: block; width: 24rem;">
        <erb-tabs-list>
          <button erbTab data-state="active">Account</button>
          <button erbTab data-state="inactive">Password</button>
        </erb-tabs-list>
        <erb-tabs-panel data-state="active">
          <p>Make changes to your account here.</p>
        </erb-tabs-panel>
        <erb-tabs-panel data-state="inactive">
          <p>Change your password here.</p>
        </erb-tabs-panel>
      </erb-tabs>
    `,
  })
};
""",
    "header/header.stories.ts": """import type { Meta, StoryObj } from '@storybook/angular';
import { ErbHeaderComponent } from './header.component';

const meta: Meta = {
  title: 'Angular/Header',
  component: ErbHeaderComponent,
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => ({
    template: `
      <erb-header>
        <div style="font-weight: bold; font-size: 1.125rem;">Erebus</div>
        <div style="margin-left: auto; display: flex; gap: 1rem;">
          <span>Home</span>
          <span>About</span>
        </div>
      </erb-header>
    `,
  })
};
""",
    "footer/footer.stories.ts": """import type { Meta, StoryObj } from '@storybook/angular';
import { ErbFooterComponent } from './footer.component';

const meta: Meta = {
  title: 'Angular/Footer',
  component: ErbFooterComponent,
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => ({
    template: `
      <erb-footer>
        <div style="text-align: center;">© 2026 Glowing Sea Studio. All rights reserved.</div>
      </erb-footer>
    `,
  })
};
"""
}

for filepath, content in stories.items():
    full_path = os.path.join(angular_dir, filepath)
    if os.path.exists(os.path.dirname(full_path)):
        with open(full_path, "w") as f:
            f.write(content)
