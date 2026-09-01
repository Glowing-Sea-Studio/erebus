import React, { forwardRef, useState, useRef, useEffect, KeyboardEvent, useId } from 'react';
import { cn } from '../utils';

export interface ComboboxOption {
  value: string;
  label: string;
}

export interface ComboboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'> {
  options: ComboboxOption[];
  value?: string;
  onChange?: (value: string) => void;
  label?: string;
  error?: string;
}

export const Combobox = forwardRef<HTMLInputElement, ComboboxProps>(
  ({ className, options, value = '', onChange, label, error, id, disabled, placeholder, ...props }, ref) => {
    const generatedId = useId();
    const comboboxId = id ?? generatedId;
    const errorId = `${comboboxId}-error`;
    const listboxId = `${comboboxId}-listbox`;

    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [activeIndex, setActiveIndex] = useState(-1);

    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const inputRef = useRef<HTMLInputElement | null>(null);

    // Sync input value with selected prop value if options change or value changes externally
    useEffect(() => {
      const selectedOption = options.find((opt) => opt.value === value);
      setInputValue(selectedOption ? selectedOption.label : '');
    }, [value, options]);

    const filteredOptions = options.filter(opt =>
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

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
      setIsOpen(true);
      setActiveIndex(-1);
    };

    const handleSelect = (selectedValue: string) => {
      const selectedOption = options.find(opt => opt.value === selectedValue);
      if (selectedOption) {
        setInputValue(selectedOption.label);
        onChange?.(selectedValue);
      }
      setIsOpen(false);
      inputRef.current?.focus();
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
      if (!isOpen || !options) {
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
            handleSelect(filteredOptions[activeIndex]!.value);
          }
          break;
        case 'Escape':
          setIsOpen(false);
          break;
      }
    };

    return (
      <div className="erb-combobox-wrapper" ref={wrapperRef}>
        {label && (
          <label htmlFor={comboboxId} className="erb-label">
            {label}
          </label>
        )}
        <div className="erb-combobox">
          <input
            ref={(node) => {
              inputRef.current = node;
              if (typeof ref === 'function') ref(node);
              else if (ref) (ref as any).current = node;
            }}
            id={comboboxId}
            type="text"
            role="combobox"
            aria-expanded={isOpen}
            aria-controls={listboxId}
            aria-activedescendant={
              isOpen && activeIndex >= 0 ? `${listboxId}-option-${activeIndex}` : undefined
            }
            aria-invalid={!!error}
            aria-describedby={error ? errorId : undefined}
            className={cn('erb-combobox-input', className)}
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            onFocus={() => setIsOpen(true)}
            disabled={disabled}
            placeholder={placeholder}
            {...props}
          />
        </div>
        <ul
          id={listboxId}
          className="erb-combobox-listbox"
          data-open={isOpen && filteredOptions.length > 0}
          role="listbox"
        >
          {filteredOptions.map((opt, index) => (
            <li
              key={opt.value}
              id={`${listboxId}-option-${index}`}
              className="erb-combobox-option"
              role="option"
              aria-selected={opt.value === value}
              onClick={() => handleSelect(opt.value)}
              onMouseEnter={() => setActiveIndex(index)}
              style={activeIndex === index ? { backgroundColor: 'var(--erb-color-bg-subtle)' } : {}}
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

Combobox.displayName = 'Combobox';
