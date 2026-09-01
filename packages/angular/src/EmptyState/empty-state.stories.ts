import { Meta, moduleMetadata } from '@storybook/angular';
import { EmptyStateComponent } from './empty-state.component';

export default {
  title: 'Components/EmptyState',
  component: EmptyStateComponent,
} as Meta;

export const Default = () => ({
  props: {
    title: 'No Data',
    description: 'There is nothing here'
  },
});