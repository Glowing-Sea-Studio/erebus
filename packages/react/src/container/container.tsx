import { forwardRef, ElementType, ComponentPropsWithRef } from 'react';
import { cn } from '../utils';

export interface ContainerProps extends ComponentPropsWithRef<'div'> {
  as?: ElementType;
}

export const Container = forwardRef<HTMLElement, ContainerProps>(
  ({ as: Component = 'div', className, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn('erb-container', className)}
        {...props}
      />
    );
  }
);

Container.displayName = 'Container';
