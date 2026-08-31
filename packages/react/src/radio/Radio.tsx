import { forwardRef, InputHTMLAttributes, useId } from 'react';
import { cn } from '../utils';

import { useRadioGroup } from '../radio-group/RadioGroupContext';

export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  size?: 'sm' | 'md' | 'lg';
  label?: string;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ className, size, label, id, disabled, name, ...props }, ref) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;
    const group = useRadioGroup();
    
    const finalSize = size ?? group.size ?? 'md';
    const finalDisabled = disabled ?? group.disabled;
    const finalName = name ?? group.name;
    
    return (
      <div className={cn('erb-radio-wrapper', className)}>
        <input
          ref={ref}
          type="radio"
          id={inputId}
          name={finalName}
          className="erb-radio"
          data-size={finalSize}
          disabled={finalDisabled}
          {...props}
        />
        {label && (
          <label htmlFor={inputId} className="erb-radio-label">
            {label}
          </label>
        )}
      </div>
    );
  }
);
Radio.displayName = 'Radio';
