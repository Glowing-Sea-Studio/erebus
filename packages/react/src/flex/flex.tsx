import { forwardRef, ElementType, ComponentPropsWithRef, CSSProperties } from 'react';
import { cn, ResponsiveValue, resolveResponsiveProps } from '../utils';

export interface FlexProps extends ComponentPropsWithRef<'div'> {
  as?: ElementType;
  direction?: ResponsiveValue<'row' | 'row-reverse' | 'column' | 'column-reverse'>;
  gap?: ResponsiveValue<number>;
  align?: ResponsiveValue<'start' | 'end' | 'center' | 'stretch' | 'baseline'>;
  justify?: ResponsiveValue<'start' | 'end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'>;
  wrap?: ResponsiveValue<'nowrap' | 'wrap' | 'wrap-reverse'>;
}

const justifyMap: Record<string, string> = {
  start: 'flex-start',
  end: 'flex-end',
  center: 'center',
  'space-between': 'space-between',
  'space-around': 'space-around',
  'space-evenly': 'space-evenly'
};

const alignMap: Record<string, string> = {
  start: 'flex-start',
  end: 'flex-end',
  center: 'center',
  stretch: 'stretch',
  baseline: 'baseline'
};

export const Flex = forwardRef<HTMLElement, FlexProps>(
  ({ as: Component = 'div', className, direction, gap, align, justify, wrap, style, ...props }, ref) => {
    const customStyle = {
      ...style,
      ...resolveResponsiveProps('--erb-flex-direction', direction),
      ...resolveResponsiveProps('--erb-flex-gap', gap, (v) => `var(--erb-space-${v})`),
      ...resolveResponsiveProps('--erb-flex-align', align, (v) => alignMap[v] || v),
      ...resolveResponsiveProps('--erb-flex-justify', justify, (v) => justifyMap[v] || v),
      ...resolveResponsiveProps('--erb-flex-wrap', wrap)
    } as CSSProperties;

    return (
      <Component
        ref={ref}
        className={cn('erb-flex', className)}
        style={customStyle}
        {...props}
      />
    );
  }
);

Flex.displayName = 'Flex';
