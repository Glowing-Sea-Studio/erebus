import React from 'react';
export interface BannerProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'info' | 'success' | 'warning' | 'error';
}
export const Banner = React.forwardRef<HTMLDivElement, BannerProps>(({ variant = 'info', className = '', children, ...props }, ref) => {
  return (
    <div ref={ref} className={`erb-banner erb-banner--${variant} ${className}`} role="alert" {...props}>
      {children}
    </div>
  );
});
Banner.displayName = 'Banner';
