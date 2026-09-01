import React from 'react';
import '@erebus/core/components/logocloud.css';

export interface LogoCloudProps {
  className?: string;
  children?: React.ReactNode;
}

export const LogoCloud: React.FC<LogoCloudProps> = ({ className = '', children, ...props }) => {
  return (
    <div className={`erb-logocloud ${className}`} {...props}>
      {children}
    </div>
  );
};
