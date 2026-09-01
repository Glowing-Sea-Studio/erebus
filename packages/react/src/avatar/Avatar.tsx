import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '../utils';

export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  src?: string;
  name?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, src, name, size = 'md', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('erb-avatar', className)}
        data-size={size}
        role="img"
        aria-label={name}
        {...props}
      >
        {src ? (
          <img src={src} alt={name} className="erb-avatar__image" />
        ) : (
          <span className="erb-avatar__initials">{name ? name.charAt(0).toUpperCase() : '?'}</span>
        )}
      </div>
    );
  }
);
Avatar.displayName = 'Avatar';

