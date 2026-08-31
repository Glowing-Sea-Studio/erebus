import { NumberInput } from './NumberInput';

export default {
  title: 'Components/NumberInput',
  component: NumberInput,
};

export const Default = () => (
  <NumberInput label="Age" defaultValue={18} />
);
