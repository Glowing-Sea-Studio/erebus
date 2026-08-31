import { forwardRef, ElementType, ComponentPropsWithRef, CSSProperties } from 'react';
import { cn, ResponsiveValue, resolveResponsiveProps } from '../utils';

export interface InlineProps extends ComponentPropsWithRef<'div'> {
  as?: ElementType;
  gap?: ResponsiveValue<number>;
  align?: ResponsiveValue<'start' | 'end' | 'center' | 'stretch' | 'baseline'>;
  justify?: ResponsiveValue<'start' | 'end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'>;
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

export const Inline = forwardRef<HTMLElement, InlineProps>(
  ({ as: Component = 'div', className, gap, align, justify, style, ...props }, ref) => {
    const customStyle = {
      ...style,
      ...resolveResponsiveProps('--erb-inline-gap', gap, (v) => `var(--erb-space-${v})`),
      ...resolveResponsiveProps('--erb-inline-align', align, (v) => alignMap[v] || v),
      ...resolveResponsiveProps('--erb-inline-justify', justify, (v) => justifyMap[v] || v)
    } as CSSProperties;

    return (
      <Component
        ref={ref}
        className={cn('erb-inline', className)}
        style={customStyle}
        {...props}
      />
    );
  }
);

Inline.displayName = 'Inline';
