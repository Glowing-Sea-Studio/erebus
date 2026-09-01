import React from 'react';

export interface DatePickerProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: 'sm' | 'md' | 'lg';
}

export const DatePicker = React.forwardRef<HTMLInputElement, DatePickerProps>(
  ({ className = '', size = 'md', ...props }, ref) => {
    return (
      <input
        ref={ref}
        type="date"
        className={`erb-datepicker ${className}`}
        data-size={size}
        {...props}
      />
    );
  }
);

DatePicker.displayName = 'DatePicker';
