'use client';

import { forwardRef, FieldsetHTMLAttributes, ReactNode } from 'react';
import { cn } from '../utils';
import { Stack } from '../stack';
import { Inline } from '../inline';
import { CheckboxGroupContext } from './CheckboxGroupContext';

export interface CheckboxGroupProps extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
  legend?: ReactNode;
  orientation?: 'vertical' | 'horizontal';
  size?: 'sm' | 'md' | 'lg';
  name?: string;
}

export const CheckboxGroup = forwardRef<HTMLFieldSetElement, CheckboxGroupProps>(
  ({ className, legend, children, orientation = 'vertical', size, name, disabled, ...props }, ref) => {
    const Wrapper = orientation === 'horizontal' ? Inline : Stack;

    return (
      <fieldset
        ref={ref}
        className={cn('erb-checkbox-group', className)}
        disabled={disabled}
        {...props}
      >
        {legend && <legend className="erb-checkbox-group-legend">{legend}</legend>}
        <CheckboxGroupContext.Provider value={{ name, size, disabled }}>
          <Wrapper>
            {children}
          </Wrapper>
        </CheckboxGroupContext.Provider>
      </fieldset>
    );
  }
);
CheckboxGroup.displayName = 'CheckboxGroup';
