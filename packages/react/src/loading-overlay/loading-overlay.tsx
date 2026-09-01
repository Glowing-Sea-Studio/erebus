import React from 'react';
export interface LoadingOverlayProps extends React.HTMLAttributes<HTMLDivElement> {
  active?: boolean;
}
export const LoadingOverlay = React.forwardRef<HTMLDivElement, LoadingOverlayProps>(({ active = true, className = '', ...props }, ref) => {
  if (!active) return null;
  return (
    <div ref={ref} className={`erb-loading-overlay ${className}`} {...props}>
      <div className="erb-loading-overlay__spinner" aria-label="Loading" />
    </div>
  );
});
LoadingOverlay.displayName = 'LoadingOverlay';
