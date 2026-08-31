import { Select } from './Select';

export default {
  title: 'Components/Select',
  component: Select,
};

export const Default = () => (
  <Select label="Choose an option">
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
  </Select>
);
