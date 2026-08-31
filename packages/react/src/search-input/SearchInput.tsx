'use client';

import { forwardRef, InputHTMLAttributes, useId, useRef, MouseEvent, useState, ChangeEvent } from 'react';
import { cn } from '../utils';

export interface SearchInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  size?: 'sm' | 'md' | 'lg';
  label?: string;
  error?: string;
  onClear?: () => void;
}

const SearchIcon = () => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const XIcon = () => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  ({ className, size = 'md', label, error, id, disabled, onClear, onChange, ...props }, ref) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;
    const errorId = `${inputId}-error`;
    
    const internalRef = useRef<HTMLInputElement | null>(null);
    const [hasValue, setHasValue] = useState(
      Boolean(props.value || props.defaultValue)
    );
    
    const setRefs = (node: HTMLInputElement) => {
      internalRef.current = node;
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setHasValue(Boolean(e.target.value));
      if (onChange) {
        onChange(e);
      }
    };

    const handleClear = (e: MouseEvent) => {
      e.preventDefault();
      if (!disabled && internalRef.current) {
        internalRef.current.value = '';
        internalRef.current.dispatchEvent(new Event('input', { bubbles: true }));
        internalRef.current.dispatchEvent(new Event('change', { bubbles: true }));
        internalRef.current.focus();
        setHasValue(false);
        if (onClear) {
          onClear();
        }
      }
    };
    
    return (
      <div className="erb-input-wrapper">
        {label && (
          <label htmlFor={inputId} className="erb-label">
            {label}
          </label>
        )}
        <div className="erb-search-input-wrapper">
          <div className="erb-search-input-icon">
            <SearchIcon />
          </div>
          <input
            ref={setRefs}
            type="search"
            id={inputId}
            className={cn('erb-search-input', className)}
            data-size={size}
            disabled={disabled}
            aria-invalid={!!error}
            aria-describedby={error ? errorId : undefined}
            onChange={handleChange}
            {...props}
          />
          {hasValue && (
            <button
              type="button"
              className="erb-search-input-clear-btn"
              onClick={handleClear}
              disabled={disabled}
              tabIndex={-1}
              aria-label="Clear search"
            >
              <XIcon />
            </button>
          )}
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
SearchInput.displayName = 'SearchInput';
