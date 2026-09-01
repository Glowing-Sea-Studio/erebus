import React from 'react';
export interface CTAProps {
  className?: string;
  children?: React.ReactNode;
}

export const CTA: React.FC<CTAProps> = ({ className = '', children, ...props }) => {
  return (
    <div className={`erb-cta ${className}`} {...props}>
      {children}
    </div>
  );
};
