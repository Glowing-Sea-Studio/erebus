// @ts-nocheck
import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Component } from '@angular/core';
import { 
  ErbAlertDialogOverlayComponent,
  ErbAlertDialogContentComponent,
  ErbAlertDialogHeaderComponent,
  ErbAlertDialogTitleComponent,
  ErbAlertDialogDescriptionComponent,
  ErbAlertDialogBodyComponent,
  ErbAlertDialogFooterComponent
} from './alert-dialog.component';

@Component({
  selector: 'app-alert-dialog-story',
  standalone: true,
  imports: [
    ErbAlertDialogOverlayComponent,
    ErbAlertDialogContentComponent,
    ErbAlertDialogHeaderComponent,
    ErbAlertDialogTitleComponent,
    ErbAlertDialogDescriptionComponent,
    ErbAlertDialogBodyComponent,
    ErbAlertDialogFooterComponent
  ],
  template: `
    <erb-alert-dialog-overlay></erb-alert-dialog-overlay>
    <erb-alert-dialog-content>
      <erb-alert-dialog-header>
        <erb-alert-dialog-title>Are you absolutely sure?</erb-alert-dialog-title>
        <erb-alert-dialog-description>
          This action cannot be undone.
        </erb-alert-dialog-description>
      </erb-alert-dialog-header>
      <erb-alert-dialog-body>
        Please confirm.
      </erb-alert-dialog-body>
      <erb-alert-dialog-footer>
        <button>Cancel</button>
        <button>Continue</button>
      </erb-alert-dialog-footer>
    </erb-alert-dialog-content>
  `
})
class AlertDialogStoryComponent {}

const meta: Meta<AlertDialogStoryComponent> = {
  title: 'Components/AlertDialog',
  component: AlertDialogStoryComponent,
};

export default meta;
type Story = StoryObj<AlertDialogStoryComponent>;

export const Default: Story = {};
