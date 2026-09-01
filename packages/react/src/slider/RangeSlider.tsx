import React, { useRef, useState, useCallback } from 'react';

export interface RangeSliderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  min?: number;
  max?: number;
  step?: number;
  value?: [number, number];
  defaultValue?: [number, number];
  onChange?: (value: [number, number]) => void;
  disabled?: boolean;
}

export const RangeSlider = React.forwardRef<HTMLDivElement, RangeSliderProps>(
  ({ min = 0, max = 100, step = 1, value, defaultValue, onChange, disabled = false, className = '', ...props }, ref) => {
    const [internalValue, setInternalValue] = useState<[number, number]>(defaultValue ?? [min, max]);
    const containerRef = useRef<HTMLDivElement>(null);
    const isControlled = value !== undefined;
    const currentValue = isControlled ? value : internalValue;
    
    const [activeThumb, setActiveThumb] = useState<0 | 1 | null>(null);

    const clamp = (val: number) => Math.min(Math.max(val, min), max);

    const updateValue = useCallback((index: 0 | 1, newValue: number) => {
      const clampedValue = clamp(newValue);
      const steppedValue = Math.round((clampedValue - min) / step) * step + min;
      let finalValue = clamp(steppedValue);
      
      const newValues: [number, number] = [...currentValue];
      newValues[index] = finalValue;
      
      // Ensure min <= max
      if (index === 0 && newValues[0] > newValues[1]) {
        newValues[0] = newValues[1];
      } else if (index === 1 && newValues[1] < newValues[0]) {
        newValues[1] = newValues[0];
      }

      if (!isControlled) {
        setInternalValue(newValues);
      }
      if (onChange && (currentValue[0] !== newValues[0] || currentValue[1] !== newValues[1])) {
        onChange(newValues);
      }
    }, [min, max, step, isControlled, currentValue, onChange]);

    const getClosestThumb = (val: number) => {
      const d0 = Math.abs(currentValue[0] - val);
      const d1 = Math.abs(currentValue[1] - val);
      return d0 < d1 ? 0 : 1;
    };

    const handlePointerDown = (e: React.PointerEvent) => {
      if (disabled || !containerRef.current) return;
      e.currentTarget.setPointerCapture(e.pointerId);
      
      const rect = containerRef.current.getBoundingClientRect();
      const percent = (e.clientX - rect.left) / rect.width;
      const val = min + percent * (max - min);
      
      const thumb = getClosestThumb(val);
      setActiveThumb(thumb);
      updateValue(thumb, val);
    };

    const handlePointerMove = (e: React.PointerEvent) => {
      if (disabled || !containerRef.current || !e.currentTarget.hasPointerCapture(e.pointerId) || activeThumb === null) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const percent = (e.clientX - rect.left) / rect.width;
      const val = min + percent * (max - min);
      
      updateValue(activeThumb, val);
    };

    const handleKeyDown = (index: 0 | 1) => (e: React.KeyboardEvent) => {
      if (disabled) return;
      let val = currentValue[index];
      
      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowUp':
          val += step;
          break;
        case 'ArrowLeft':
        case 'ArrowDown':
          val -= step;
          break;
        case 'Home':
          val = index === 0 ? min : currentValue[0];
          break;
        case 'End':
          val = index === 1 ? max : currentValue[1];
          break;
        default:
          return;
      }
      
      e.preventDefault();
      updateValue(index, val);
    };

    const p0 = ((currentValue[0] - min) / (max - min)) * 100;
    const p1 = ((currentValue[1] - min) / (max - min)) * 100;

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
        onPointerUp={(e) => {
          e.currentTarget.releasePointerCapture(e.pointerId);
          setActiveThumb(null);
        }}
        {...props}
      >
        <div className="erb-slider-track" />
        <div className="erb-slider-fill" style={{ left: `${p0}%`, width: `${p1 - p0}%` }} />
        <div
          className="erb-slider-thumb"
          style={{ left: `${p0}%` }}
          role="slider"
          tabIndex={disabled ? -1 : 0}
          aria-valuemin={min}
          aria-valuemax={currentValue[1]}
          aria-valuenow={currentValue[0]}
          aria-disabled={disabled}
          onKeyDown={handleKeyDown(0)}
        />
        <div
          className="erb-slider-thumb"
          style={{ left: `${p1}%` }}
          role="slider"
          tabIndex={disabled ? -1 : 0}
          aria-valuemin={currentValue[0]}
          aria-valuemax={max}
          aria-valuenow={currentValue[1]}
          aria-disabled={disabled}
          onKeyDown={handleKeyDown(1)}
        />
      </div>
    );
  }
);
RangeSlider.displayName = 'RangeSlider';
