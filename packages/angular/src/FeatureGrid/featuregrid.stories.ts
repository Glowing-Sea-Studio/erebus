import type { Meta, StoryObj } from '@storybook/angular';
import { FeatureGridComponent } from './featuregrid.component';

const meta: Meta<FeatureGridComponent> = {
  title: 'Components/FeatureGrid',
  component: FeatureGridComponent,
};

export default meta;
type Story = StoryObj<FeatureGridComponent>;

export const Default: Story = {
  args: {},
};
