import { forwardRef, ElementType, ComponentPropsWithRef, CSSProperties } from 'react';
import { cn, ResponsiveValue, resolveResponsiveProps } from '../utils';

export interface GridProps extends ComponentPropsWithRef<'div'> {
  as?: ElementType;
  cols?: ResponsiveValue<number>;
  gap?: ResponsiveValue<number>;
  align?: ResponsiveValue<'start' | 'end' | 'center' | 'stretch'>;
  justify?: ResponsiveValue<'start' | 'end' | 'center' | 'stretch'>;
}

export const Grid = forwardRef<HTMLElement, GridProps>(
  ({ as: Component = 'div', className, cols = 1, gap, align, justify, style, ...props }, ref) => {
    const customStyle = {
      ...style,
      ...resolveResponsiveProps('--erb-grid-cols', cols, (v) => `repeat(${v}, minmax(0, 1fr))`),
      ...resolveResponsiveProps('--erb-grid-gap', gap, (v) => `var(--erb-space-${v})`),
      ...resolveResponsiveProps('--erb-grid-align', align),
      ...resolveResponsiveProps('--erb-grid-justify', justify)
    } as CSSProperties;

    return (
      <Component
        ref={ref}
        className={cn('erb-grid', className)}
        style={customStyle}
        {...props}
      />
    );
  }
);

Grid.displayName = 'Grid';
