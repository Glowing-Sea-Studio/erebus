import React from 'react';
import '@erebus/core/stat.css';

export interface StatProps extends React.HTMLAttributes<HTMLDivElement> {
  label: React.ReactNode;
  value: React.ReactNode;
  helpText?: React.ReactNode;
}
export const Stat = React.forwardRef<HTMLDivElement, StatProps>((props, ref) => {
  const { label, value, helpText, className = '', ...rest } = props;
  return (
    <div ref={ref} className={`erb-stat ${className}`.trim()} {...rest}>
      <div className="erb-stat-label">{label}</div>
      <div className="erb-stat-value">{value}</div>
      {helpText && <div className="erb-stat-help-text">{helpText}</div>}
    </div>
  );
});
Stat.displayName = 'Stat';
