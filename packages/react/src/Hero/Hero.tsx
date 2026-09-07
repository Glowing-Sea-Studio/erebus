import React from 'react';
import { Button } from '../button';

interface ActionProps {
  label: string;
  onClick: () => void;
}

export interface HeroProps {
  className?: string;
  title: string;
  subtitle?: string;
  primaryAction?: ActionProps;
  secondaryAction?: ActionProps;
}

export const Hero: React.FC<HeroProps> = ({
  className = '',
  title,
  subtitle,
  primaryAction,
  secondaryAction,
  ...props
}) => {
  return (
    <div className={`erb-hero ${className}`} {...props}>
      <h1 className="erb-hero-title">{title}</h1>
      {subtitle && <p className="erb-hero-subtitle">{subtitle}</p>}
      {(primaryAction || secondaryAction) && (
        <div className="erb-hero-actions">
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
