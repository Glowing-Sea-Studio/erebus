'use client';

import { createContext, useContext } from 'react';

export interface RadioGroupContextValue {
  name?: string | undefined;
  size?: 'sm' | 'md' | 'lg' | undefined;
  disabled?: boolean | undefined;
}

export const RadioGroupContext = createContext<RadioGroupContextValue>({});
export const useRadioGroup = () => useContext(RadioGroupContext);
