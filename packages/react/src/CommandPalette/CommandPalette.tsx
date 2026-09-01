import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '../utils';

export interface CommandPaletteProps extends HTMLAttributes<HTMLDivElement> {}

export const CommandPalette = forwardRef<HTMLDivElement, CommandPaletteProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('erb-command-palette', className)}
        {...props}
      />
    );
  }
);
CommandPalette.displayName = 'CommandPalette';

