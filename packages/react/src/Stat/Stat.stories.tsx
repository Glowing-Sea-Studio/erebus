import React from 'react';
import { Stat } from './Stat';

export default { title: 'Components/Stat', component: Stat };

export const Default = () => (
  <Stat label="Total Revenue" value="$45,231.89" helpText="+20.1% from last month" />
);
