import React, { forwardRef } from 'react';
import { clsx } from 'clsx';
import { Label } from '../label';

export interface FieldProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  hint?: string;
  error?: string;
  horizontal?: boolean;
  required?: boolean;
  disabled?: boolean;
}

export const Field = forwardRef<HTMLDivElement, FieldProps>(
  ({ children, className, label, hint, error, horizontal, required, disabled, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx(
          'erb-field',
          {
            'erb-field--horizontal': horizontal,
          },
          className
        )}
        {...props}
      >
        {label && (
          <Label required={required} disabled={disabled}>
            {label}
          </Label>
        )}
        <div className="erb-field__content">
          {children}
          {error ? (
            <div className="erb-field__error">{error}</div>
          ) : hint ? (
            <div className="erb-field__hint">{hint}</div>
          ) : null}
        </div>
      </div>
    );
  }
);

Field.displayName = 'Field';
