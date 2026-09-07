import React from 'react';
import { Button } from '../button';

interface ActionProps {
  label: string;
  onClick: () => void;
}

export interface EmptyStateProps {
  className?: string;
  title: string;
  description?: string;
  action?: ActionProps;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  className = '',
  title,
  description,
  action,
  ...props
}) => {
  return (
    <div className={`erb-empty-state ${className}`} {...props}>
      <h3 className="erb-empty-state-title">{title}</h3>
      {description && <p className="erb-empty-state-description">{description}</p>}
      {action && (
        <div className="erb-empty-state-action">
          <Button variant="solid" color="primary" onClick={action.onClick}>
            {action.label}
          </Button>
        </div>
      )}
    </div>
  );
};
