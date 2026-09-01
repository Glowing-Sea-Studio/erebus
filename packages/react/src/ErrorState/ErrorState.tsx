import React from 'react';

export interface ErrorStateProps {
  title: string;
  description?: string;
  className?: string;
  onRetry?: () => void;
}

export const ErrorState: React.FC<ErrorStateProps> = ({ title, description, className = '', onRetry }) => (
  <div className={`erb-error-state ${className}`}>
    <div className="erb-error-state-title">{title}</div>
    {description && <div className="erb-error-state-description">{description}</div>}
    {onRetry && (
      <button className="erb-error-state-retry" onClick={onRetry}>
        Retry
      </button>
    )}
  </div>
);