import React from 'react';

export interface TimelineItemProps {
  title: string;
  description?: string;
  date?: string;
}

export interface TimelineProps {
  className?: string;
  items: TimelineItemProps[];
}

export const Timeline: React.FC<TimelineProps> = ({
  className = '',
  items,
  ...props
}) => {
  return (
    <ul className={`erb-timeline ${className}`} {...props}>
      {items.map((item, idx) => {
        const isLast = idx === items.length - 1;
        return (
          <li key={idx} className="erb-timeline-item">
            <div className="erb-timeline-indicator">
              <div className="erb-timeline-dot"></div>
              {!isLast && <div className="erb-timeline-line"></div>}
            </div>
            <div className="erb-timeline-content">
              <p className="erb-timeline-title">{item.title}</p>
              {item.description && <p className="erb-timeline-description">{item.description}</p>}
              {item.date && <p className="erb-timeline-date">{item.date}</p>}
            </div>
          </li>
        );
      })}
    </ul>
  );
};
