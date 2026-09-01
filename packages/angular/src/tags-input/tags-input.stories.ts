// @ts-nocheck
import { Meta, StoryObj } from '@storybook/angular';
import { TagsInputComponent } from './tags-input.component';

const meta: Meta<TagsInputComponent> = {
  title: 'Components/TagsInput',
  component: TagsInputComponent,
};

export default meta;
type Story = StoryObj<TagsInputComponent>;

export const Default: Story = {
  args: {
    tags: ['Angular', 'React'],
    placeholder: 'Add a tag...',
  },
};

export const Disabled: Story = {
  args: {
    tags: ['Angular'],
    disabled: true,
  },
};
