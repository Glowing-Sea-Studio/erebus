import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '../utils';

export interface CalloutProps extends HTMLAttributes<HTMLDivElement> {
  intent?: 'info' | 'success' | 'warning' | 'danger' | 'neutral';
}

export const Callout = forwardRef<HTMLDivElement, CalloutProps>(
  ({ className, intent = 'neutral', children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('erb-callout', className)}
      data-intent={intent}
      {...props}
    >
      {children}
    </div>
  )
);
Callout.displayName = 'Callout';
