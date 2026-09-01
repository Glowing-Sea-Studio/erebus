import React from 'react';
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
