import { forwardRef, ElementType, ComponentPropsWithRef } from 'react';
import { cn } from '../utils';

export interface SectionProps extends ComponentPropsWithRef<'section'> {
  as?: ElementType;
}

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ as: Component = 'section', className, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn('erb-section', className)}
        {...props}
      />
    );
  }
);

Section.displayName = 'Section';
