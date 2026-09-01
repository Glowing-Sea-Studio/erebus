import React from 'react';

export interface AppShellProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const AppShell: React.FC<AppShellProps> = ({ children, className = '', ...props }) => (
  <div className={`erb-app-shell ${className}`} {...props}>
    {children}
  </div>
);
