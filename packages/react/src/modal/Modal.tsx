'use client';

import { forwardRef, HTMLAttributes, ReactNode, createContext, useContext, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { cn } from '../utils';

interface ModalContextValue {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}
const ModalContext = createContext<ModalContextValue | undefined>(undefined);

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) throw new Error('useModal must be used within a Modal');
  return context;
}

export interface ModalProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: ReactNode;
}

export function Modal({ open = false, onOpenChange, children }: ModalProps) {
  const [isOpen, setIsOpen] = useState(open);
  
  useEffect(() => {
    if (open !== undefined) setIsOpen(open);
  }, [open]);

  const handleOpenChange = (newOpen: boolean) => {
    setIsOpen(newOpen);
    onOpenChange?.(newOpen);
  };

  return (
    <ModalContext.Provider value={{ open: isOpen, onOpenChange: handleOpenChange }}>
      {children}
    </ModalContext.Provider>
  );
}

function useMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
}

export const ModalOverlay = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { open, onOpenChange } = useModal();
    const mounted = useMounted();
    if (!open || !mounted) return null;
    
    return createPortal(
      <div 
        ref={ref} 
        className={cn('erb-modal-overlay', className)} 
        onClick={() => onOpenChange(false)}
        {...props} 
      />,
      document.body
    );
  }
);
ModalOverlay.displayName = 'ModalOverlay';

export const ModalContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    const { open } = useModal();
    const mounted = useMounted();

    if (!open || !mounted) return null;

    return createPortal(
      <div
        ref={ref}
        role="dialog"
        aria-modal="true"
        className={cn('erb-modal-content', className)}
        {...props}
      >
        {children}
      </div>,
      document.body
    );
  }
);
ModalContent.displayName = 'ModalContent';

export const ModalHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('erb-modal-header', className)} {...props} />
  )
);
ModalHeader.displayName = 'ModalHeader';

export const ModalTitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h2 ref={ref} className={cn('erb-modal-title', className)} {...props} />
  )
);
ModalTitle.displayName = 'ModalTitle';

export const ModalDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn('erb-modal-description', className)} {...props} />
  )
);
ModalDescription.displayName = 'ModalDescription';

export const ModalBody = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('erb-modal-body', className)} {...props} />
  )
);
ModalBody.displayName = 'ModalBody';

export const ModalFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('erb-modal-footer', className)} {...props} />
  )
);
ModalFooter.displayName = 'ModalFooter';
