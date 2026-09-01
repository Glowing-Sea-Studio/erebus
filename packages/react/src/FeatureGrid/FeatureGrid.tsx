import React from 'react';
export interface FeatureGridProps {
  className?: string;
  children?: React.ReactNode;
}

export const FeatureGrid: React.FC<FeatureGridProps> = ({ className = '', children, ...props }) => {
  return (
    <div className={`erb-featuregrid ${className}`} {...props}>
      {children}
    </div>
  );
};
