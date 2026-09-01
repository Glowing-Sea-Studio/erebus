import React, { useRef, useState, useEffect, useCallback } from 'react';

export interface SliderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  defaultValue?: number;
  onChange?: (value: number) => void;
  disabled?: boolean;
}

export const Slider = React.forwardRef<HTMLDivElement, SliderProps>(
  ({ min = 0, max = 100, step = 1, value, defaultValue, onChange, disabled = false, className = '', ...props }, ref) => {
    const [internalValue, setInternalValue] = useState<number>(defaultValue ?? min);
    const containerRef = useRef<HTMLDivElement>(null);
    const isControlled = value !== undefined;
    const currentValue = isControlled ? value : internalValue;

    const clamp = (val: number) => Math.min(Math.max(val, min), max);

    const updateValue = useCallback((newValue: number) => {
      const clampedValue = clamp(newValue);
      const steppedValue = Math.round((clampedValue - min) / step) * step + min;
      const finalValue = clamp(steppedValue);
      
      if (!isControlled) {
        setInternalValue(finalValue);
      }
      if (onChange && currentValue !== finalValue) {
        onChange(finalValue);
      }
    }, [min, max, step, isControlled, currentValue, onChange]);

    const handlePointerDown = (e: React.PointerEvent) => {
      if (disabled || !containerRef.current) return;
      e.currentTarget.setPointerCapture(e.pointerId);
      
      const rect = containerRef.current.getBoundingClientRect();
      const percent = (e.clientX - rect.left) / rect.width;
      updateValue(min + percent * (max - min));
    };

    const handlePointerMove = (e: React.PointerEvent) => {
      if (disabled || !containerRef.current || !e.currentTarget.hasPointerCapture(e.pointerId)) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const percent = (e.clientX - rect.left) / rect.width;
      updateValue(min + percent * (max - min));
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (disabled) return;
      let newValue = currentValue;
      
      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowUp':
          newValue += step;
          break;
        case 'ArrowLeft':
        case 'ArrowDown':
          newValue -= step;
          break;
        case 'Home':
          newValue = min;
          break;
        case 'End':
          newValue = max;
          break;
        default:
          return;
      }
      
      e.preventDefault();
      updateValue(newValue);
    };

    const percentage = ((currentValue - min) / (max - min)) * 100;

    return (
      <div
        ref={(node) => {
          containerRef.current = node;
          if (typeof ref === 'function') ref(node);
          else if (ref) ref.current = node;
        }}
        className={`erb-slider-container ${disabled ? 'erb-slider-container--disabled' : ''} ${className}`}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={(e) => e.currentTarget.releasePointerCapture(e.pointerId)}
        {...props}
      >
        <div className="erb-slider-track" />
        <div className="erb-slider-fill" style={{ width: `${percentage}%`, left: 0 }} />
        <div
          className="erb-slider-thumb"
          style={{ left: `${percentage}%` }}
          role="slider"
          tabIndex={disabled ? -1 : 0}
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={currentValue}
          aria-disabled={disabled}
          onKeyDown={handleKeyDown}
        />
      </div>
    );
  }
);
Slider.displayName = 'Slider';
