import React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'solid' | 'outline' | 'soft';
  color?: 'primary' | 'success' | 'warning' | 'danger' | 'neutral';
  size?: 'sm' | 'md' | 'lg';
  shape?: 'rounded' | 'pill';
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className = '', variant = 'solid', color = 'primary', size = 'md', shape = 'rounded', children, ...props }, ref) => {
    const classNames = [
      'erb-badge',
      `erb-badge--variant-${variant}`,
      `erb-badge--color-${color}`,
      `erb-badge--size-${size}`,
      `erb-badge--shape-${shape}`,
      className,
    ].filter(Boolean).join(' ');

    return (
      <span ref={ref} className={classNames} {...props}>
        {children}
      </span>
    );
  }
);
Badge.displayName = 'Badge';
