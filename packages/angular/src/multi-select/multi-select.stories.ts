// @ts-nocheck
import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { MultiSelectComponent } from './multi-select.component';

const meta: Meta<MultiSelectComponent> = {
  title: 'Components/MultiSelect',
  component: MultiSelectComponent,
  decorators: [
    moduleMetadata({
      imports: [MultiSelectComponent],
    }),
  ],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<MultiSelectComponent>;

const options = [
  { label: 'React', value: 'react' },
  { label: 'Vue', value: 'vue' },
  { label: 'Angular', value: 'angular' },
  { label: 'Svelte', value: 'svelte' },
];

export const Default: Story = {
  args: {
    label: 'Frameworks',
    options,
    placeholder: 'Select frameworks...',
    value: ['angular'],
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    options,
    value: ['vue'],
    disabled: true,
  },
};
