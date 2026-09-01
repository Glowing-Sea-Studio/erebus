
import React from 'react';
import '@erebus/core/mobile-nav.css';

export interface MobileNavProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const MobileNav: React.FC<MobileNavProps> = ({ children, className = '', ...props }) => (
  <div className={`erb-mobile-nav ${className}`} {...props}>
    {children}
  </div>
);
