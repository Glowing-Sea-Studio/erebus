import { useState } from 'react';
import { Rating } from './Rating';

export default {
  title: 'Components/Rating',
  component: Rating,
};

export const Default = () => {
  const [value, setValue] = useState(3);
  return <Rating value={value} onChange={setValue} />;
};

export const Disabled = () => {
  return <Rating value={4} disabled />;
};
