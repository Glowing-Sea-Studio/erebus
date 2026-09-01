import React from 'react';

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'rect' | 'circle';
  width?: number | string;
  height?: number | string;
}

export const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ variant = 'rect', width, height, className = '', style, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`erb-skeleton ${variant === 'circle' ? 'erb-skeleton--circle' : ''} ${className}`.trim()}
        style={{
          ...style,
          width: typeof width === 'number' ? `${width}px` : width,
          height: typeof height === 'number' ? `${height}px` : height,
        } as React.CSSProperties}
        {...props}
      />
    );
  }
);
Skeleton.displayName = 'Skeleton';
