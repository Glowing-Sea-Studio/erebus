import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '../utils';

export interface KbdProps extends HTMLAttributes<HTMLElement> {}

export const Kbd = forwardRef<HTMLElement, KbdProps>(
  ({ className, ...props }, ref) => {
    return (
      <kbd
        ref={ref}
        className={cn('erb-kbd', className)}
        {...props}
      />
    );
  }
);
Kbd.displayName = 'Kbd';

