import React from 'react';
export interface TestimonialProps {
  className?: string;
  children?: React.ReactNode;
}

export const Testimonial: React.FC<TestimonialProps> = ({ className = '', children, ...props }) => {
  return (
    <div className={`erb-testimonial ${className}`} {...props}>
      {children}
    </div>
  );
};
