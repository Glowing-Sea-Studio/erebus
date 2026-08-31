import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '../utils';

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  intent?: 'info' | 'success' | 'warning' | 'danger';
}

export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  ({ className, intent = 'info', children, ...props }, ref) => (
    <div
      ref={ref}
      role="alert"
      className={cn('erb-alert', className)}
      data-intent={intent}
      {...props}
    >
      <div className="erb-alert-content">
        {children}
      </div>
    </div>
  )
);
Alert.displayName = 'Alert';

export const AlertTitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h5 ref={ref} className={cn('erb-alert-title', className)} {...props} />
  )
);
AlertTitle.displayName = 'AlertTitle';

export const AlertDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn('erb-alert-description', className)} {...props} />
  )
);
AlertDescription.displayName = 'AlertDescription';
