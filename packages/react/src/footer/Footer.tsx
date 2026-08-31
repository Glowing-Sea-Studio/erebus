import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '../utils';

export const Footer = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => (
    <footer ref={ref} className={cn('erb-footer', className)} {...props} />
  )
);
Footer.displayName = 'Footer';
