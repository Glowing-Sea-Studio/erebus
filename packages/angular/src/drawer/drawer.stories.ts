import { Meta, StoryObj } from '@storybook/angular';
import { Component } from '@angular/core';
import { 
  ErbDrawerOverlayComponent,
  ErbDrawerContentComponent,
  ErbDrawerHeaderComponent,
  ErbDrawerTitleComponent,
  ErbDrawerDescriptionComponent,
  ErbDrawerBodyComponent,
  ErbDrawerFooterComponent
} from './drawer.component';

@Component({
  selector: 'app-drawer-story',
  standalone: true,
  imports: [
    ErbDrawerOverlayComponent,
    ErbDrawerContentComponent,
    ErbDrawerHeaderComponent,
    ErbDrawerTitleComponent,
    ErbDrawerDescriptionComponent,
    ErbDrawerBodyComponent,
    ErbDrawerFooterComponent
  ],
  template: `
    <erb-drawer-overlay></erb-drawer-overlay>
    <erb-drawer-content>
      <erb-drawer-header>
        <erb-drawer-title>Settings</erb-drawer-title>
        <erb-drawer-description>Manage your settings here.</erb-drawer-description>
      </erb-drawer-header>
      <erb-drawer-body>
        Preferences...
      </erb-drawer-body>
      <erb-drawer-footer>
        <button>Close</button>
      </erb-drawer-footer>
    </erb-drawer-content>
  `
})
class DrawerStoryComponent {}

const meta: Meta<DrawerStoryComponent> = {
  title: 'Components/Drawer',
  component: DrawerStoryComponent,
};

export default meta;
type Story = StoryObj<DrawerStoryComponent>;

export const Default: Story = {};
