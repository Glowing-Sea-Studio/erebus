import React from 'react';
export interface TimePickerProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: 'sm' | 'md' | 'lg';
}

export const TimePicker = React.forwardRef<HTMLInputElement, TimePickerProps>(
  ({ className = '', size = 'md', ...props }, ref) => {
    return (
      <input
        ref={ref}
        type="time"
        className={`erb-timepicker ${className}`}
        data-size={size}
        {...props}
      />
    );
  }
);

TimePicker.displayName = 'TimePicker';
