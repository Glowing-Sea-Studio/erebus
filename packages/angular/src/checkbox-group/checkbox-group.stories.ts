import { Meta, StoryObj } from '@storybook/angular';
import { ErbCheckboxGroupComponent } from './checkbox-group.component';
import { ErbCheckboxComponent } from '../checkbox/checkbox.component';

const meta: Meta<ErbCheckboxGroupComponent> = {
  title: 'Components/CheckboxGroup',
  component: ErbCheckboxGroupComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<ErbCheckboxGroupComponent>;

export const Default: Story = {
  render: (args: any) => ({
    props: args,
    template: `
      <erb-checkbox-group [legend]="legend" [disabled]="disabled">
        <erb-checkbox>Option 1</erb-checkbox>
        <erb-checkbox>Option 2</erb-checkbox>
        <erb-checkbox>Option 3</erb-checkbox>
      </erb-checkbox-group>
    `,
    moduleMetadata: {
      imports: [ErbCheckboxGroupComponent, ErbCheckboxComponent],
    },
  }),
  args: {
    legend: 'Select options',
    disabled: false,
  },
};
