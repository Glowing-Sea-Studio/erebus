import React from 'react';

export interface FAQItemProps {
  question: string;
  answer: string;
}

export interface FAQProps {
  className?: string;
  items: FAQItemProps[];
}

export const FAQ: React.FC<FAQProps> = ({
  className = '',
  items,
  ...props
}) => {
  return (
    <div className={`erb-faq ${className}`} {...props}>
      {items.map((item, idx) => (
        <div key={idx} className="erb-faq-item">
          <p className="erb-faq-question">{item.question}</p>
          <p className="erb-faq-answer">{item.answer}</p>
        </div>
      ))}
    </div>
  );
};
