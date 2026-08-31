import { forwardRef, ElementType, ComponentPropsWithRef, CSSProperties } from 'react';
import { cn } from '../utils';

export interface ScrollAreaProps extends ComponentPropsWithRef<'div'> {
  as?: ElementType;
  maxHeight?: number | string;
}

export const ScrollArea = forwardRef<HTMLElement, ScrollAreaProps>(
  ({ as: Component = 'div', className, maxHeight, style, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn('erb-scroll-area', className)}
        style={{ '--erb-scroll-area-max-height': typeof maxHeight === 'number' ? `${maxHeight}px` : maxHeight, ...style } as CSSProperties}
        {...props}
      />
    );
  }
);

ScrollArea.displayName = 'ScrollArea';
