'use client';
import React from 'react';
import { useAppShellContext } from '../AppShell/AppShellContext';
import { cn } from '../utils';

export interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const Sidebar: React.FC<SidebarProps> = ({ children, className = '', ...props }) => {
  const context = useAppShellContext();
  const isMobileSidebarOpen = context?.isMobileSidebarOpen ?? false;
  const closeMobileSidebar = context?.closeMobileSidebar ?? (() => {});

  return (
    <>
      <div
        className={cn('erb-sidebar-overlay', isMobileSidebarOpen && 'open')}
        data-mobile-open={isMobileSidebarOpen ? 'true' : 'false'}
        onClick={closeMobileSidebar}
        aria-hidden="true"
      />
      <div
        className={cn('erb-sidebar', className)}
        data-mobile-open={isMobileSidebarOpen ? 'true' : 'false'}
        {...props}
      >
        <button
          type="button"
          className="erb-sidebar-close"
          onClick={closeMobileSidebar}
          aria-label="Close sidebar"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        {children}
      </div>
    </>
  );
};
