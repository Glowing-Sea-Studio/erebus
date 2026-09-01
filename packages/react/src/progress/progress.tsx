import React from 'react';
export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  max?: number;
}
export const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(({ value, max = 100, className = '', ...props }, ref) => {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));
  return (
    <div ref={ref} className={`erb-progress ${className}`} role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={max} {...props}>
      <div className="erb-progress__bar" style={{ width: `${percentage}%` }} />
    </div>
  );
});
Progress.displayName = 'Progress';
