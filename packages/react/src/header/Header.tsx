import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '../utils';

export const Header = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => (
    <header ref={ref} className={cn('erb-header', className)} {...props} />
  )
);
Header.displayName = 'Header';
