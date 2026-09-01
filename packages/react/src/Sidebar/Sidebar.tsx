
import React from 'react';
import '@erebus/core/sidebar.css';

export interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const Sidebar: React.FC<SidebarProps> = ({ children, className = '', ...props }) => (
  <div className={`erb-sidebar ${className}`} {...props}>
    {children}
  </div>
);
