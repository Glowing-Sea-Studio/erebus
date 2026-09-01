import { forwardRef, ButtonHTMLAttributes } from 'react';
import { cn } from '../utils';

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'solid' | 'outline' | 'ghost';
  'aria-label': string; // Required for accessibility
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, size = 'md', variant = 'solid', 'aria-label': ariaLabel, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn('erb-icon-button', className)}
        data-size={size}
        data-variant={variant}
        aria-label={ariaLabel}
        {...props}
      />
    );
  }
);
IconButton.displayName = 'IconButton';

