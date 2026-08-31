import { forwardRef, ElementType, ComponentPropsWithRef } from 'react';
import { cn } from '../utils';

export interface SpacerProps extends ComponentPropsWithRef<'div'> {
  as?: ElementType;
}

export const Spacer = forwardRef<HTMLElement, SpacerProps>(
  ({ as: Component = 'div', className, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn('erb-spacer', className)}
        {...props}
      />
    );
  }
);

Spacer.displayName = 'Spacer';
