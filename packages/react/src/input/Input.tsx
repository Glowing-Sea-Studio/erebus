import { forwardRef, InputHTMLAttributes, useId } from 'react';
import { cn } from '../utils';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: 'sm' | 'md' | 'lg';
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, size = 'md', label, error, id, disabled, ...props }, ref) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;
    const errorId = `${inputId}-error`;
    
    return (
      <div className="erb-input-wrapper">
        {label && (
          <label htmlFor={inputId} className="erb-label">
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn('erb-input', className)}
          data-size={size}
          disabled={disabled}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
          {...props}
        />
        {error && (
          <span id={errorId} className="erb-error-message">
            {error}
          </span>
        )}
      </div>
    );
  }
);
Input.displayName = 'Input';
