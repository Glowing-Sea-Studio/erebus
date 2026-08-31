import { forwardRef, ElementType, ComponentPropsWithRef, CSSProperties } from 'react';
import { cn } from '../utils';

export interface AspectRatioProps extends ComponentPropsWithRef<'div'> {
  as?: ElementType;
  ratio?: number;
}

export const AspectRatio = forwardRef<HTMLElement, AspectRatioProps>(
  ({ as: Component = 'div', className, ratio = 4 / 3, style, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn('erb-aspect-ratio', className)}
        style={{ '--erb-aspect-ratio': ratio, ...style } as CSSProperties}
        {...props}
      />
    );
  }
);

AspectRatio.displayName = 'AspectRatio';
