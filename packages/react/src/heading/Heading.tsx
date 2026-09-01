import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '../utils';

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, level = 2, ...props }, ref) => {
    const Component = `h${level}` as any;
    return (
      <Component
        ref={ref}
        className={cn(`erb-heading erb-heading--${level}`, className)}
        {...props}
      />
    );
  }
);
Heading.displayName = 'Heading';

