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

export const AlertDialog = Modal;
export type AlertDialogProps = ModalProps;

export const AlertDialogOverlay = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, onClick, ...props }, ref) => (
    <ModalOverlay 
      ref={ref} 
      className={cn('erb-alert-dialog-overlay', className)} 
      onClick={(e) => {
        e.stopPropagation();
        onClick?.(e);
      }}
      {...props} 
    />
  )
);
AlertDialogOverlay.displayName = 'AlertDialogOverlay';

export const AlertDialogContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <ModalContent
      ref={ref}
      role="alertdialog"
      className={cn('erb-alert-dialog-content', className)}
      {...props}
    />
  )
);
AlertDialogContent.displayName = 'AlertDialogContent';

export const AlertDialogHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <ModalHeader ref={ref} className={cn('erb-alert-dialog-header', className)} {...props} />
  )
);
AlertDialogHeader.displayName = 'AlertDialogHeader';

export const AlertDialogTitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <ModalTitle ref={ref} className={cn('erb-alert-dialog-title', className)} {...props} />
  )
);
AlertDialogTitle.displayName = 'AlertDialogTitle';

export const AlertDialogDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <ModalDescription ref={ref} className={cn('erb-alert-dialog-description', className)} {...props} />
  )
);
AlertDialogDescription.displayName = 'AlertDialogDescription';

export const AlertDialogBody = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <ModalBody ref={ref} className={cn('erb-alert-dialog-body', className)} {...props} />
  )
);
AlertDialogBody.displayName = 'AlertDialogBody';

export const AlertDialogFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <ModalFooter ref={ref} className={cn('erb-alert-dialog-footer', className)} {...props} />
  )
);
AlertDialogFooter.displayName = 'AlertDialogFooter';
