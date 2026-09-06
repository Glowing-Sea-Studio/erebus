'use client';
import React from 'react';
import { AppShellProvider } from './AppShellContext';

export interface AppShellProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const AppShell: React.FC<AppShellProps> = ({ children, className = '', ...props }) => (
  <AppShellProvider>
    <div className={`erb-app-shell ${className}`} {...props}>
      {children}
    </div>
  </AppShellProvider>
);
