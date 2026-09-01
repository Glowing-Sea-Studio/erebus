import React, { forwardRef, useState, useRef, useEffect, KeyboardEvent, useId } from 'react';
import { cn } from '../utils';

export interface MultiSelectOption {
  value: string;
  label: string;
}

export interface MultiSelectProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value' | 'type'> {
  options: MultiSelectOption[];
  value?: string[];
  onChange?: (value: string[]) => void;
  label?: string;
  error?: string;
}

export const MultiSelect = forwardRef<HTMLInputElement, MultiSelectProps>(
  ({ className, options, value = [], onChange, label, error, id, disabled, placeholder, ...props }, ref) => {
    const generatedId = useId();
    const selectId = id ?? generatedId;
    const errorId = `${selectId}-error`;
    const listboxId = `${selectId}-listbox`;

    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [activeIndex, setActiveIndex] = useState(-1);

    const wrapperRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const selectedOptions = options.filter(opt => value.includes(opt.value));
    const unselectedOptions = options.filter(opt => !value.includes(opt.value));
    const filteredOptions = unselectedOptions.filter(opt =>
      opt.label.toLowerCase().includes(inputValue.toLowerCase())
    );

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
          setIsOpen(false);
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleRemove = (valueToRemove: string, e?: React.MouseEvent) => {
      e?.stopPropagation();
      if (disabled) return;
      const newValue = value.filter(v => v !== valueToRemove);
      onChange?.(newValue);
    };

    const handleSelect = (selectedValue: string) => {
      if (disabled) return;
      const newValue = [...value, selectedValue];
      onChange?.(newValue);
      setInputValue('');
      setIsOpen(false);
      inputRef.current?.focus();
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
      if (disabled) return;
      
      if (e.key === 'Backspace' && inputValue === '' && value.length > 0) {
        handleRemove(value[value.length - 1]);
        return;
      }

      if (!isOpen) {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === 'Enter') {
          setIsOpen(true);
        }
        return;
      }

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setActiveIndex(prev => (prev < filteredOptions.length - 1 ? prev + 1 : prev));
          break;
        case 'ArrowUp':
          e.preventDefault();
          setActiveIndex(prev => (prev > 0 ? prev - 1 : 0));
          break;
        case 'Enter':
          e.preventDefault();
          if (activeIndex >= 0 && activeIndex < filteredOptions.length) {
            handleSelect(filteredOptions[activeIndex].value);
          }
          break;
        case 'Escape':
          setIsOpen(false);
          break;
      }
    };

    return (
      <div className="erb-multi-select-wrapper" ref={wrapperRef}>
        {label && (
          <label htmlFor={selectId} className="erb-label">
            {label}
          </label>
        )}
        <div 
          className={cn('erb-multi-select-trigger', className)}
          onClick={() => { if (!disabled) { setIsOpen(true); inputRef.current?.focus(); } }}
          aria-invalid={!!error}
          aria-disabled={disabled}
        >
          {selectedOptions.map(opt => (
            <span key={opt.value} className="erb-multi-select-tag">
              {opt.label}
              <button
                type="button"
                className="erb-multi-select-tag-remove"
                onClick={(e) => handleRemove(opt.value, e)}
                disabled={disabled}
                aria-label={`Remove ${opt.label}`}
              >
                &times;
              </button>
            </span>
          ))}
          <input
            ref={(node) => {
              inputRef.current = node;
              if (typeof ref === 'function') ref(node);
              else if (ref) ref.current = node;
            }}
            id={selectId}
            type="text"
            className="erb-multi-select-input"
            role="combobox"
            aria-expanded={isOpen}
            aria-controls={listboxId}
            aria-activedescendant={
              isOpen && activeIndex >= 0 ? `${listboxId}-option-${activeIndex}` : undefined
            }
            aria-describedby={error ? errorId : undefined}
            value={inputValue}
            onChange={(e) => { setInputValue(e.target.value); setIsOpen(true); setActiveIndex(-1); }}
            onKeyDown={handleKeyDown}
            disabled={disabled}
            placeholder={value.length === 0 ? placeholder : ''}
            {...props}
          />
        </div>
        <ul
          id={listboxId}
          className="erb-multi-select-listbox"
          data-open={isOpen && filteredOptions.length > 0}
          role="listbox"
          aria-multiselectable="true"
        >
          {filteredOptions.map((opt, index) => (
            <li
              key={opt.value}
              id={`${listboxId}-option-${index}`}
              className="erb-multi-select-option"
              role="option"
              aria-selected="false"
              onClick={() => handleSelect(opt.value)}
              onMouseEnter={() => setActiveIndex(index)}
              data-focused={activeIndex === index}
            >
              {opt.label}
            </li>
          ))}
        </ul>
        {error && (
          <span id={errorId} className="erb-error-message">
            {error}
          </span>
        )}
      </div>
    );
  }
);

MultiSelect.displayName = 'MultiSelect';
