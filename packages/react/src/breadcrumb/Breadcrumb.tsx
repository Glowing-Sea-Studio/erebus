import React from 'react';
export interface BreadcrumbProps { children: React.ReactNode; ariaLabel?: string; }

export const Breadcrumb = ({ children, ariaLabel = 'Breadcrumb' }: BreadcrumbProps) => (
  <nav aria-label={ariaLabel} className="erb-breadcrumb">
    <ol className="erb-breadcrumb__list">
      {React.Children.map(children, (child, i) => (
        <li className="erb-breadcrumb__item">
          {child}
          {i < React.Children.count(children) - 1 && <span className="erb-breadcrumb__separator" aria-hidden="true">/</span>}
        </li>
      ))}
    </ol>
  </nav>
);
