import { forwardRef, ButtonHTMLAttributes } from 'react';
import { cn } from '../utils';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'solid' | 'outline' | 'ghost';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, size = 'md', variant = 'solid', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn('erb-button', className)}
        data-size={size}
        data-variant={variant}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';
