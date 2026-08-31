'use client';

import { forwardRef, InputHTMLAttributes, useId, useRef, MouseEvent } from 'react';
import { cn } from '../utils';

export interface NumberInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  size?: 'sm' | 'md' | 'lg';
  label?: string;
  error?: string;
}

const ChevronUp = () => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="18 15 12 9 6 15"></polyline>
  </svg>
);

const ChevronDown = () => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

export const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(
  ({ className, size = 'md', label, error, id, disabled, ...props }, ref) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;
    const errorId = `${inputId}-error`;
    
    const internalRef = useRef<HTMLInputElement | null>(null);
    
    const setRefs = (node: HTMLInputElement) => {
      internalRef.current = node;
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    };

    const handleStepUp = (e: MouseEvent) => {
      e.preventDefault();
      if (!disabled && internalRef.current) {
        internalRef.current.stepUp();
        internalRef.current.dispatchEvent(new Event('change', { bubbles: true }));
      }
    };

    const handleStepDown = (e: MouseEvent) => {
      e.preventDefault();
      if (!disabled && internalRef.current) {
        internalRef.current.stepDown();
        internalRef.current.dispatchEvent(new Event('change', { bubbles: true }));
      }
    };
    
    return (
      <div className="erb-input-wrapper">
        {label && (
          <label htmlFor={inputId} className="erb-label">
            {label}
          </label>
        )}
        <div className="erb-number-input-wrapper">
          <input
            ref={setRefs}
            type="number"
            id={inputId}
            className={cn('erb-number-input', className)}
            data-size={size}
            disabled={disabled}
            aria-invalid={!!error}
            aria-describedby={error ? errorId : undefined}
            {...props}
          />
          <div className="erb-number-input-stepper">
            <button
              type="button"
              className="erb-number-input-stepper-btn"
              onClick={handleStepUp}
              disabled={disabled}
              tabIndex={-1}
              aria-hidden="true"
            >
              <ChevronUp />
            </button>
            <button
              type="button"
              className="erb-number-input-stepper-btn"
              onClick={handleStepDown}
              disabled={disabled}
              tabIndex={-1}
              aria-hidden="true"
            >
              <ChevronDown />
            </button>
          </div>
        </div>
        {error && (
          <span id={errorId} className="erb-error-message">
            {error}
          </span>
        )}
      </div>
    );
  }
);
NumberInput.displayName = 'NumberInput';
