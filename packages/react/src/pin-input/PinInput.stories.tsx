import { useState } from 'react';
import { PinInput } from './PinInput';

export default {
  title: 'Components/PinInput',
  component: PinInput,
};

export const Default = () => {
  const [value, setValue] = useState('');
  return <PinInput value={value} onChange={setValue} />;
};

export const Disabled = () => {
  return <PinInput value="123" disabled />;
};
