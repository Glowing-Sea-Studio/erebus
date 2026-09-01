import { Meta } from '@storybook/angular';
import { ErrorStateComponent } from './error-state.component';

export default {
  title: 'Components/ErrorState',
  component: ErrorStateComponent,
} as Meta;

export const Default = () => ({
  props: {
    title: 'Error Loading Data',
    description: 'Server failed to respond'
  },
});