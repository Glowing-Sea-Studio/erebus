import React from 'react';
import { Button } from '../button';

interface ActionProps {
  label: string;
  onClick: () => void;
}

export interface CTAProps {
  className?: string;
  title: string;
  description?: string;
  primaryAction?: ActionProps;
  secondaryAction?: ActionProps;
}

export const CTA: React.FC<CTAProps> = ({
  className = '',
  title,
  description,
  primaryAction,
  secondaryAction,
  ...props
}) => {
  return (
    <div className={`erb-cta ${className}`} {...props}>
      <h2 className="erb-cta-title">{title}</h2>
      {description && <p className="erb-cta-description">{description}</p>}
      {(primaryAction || secondaryAction) && (
        <div className="erb-cta-actions">
          {primaryAction && (
            <Button variant="solid" color="primary" onClick={primaryAction.onClick}>
              {primaryAction.label}
            </Button>
          )}
          {secondaryAction && (
            <Button variant="outline" onClick={secondaryAction.onClick}>
              {secondaryAction.label}
            </Button>
          )}
        </div>
      )}
    </div>
  );
};
