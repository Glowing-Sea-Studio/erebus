import { ErrorState } from './ErrorState';

export default {
  title: 'Components/ErrorState',
  component: ErrorState,
};

export const Default = () => <ErrorState title="Something went wrong" description="Please try again." />;