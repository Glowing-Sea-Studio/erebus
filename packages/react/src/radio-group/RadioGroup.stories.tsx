import { RadioGroup } from './RadioGroup';
import { Radio } from '../radio/Radio';

export default {
  title: 'Components/RadioGroup',
  component: RadioGroup,
};

export const Default = () => (
  <RadioGroup legend="Choose your plan" name="plan">
    <Radio value="basic" label="Basic" />
    <Radio value="pro" label="Pro" />
    <Radio value="enterprise" label="Enterprise" />
  </RadioGroup>
);
