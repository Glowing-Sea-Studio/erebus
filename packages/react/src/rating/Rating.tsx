import { useState, KeyboardEvent, forwardRef, Ref } from 'react';

export interface RatingProps {
  max?: number;
  value?: number;
  onChange?: (value: number) => void;
  disabled?: boolean;
}

export const Rating = forwardRef((
  { max = 5, value = 0, onChange, disabled = false }: RatingProps,
  ref: Ref<HTMLDivElement>
) => {
  const [hoverValue, setHoverValue] = useState<number | null>(null);

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (disabled) return;
    
    let newValue = value;
    if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
      newValue = Math.min(value + 1, max);
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
      newValue = Math.max(value - 1, 1);
    }

    if (newValue !== value) {
      e.preventDefault();
      onChange?.(newValue);
    }
  };

  return (
    <div
      ref={ref}
      className="erb-rating"
      role="slider"
      aria-valuemin={1}
      aria-valuemax={max}
      aria-valuenow={value}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      onKeyDown={handleKeyDown}
      onMouseLeave={() => setHoverValue(null)}
    >
      {Array.from({ length: max }).map((_, index) => {
        const starValue = index + 1;
        const isActive = starValue <= (hoverValue ?? value);
        
        return (
          <span
            key={starValue}
            className={`erb-rating__item ${isActive ? 'erb-rating__item--active' : ''}`}
            onClick={() => !disabled && onChange?.(starValue)}
            onMouseEnter={() => !disabled && setHoverValue(starValue)}
            aria-hidden="true"
          >
            ★
          </span>
        );
      })}
    </div>
  );
});

Rating.displayName = 'Rating';
