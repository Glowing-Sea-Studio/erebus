// @ts-nocheck
import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { FileUploadComponent } from './FileUpload.component';
import { CommonModule } from '@angular/common';

const meta: Meta<FileUploadComponent> = {
  title: 'Components/FileUpload',
  component: FileUploadComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, FileUploadComponent],
    }),
  ],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<FileUploadComponent>;

export const Default: Story = {
  args: {},
};
