import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '../utils';

export interface ProseProps extends HTMLAttributes<HTMLDivElement> {}

export const Prose = forwardRef<HTMLDivElement, ProseProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('erb-prose', className)}
        {...props}
      />
    );
  }
);
Prose.displayName = 'Prose';
