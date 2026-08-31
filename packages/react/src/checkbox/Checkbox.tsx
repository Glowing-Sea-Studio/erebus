import { forwardRef, InputHTMLAttributes, useId } from 'react';
import { cn } from '../utils';
import { useCheckboxGroup } from '../checkbox-group/CheckboxGroupContext';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  size?: 'sm' | 'md' | 'lg';
  label?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, size, label, id, disabled, name, ...props }, ref) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;
    const group = useCheckboxGroup();
    
    const finalSize = size ?? group.size ?? 'md';
    const finalDisabled = disabled ?? group.disabled;
    const finalName = name ?? group.name;
    
    return (
      <div className={cn('erb-checkbox-wrapper', className)}>
        <input
          ref={ref}
          type="checkbox"
          id={inputId}
          name={finalName}
          className="erb-checkbox"
          data-size={finalSize}
          disabled={finalDisabled}
          {...props}
        />
        {label && (
          <label htmlFor={inputId} className="erb-checkbox-label">
            {label}
          </label>
        )}
      </div>
    );
  }
);
Checkbox.displayName = 'Checkbox';
