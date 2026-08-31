'use client';

import { forwardRef, FieldsetHTMLAttributes, ReactNode } from 'react';
import { cn } from '../utils';
import { Stack } from '../stack';
import { Inline } from '../inline';
import { RadioGroupContext } from './RadioGroupContext';

export interface RadioGroupProps extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
  legend?: ReactNode;
  orientation?: 'vertical' | 'horizontal';
  size?: 'sm' | 'md' | 'lg';
  name?: string;
}

export const RadioGroup = forwardRef<HTMLFieldSetElement, RadioGroupProps>(
  ({ className, legend, children, orientation = 'vertical', size, name, disabled, ...props }, ref) => {
    const Wrapper = orientation === 'horizontal' ? Inline : Stack;

    return (
      <fieldset
        ref={ref}
        className={cn('erb-radio-group', className)}
        disabled={disabled}
        {...props}
      >
        {legend && <legend className="erb-radio-group-legend">{legend}</legend>}
        <RadioGroupContext.Provider value={{ name, size, disabled }}>
          <Wrapper>
            {children}
          </Wrapper>
        </RadioGroupContext.Provider>
      </fieldset>
    );
  }
);
RadioGroup.displayName = 'RadioGroup';
