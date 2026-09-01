import React from 'react';

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number | string;
}

export const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
  ({ size, className = '', style, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`erb-spinner ${className}`.trim()}
        style={{
          ...style,
          '--erb-spinner-size': typeof size === 'number' ? `${size}px` : size,
        } as React.CSSProperties}
        {...props}
      />
    );
  }
);
Spinner.displayName = 'Spinner';
