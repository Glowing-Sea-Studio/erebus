import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '../utils';

export interface ButtonGroupProps extends HTMLAttributes<HTMLDivElement> {
  orientation?: 'horizontal' | 'vertical';
}

export const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>(
  ({ className, orientation = 'horizontal', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('erb-button-group', className)}
        data-orientation={orientation}
        role="group"
        {...props}
      />
    );
  }
);
ButtonGroup.displayName = 'ButtonGroup';

