import React, { useState } from 'react';
export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  lazy?: boolean;
  fallbackText?: string;
}
export const Image = React.forwardRef<HTMLImageElement, ImageProps>(({ lazy = false, fallbackText = 'Image not available', src, alt, className = '', ...props }, ref) => {
  const [error, setError] = useState(false);
  if (error || !src) {
    return <div className={`erb-image-wrapper erb-image--fallback ${className}`} style={{ width: props.width || '100%', height: props.height || '100px' }}>{fallbackText}</div>;
  }
  return (
    <div className={`erb-image-wrapper ${className}`}>
      <img ref={ref} src={src} alt={alt} className="erb-image" loading={lazy ? 'lazy' : 'eager'} onError={() => setError(true)} {...props} />
    </div>
  );
});
Image.displayName = 'Image';
