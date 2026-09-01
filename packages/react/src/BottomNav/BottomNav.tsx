
import React from 'react';
import '@erebus/core/bottom-nav.css';

export interface BottomNavProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const BottomNav: React.FC<BottomNavProps> = ({ children, className = '', ...props }) => (
  <div className={`erb-bottom-nav ${className}`} {...props}>
    {children}
  </div>
);
