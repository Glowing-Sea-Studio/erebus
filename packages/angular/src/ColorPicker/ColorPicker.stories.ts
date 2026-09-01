import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { ColorPickerComponent } from './ColorPicker.component';
import { CommonModule } from '@angular/common';

const meta: Meta<ColorPickerComponent> = {
  title: 'Components/ColorPicker',
  component: ColorPickerComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, ColorPickerComponent],
    }),
  ],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<ColorPickerComponent>;

export const Default: Story = {
  args: {
    value: '#3b82f6',
  },
};
