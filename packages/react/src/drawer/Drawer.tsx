'use client';

import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '../utils';
import { 
  Modal, 
  ModalOverlay, 
  ModalContent, 
  ModalHeader, 
  ModalTitle, 
  ModalDescription, 
  ModalBody, 
  ModalFooter,
  ModalProps 
} from '../modal/Modal';

export const Drawer = Modal;
export type DrawerProps = ModalProps;

export const DrawerOverlay = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <ModalOverlay ref={ref} className={cn('erb-drawer-overlay', className)} {...props} />
  )
);
DrawerOverlay.displayName = 'DrawerOverlay';

export const DrawerContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <ModalContent
      ref={ref}
      role="dialog"
      className={cn('erb-drawer-content', className)}
      {...props}
    />
  )
);
DrawerContent.displayName = 'DrawerContent';

export const DrawerHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <ModalHeader ref={ref} className={cn('erb-drawer-header', className)} {...props} />
  )
);
DrawerHeader.displayName = 'DrawerHeader';

export const DrawerTitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <ModalTitle ref={ref} className={cn('erb-drawer-title', className)} {...props} />
  )
);
DrawerTitle.displayName = 'DrawerTitle';

export const DrawerDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <ModalDescription ref={ref} className={cn('erb-drawer-description', className)} {...props} />
  )
);
DrawerDescription.displayName = 'DrawerDescription';

export const DrawerBody = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <ModalBody ref={ref} className={cn('erb-drawer-body', className)} {...props} />
  )
);
DrawerBody.displayName = 'DrawerBody';

export const DrawerFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <ModalFooter ref={ref} className={cn('erb-drawer-footer', className)} {...props} />
  )
);
DrawerFooter.displayName = 'DrawerFooter';
