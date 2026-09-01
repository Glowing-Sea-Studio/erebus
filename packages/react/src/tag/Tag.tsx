import React from 'react';

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'solid' | 'outline' | 'soft';
  color?: 'primary' | 'success' | 'warning' | 'danger' | 'neutral';
  size?: 'sm' | 'md' | 'lg';
  closable?: boolean;
  onClose?: () => void;
}

export const Tag = React.forwardRef<HTMLSpanElement, TagProps>(
  ({ className = '', variant = 'solid', color = 'primary', size = 'md', closable, onClose, children, ...props }, ref) => {
    const classNames = [
      'erb-tag',
      `erb-tag--variant-${variant}`,
      `erb-tag--color-${color}`,
      `erb-tag--size-${size}`,
      className,
    ].filter(Boolean).join(' ');

    return (
      <span ref={ref} className={classNames} {...props}>
        {children}
        {closable && (
          <button type="button" className="erb-tag__close" aria-label="Close" onClick={onClose}>
            &times;
          </button>
        )}
      </span>
    );
  }
);
Tag.displayName = 'Tag';
