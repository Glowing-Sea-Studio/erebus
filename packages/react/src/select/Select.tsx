import { forwardRef, SelectHTMLAttributes, useId } from 'react';
import { cn } from '../utils';

export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  size?: 'sm' | 'md' | 'lg';
  label?: string;
  error?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, size = 'md', label, error, id, disabled, children, ...props }, ref) => {
    const generatedId = useId();
    const selectId = id ?? generatedId;
    const errorId = `${selectId}-error`;
    
    return (
      <div className="erb-input-wrapper">
        {label && (
          <label htmlFor={selectId} className="erb-label">
            {label}
          </label>
        )}
        <select
          ref={ref}
          id={selectId}
          className={cn('erb-select', className)}
          data-size={size}
          disabled={disabled}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
          {...props}
        >
          {children}
        </select>
        {error && (
          <span id={errorId} className="erb-error-message">
            {error}
          </span>
        )}
      </div>
    );
  }
);
Select.displayName = 'Select';
