import React from 'react';
import '@erebus/core/components/hero.css';

export interface HeroProps {
  className?: string;
  children?: React.ReactNode;
}

export const Hero: React.FC<HeroProps> = ({ className = '', children, ...props }) => {
  return (
    <div className={`erb-hero ${className}`} {...props}>
      {children}
    </div>
  );
};
