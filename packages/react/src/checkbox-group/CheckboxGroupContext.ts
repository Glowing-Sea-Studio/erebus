'use client';

import { createContext, useContext } from 'react';

export interface CheckboxGroupContextValue {
  name?: string | undefined;
  size?: 'sm' | 'md' | 'lg' | undefined;
  disabled?: boolean | undefined;
}

export const CheckboxGroupContext = createContext<CheckboxGroupContextValue>({});
export const useCheckboxGroup = () => useContext(CheckboxGroupContext);
