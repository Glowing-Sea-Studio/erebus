// @ts-nocheck
import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { BadgeComponent } from './badge.component';

const meta: Meta<BadgeComponent> = {
  title: 'Components/Badge',
  component: BadgeComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [BadgeComponent],
    }),
  ],
  render: (args: BadgeComponent) => ({
    props: {
      ...args,
    },
    template: `<erb-badge [variant]="variant" [color]="color" [size]="size" [shape]="shape">Badge</erb-badge>`,
  }),
};

export default meta;
type Story = StoryObj<BadgeComponent>;

export const Default: Story = {
  args: {
    variant: 'solid',
    color: 'primary',
    size: 'md',
    shape: 'rounded',
  },
};
