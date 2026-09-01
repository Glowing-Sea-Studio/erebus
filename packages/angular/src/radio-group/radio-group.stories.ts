// @ts-nocheck
import { Meta, StoryObj } from '@storybook/angular';
import { ErbRadioGroupComponent } from './radio-group.component';
import { ErbRadioComponent } from '../radio/radio.component';

const meta: Meta<ErbRadioGroupComponent> = {
  title: 'Components/RadioGroup',
  component: ErbRadioGroupComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<ErbRadioGroupComponent>;

export const Default: Story = {
  render: (args: any) => ({
    props: args,
    template: `
      <erb-radio-group [legend]="legend" [disabled]="disabled">
        <erb-radio name="group1">Option 1</erb-radio>
        <erb-radio name="group1">Option 2</erb-radio>
        <erb-radio name="group1">Option 3</erb-radio>
      </erb-radio-group>
    `,
    moduleMetadata: {
      imports: [ErbRadioGroupComponent, ErbRadioComponent],
    },
  }),
  args: {
    legend: 'Select one option',
    disabled: false,
  },
};
