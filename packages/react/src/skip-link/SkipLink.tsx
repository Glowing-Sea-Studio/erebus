import React from 'react';
export interface SkipLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> { href: string; children: React.ReactNode; }

export const SkipLink = React.forwardRef<HTMLAnchorElement, SkipLinkProps>(({ href, children, className = '', ...props }, ref) => (
  <a ref={ref} href={href} className={`erb-skip-link ${className}`} {...props}>{children}</a>
));
SkipLink.displayName = 'SkipLink';
