'use client';
import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '../utils';
import { useAppShellContext } from '../AppShell/AppShellContext';

export interface HeaderProps extends HTMLAttributes<HTMLElement> {
  showHamburgerMenu?: boolean;
}

export const Header = forwardRef<HTMLElement, HeaderProps>(
  ({ className, showHamburgerMenu, children, ...props }, ref) => {
    const context = useAppShellContext();
    const toggleMobileSidebar = context?.toggleMobileSidebar ?? (() => {});

    return (
      <header ref={ref} className={cn('erb-header', className)} {...props}>
        {children}
        {showHamburgerMenu && (
          <button
            type="button"
            className="erb-header-hamburger"
            onClick={toggleMobileSidebar}
            aria-label="Toggle Menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        )}
      </header>
    );
  }
);
Header.displayName = 'Header';
