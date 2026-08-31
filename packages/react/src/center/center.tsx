import { forwardRef, ElementType, ComponentPropsWithRef } from 'react';
import { cn } from '../utils';

export interface CenterProps extends ComponentPropsWithRef<'div'> {
  as?: ElementType;
  inline?: boolean;
}

export const Center = forwardRef<HTMLElement, CenterProps>(
  ({ as: Component = 'div', className, inline, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn('erb-center', className)}
        data-inline={inline ? 'true' : undefined}
        {...props}
      />
    );
  }
);

Center.displayName = 'Center';
