import React from 'react';

export interface TestimonialProps {
  className?: string;
  quote: string;
  author: string;
  role?: string;
  avatarUrl?: string;
}

export const Testimonial: React.FC<TestimonialProps> = ({
  className = '',
  quote,
  author,
  role,
  avatarUrl,
  ...props
}) => {
  return (
    <div className={`erb-testimonial ${className}`} {...props}>
      <blockquote className="erb-testimonial-quote">"{quote}"</blockquote>
      <div className="erb-testimonial-author-container">
        {avatarUrl && <img src={avatarUrl} alt={author} className="erb-testimonial-avatar" />}
        <div className="erb-testimonial-author-info">
          <p className="erb-testimonial-author">{author}</p>
          {role && <p className="erb-testimonial-role">{role}</p>}
        </div>
      </div>
    </div>
  );
};
