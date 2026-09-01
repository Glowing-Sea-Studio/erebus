import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { ComboboxComponent } from './combobox.component';

const meta: Meta<ComboboxComponent> = {
  title: 'Components/Combobox',
  component: ComboboxComponent,
  decorators: [
    moduleMetadata({
      imports: [ComboboxComponent],
    }),
  ],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<ComboboxComponent>;

const options = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Cherry', value: 'cherry' },
];

export const Default: Story = {
  args: {
    label: 'Select a fruit',
    options,
    placeholder: 'Type to search...',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Combobox',
    options,
    disabled: true,
  },
};
