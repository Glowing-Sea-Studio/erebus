// @ts-nocheck
import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { TagComponent } from './tag.component';

const meta: Meta<TagComponent> = {
  title: 'Components/Tag',
  component: TagComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [TagComponent],
    }),
  ],
  render: (args: TagComponent) => ({
    props: {
      ...args,
    },
    template: `<erb-tag [variant]="variant" [color]="color" [size]="size" [closable]="closable">Tag</erb-tag>`,
  }),
};

export default meta;
type Story = StoryObj<TagComponent>;

export const Default: Story = {
  args: {
    variant: 'solid',
    color: 'primary',
    size: 'md',
    closable: false,
  },
};

export const Closable: Story = {
  args: {
    variant: 'solid',
    color: 'primary',
    size: 'md',
    closable: true,
  },
};
