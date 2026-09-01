import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '../utils';

export interface AvatarGroupProps extends HTMLAttributes<HTMLDivElement> {
  max?: number;
}

export const AvatarGroup = forwardRef<HTMLDivElement, AvatarGroupProps>(
  ({ className, max, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('erb-avatar-group', className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);
AvatarGroup.displayName = 'AvatarGroup';

