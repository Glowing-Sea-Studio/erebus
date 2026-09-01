import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '../utils';

export interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  orientation?: 'horizontal' | 'vertical';
}

export const Divider = forwardRef<HTMLHRElement, DividerProps>(
  ({ className, orientation = 'horizontal', ...props }, ref) => {
    return (
      <hr
        ref={ref}
        className={cn('erb-divider', className)}
        data-orientation={orientation}
        role="separator"
        aria-orientation={orientation}
        {...props}
      />
    );
  }
);
Divider.displayName = 'Divider';

