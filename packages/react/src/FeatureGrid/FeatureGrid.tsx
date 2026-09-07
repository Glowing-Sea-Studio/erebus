import React from 'react';

export interface FeatureProps {
  title: string;
  description: string;
}

export interface FeatureGridProps {
  className?: string;
  features: FeatureProps[];
}

export const FeatureGrid: React.FC<FeatureGridProps> = ({
  className = '',
  features,
  ...props
}) => {
  return (
    <div className={`erb-featuregrid ${className}`} {...props}>
      {features.map((feature, idx) => (
        <div key={idx} className="erb-featuregrid-item">
          <h3 className="erb-featuregrid-title">{feature.title}</h3>
          <p className="erb-featuregrid-description">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};
