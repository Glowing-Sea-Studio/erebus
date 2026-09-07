import React from 'react';

export interface StatProps {
  className?: string;
  label: string;
  value: string | number;
  helpText?: string;
}

export const Stat: React.FC<StatProps> = ({
  className = '',
  label,
  value,
  helpText,
  ...props
}) => {
  return (
    <div className={`erb-stat ${className}`} {...props}>
      <p className="erb-stat-label">{label}</p>
      <p className="erb-stat-value">{value}</p>
      {helpText && <p className="erb-stat-help-text">{helpText}</p>}
    </div>
  );
};
