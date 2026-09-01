import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '../utils';

export interface CodeProps extends HTMLAttributes<HTMLElement> {}

export const Code = forwardRef<HTMLElement, CodeProps>(
  ({ className, ...props }, ref) => {
    return (
      <code
        ref={ref}
        className={cn('erb-code', className)}
        {...props}
      />
    );
  }
);
Code.displayName = 'Code';

