import React from 'react';
import '@erebus/core/description-list.css';

export interface DescriptionListProps extends React.HTMLAttributes<HTMLDListElement> {}
export const DescriptionList = React.forwardRef<HTMLDListElement, DescriptionListProps>((props, ref) => {
  const { className = '', ...rest } = props;
  return <dl ref={ref} className={`erb-description-list ${className}`.trim()} {...rest} />;
});
DescriptionList.displayName = 'DescriptionList';

export interface DescriptionTermProps extends React.HTMLAttributes<HTMLElement> {}
export const DescriptionTerm = React.forwardRef<HTMLElement, DescriptionTermProps>((props, ref) => {
  const { className = '', ...rest } = props;
  return <dt ref={ref} className={`erb-description-list-term ${className}`.trim()} {...rest} />;
});
DescriptionTerm.displayName = 'DescriptionTerm';

export interface DescriptionDetailsProps extends React.HTMLAttributes<HTMLElement> {}
export const DescriptionDetails = React.forwardRef<HTMLElement, DescriptionDetailsProps>((props, ref) => {
  const { className = '', ...rest } = props;
  return <dd ref={ref} className={`erb-description-list-details ${className}`.trim()} {...rest} />;
});
DescriptionDetails.displayName = 'DescriptionDetails';
