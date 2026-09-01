import React, { forwardRef } from 'react';
import { clsx } from 'clsx';

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  disabled?: boolean;
  required?: boolean;
}

export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ children, className, disabled, required, ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={clsx(
          'erb-label',
          {
            'erb-label--disabled': disabled,
            'erb-label--required': required,
          },
          className
        )}
        {...props}
      >
        {children}
      </label>
    );
  }
);

Label.displayName = 'Label';
