'use client';

import { forwardRef, HTMLAttributes, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { cn } from '../utils';

function useMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
}

export interface PanelProps extends HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  position?: 'left' | 'right';
}

export const Panel = forwardRef<HTMLDivElement, PanelProps>(
  ({ className, open = true, position = 'right', children, ...props }, ref) => {
    const mounted = useMounted();
    if (!open || !mounted) return null;

    return createPortal(
      <div
        ref={ref}
        role="dialog"
        aria-modal="true"
        data-position={position}
        className={cn('erb-panel', className)}
        {...props}
      >
        {children}
      </div>,
      document.body
    );
  }
);
Panel.displayName = 'Panel';

export interface PanelOverlayProps extends HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  onClose?: () => void;
}

export const PanelOverlay = forwardRef<HTMLDivElement, PanelOverlayProps>(
  ({ className, open = true, onClose, ...props }, ref) => {
    const mounted = useMounted();
    if (!open || !mounted) return null;
    return createPortal(
      <div 
        ref={ref} 
        className={cn('erb-panel-overlay', className)} 
        onClick={onClose}
        {...props} 
      />,
      document.body
    );
  }
);
PanelOverlay.displayName = 'PanelOverlay';

export const PanelHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('erb-panel-header', className)} {...props} />
  )
);
PanelHeader.displayName = 'PanelHeader';

export const PanelTitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h2 ref={ref} className={cn('erb-panel-title', className)} {...props} />
  )
);
PanelTitle.displayName = 'PanelTitle';

export const PanelBody = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('erb-panel-body', className)} {...props} />
  )
);
PanelBody.displayName = 'PanelBody';

export const PanelFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('erb-panel-footer', className)} {...props} />
  )
);
PanelFooter.displayName = 'PanelFooter';
