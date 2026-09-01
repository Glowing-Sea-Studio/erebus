import React from 'react';
export interface DateRangePickerProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  size?: 'sm' | 'md' | 'lg';
  startDate?: string;
  endDate?: string;
  onStartDateChange?: (date: string) => void;
  onEndDateChange?: (date: string) => void;
}

export const DateRangePicker = React.forwardRef<HTMLDivElement, DateRangePickerProps>(
  ({ className = '', size = 'md', startDate, endDate, onStartDateChange, onEndDateChange, ...props }, ref) => {
    return (
      <div ref={ref} className={`erb-daterangepicker ${className}`} data-size={size} {...props}>
        <input 
          type="date" 
          className="erb-daterangepicker-start" 
          value={startDate || ''} 
          onChange={(e) => onStartDateChange?.(e.target.value)} 
        />
        <span className="erb-daterangepicker-separator">-</span>
        <input 
          type="date" 
          className="erb-daterangepicker-end" 
          value={endDate || ''} 
          onChange={(e) => onEndDateChange?.(e.target.value)} 
        />
      </div>
    );
  }
);

DateRangePicker.displayName = 'DateRangePicker';
