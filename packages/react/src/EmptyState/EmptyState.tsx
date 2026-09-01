import React from 'react';
export interface EmptyStateProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({ title, description, icon, children, className = '' }) => (
  <div className={`erb-empty-state ${className}`}>
    {icon && <div className="erb-empty-state-icon">{icon}</div>}
    <div className="erb-empty-state-title">{title}</div>
    {description && <div className="erb-empty-state-description">{description}</div>}
    {children && <div className="erb-empty-state-actions">{children}</div>}
  </div>
);