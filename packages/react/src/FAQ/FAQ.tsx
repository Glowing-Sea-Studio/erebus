import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '../utils';

export interface FAQProps extends HTMLAttributes<HTMLDivElement> {}

export const FAQ = forwardRef<HTMLDivElement, FAQProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('erb-faq', className)}
        {...props}
      />
    );
  }
);
FAQ.displayName = 'FAQ';

