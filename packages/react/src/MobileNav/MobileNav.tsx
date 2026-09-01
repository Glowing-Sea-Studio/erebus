import React from 'react';

export interface MobileNavProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const MobileNav: React.FC<MobileNavProps> = ({ children, className = '', ...props }) => (
  <div className={`erb-mobile-nav ${className}`} {...props}>
    {children}
  </div>
);
