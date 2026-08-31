import { forwardRef, ElementType, ComponentPropsWithRef, CSSProperties } from 'react';
import { cn, ResponsiveValue, resolveResponsiveProps } from '../utils';

export interface GridItemProps extends ComponentPropsWithRef<'div'> {
  as?: ElementType;
  colSpan?: ResponsiveValue<number>;
  rowSpan?: ResponsiveValue<number>;
}

export const GridItem = forwardRef<HTMLElement, GridItemProps>(
  ({ as: Component = 'div', className, colSpan, rowSpan, style, ...props }, ref) => {
    const customStyle = {
      ...style,
      ...resolveResponsiveProps('--erb-grid-item-col-span', colSpan),
      ...resolveResponsiveProps('--erb-grid-item-row-span', rowSpan)
    } as CSSProperties;

    return (
      <Component
        ref={ref}
        className={cn('erb-grid-item', className)}
        style={customStyle}
        {...props}
      />
    );
  }
);

GridItem.displayName = 'GridItem';
