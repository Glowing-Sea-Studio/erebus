import { forwardRef, InputHTMLAttributes, useId } from 'react';
import { cn } from '../utils';

export interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  size?: 'sm' | 'md' | 'lg';
  label?: string;
}

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, size = 'md', label, id, disabled, ...props }, ref) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;
    
    return (
      <div className={cn('erb-switch-wrapper', className)}>
        <input
          ref={ref}
          type="checkbox"
          role="switch"
          id={inputId}
          className="erb-switch"
          data-size={size}
          disabled={disabled}
          {...props}
        />
        {label && (
          <label htmlFor={inputId} className="erb-switch-label">
            {label}
          </label>
        )}
      </div>
    );
  }
);
Switch.displayName = 'Switch';
