import { forwardRef, ElementType, ComponentPropsWithRef, CSSProperties } from 'react';
import { cn, ResponsiveValue, resolveResponsiveProps } from '../utils';

export interface SplitProps extends ComponentPropsWithRef<'div'> {
  as?: ElementType;
  gap?: ResponsiveValue<number>;
  fraction?: '1/2' | '1/3' | '2/3' | '1/4' | '3/4' | 'auto-start' | 'auto-end';
  align?: ResponsiveValue<'start' | 'end' | 'center' | 'stretch'>;
}

export const Split = forwardRef<HTMLElement, SplitProps>(
  ({ as: Component = 'div', className, gap, fraction = '1/2', align, style, ...props }, ref) => {
    const customStyle = {
      ...style,
      ...resolveResponsiveProps('--erb-split-gap', gap, (v) => `var(--erb-space-${v})`),
      ...resolveResponsiveProps('--erb-split-align', align)
    } as CSSProperties;

    return (
      <Component
        ref={ref}
        className={cn('erb-split', className)}
        data-fraction={fraction !== '1/2' ? fraction : undefined}
        style={customStyle}
        {...props}
      />
    );
  }
);

Split.displayName = 'Split';
