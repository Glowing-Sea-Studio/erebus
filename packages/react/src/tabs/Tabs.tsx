'use client';

import { forwardRef, HTMLAttributes, createContext, useContext, useState } from 'react';
import { cn } from '../utils';

interface TabsContextValue {
  value: string;
  onValueChange: (value: string) => void;
}
const TabsContext = createContext<TabsContextValue | undefined>(undefined);

export function useTabs() {
  const context = useContext(TabsContext);
  if (!context) throw new Error('useTabs must be used within Tabs');
  return context;
}

export interface TabsProps extends Omit<HTMLAttributes<HTMLDivElement>, 'defaultValue'> {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
}

export const Tabs = forwardRef<HTMLDivElement, TabsProps>(
  ({ className, value: controlledValue, defaultValue, onValueChange, children, ...props }, ref) => {
    const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue || '');
    const value = controlledValue !== undefined ? controlledValue : uncontrolledValue;

    const handleValueChange = (newValue: string) => {
      setUncontrolledValue(newValue);
      onValueChange?.(newValue);
    };

    return (
      <TabsContext.Provider value={{ value, onValueChange: handleValueChange }}>
        <div ref={ref} className={cn('erb-tabs', className)} {...props}>
          {children}
        </div>
      </TabsContext.Provider>
    );
  }
);
Tabs.displayName = 'Tabs';

export const TabsList = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} role="tablist" className={cn('erb-tabs-list', className)} {...props} />
  )
);
TabsList.displayName = 'TabsList';

export interface TabProps extends HTMLAttributes<HTMLButtonElement> {
  value: string;
}

export const Tab = forwardRef<HTMLButtonElement, TabProps>(
  ({ className, value, ...props }, ref) => {
    const { value: selectedValue, onValueChange } = useTabs();
    const isActive = selectedValue === value;
    const state = isActive ? 'active' : 'inactive';

    return (
      <button
        ref={ref}
        role="tab"
        aria-selected={isActive}
        data-state={state}
        className={cn('erb-tab', className)}
        onClick={() => onValueChange(value)}
        {...props}
      />
    );
  }
);
Tab.displayName = 'Tab';

export interface TabsPanelProps extends HTMLAttributes<HTMLDivElement> {
  value: string;
}

export const TabsPanel = forwardRef<HTMLDivElement, TabsPanelProps>(
  ({ className, value, ...props }, ref) => {
    const { value: selectedValue } = useTabs();
    const isActive = selectedValue === value;
    const state = isActive ? 'active' : 'inactive';

    if (!isActive) return null;

    return (
      <div
        ref={ref}
        role="tabpanel"
        data-state={state}
        className={cn('erb-tabs-panel', className)}
        {...props}
      />
    );
  }
);
TabsPanel.displayName = 'TabsPanel';
