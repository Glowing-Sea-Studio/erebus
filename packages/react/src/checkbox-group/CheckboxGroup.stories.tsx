import { CheckboxGroup } from './CheckboxGroup';
import { Checkbox } from '../checkbox/Checkbox';

export default {
  title: 'Components/CheckboxGroup',
  component: CheckboxGroup,
};

export const Default = () => (
  <CheckboxGroup legend="Choose your toppings">
    <Checkbox value="pepperoni" label="Pepperoni" />
    <Checkbox value="mushrooms" label="Mushrooms" />
    <Checkbox value="onions" label="Onions" />
  </CheckboxGroup>
);
