import React from 'react';
import { Stepper } from './Stepper';

export default { title: 'Components/Stepper', component: Stepper };

export const Default = () => <Stepper currentStep={0} steps={['A']} />;
