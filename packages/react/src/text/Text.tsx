import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '../utils';

export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  size?: 'sm' | 'md' | 'lg';
  muted?: boolean;
}

export const Text = forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, size = 'md', muted = false, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn('erb-text', className)}
        data-size={size}
        data-muted={muted}
        {...props}
      />
    );
  }
);
Text.displayName = 'Text';

