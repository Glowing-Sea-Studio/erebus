import { Meta, StoryObj } from '@storybook/angular';
import { ErbSearchInputComponent } from './search-input.component';

const meta: Meta<ErbSearchInputComponent> = {
  title: 'Components/SearchInput',
  component: ErbSearchInputComponent,
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'radio' },
    },
    disabled: {
      control: 'boolean',
    },
    value: {
      control: 'text',
    },
    placeholder: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<ErbSearchInputComponent>;

export const Default: Story = {
  args: {
    size: 'md',
    disabled: false,
    value: '',
    placeholder: 'Search for items...',
  },
};
