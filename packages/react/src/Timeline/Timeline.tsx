import React from 'react';

export interface TimelineItemProps {
  title: string;
  description?: string;
  isLast?: boolean;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({ title, description, isLast }) => (
  <li className="erb-timeline-item">
    <div className="erb-timeline-indicator">
      <div className="erb-timeline-dot" />
      {!isLast && <div className="erb-timeline-line" />}
    </div>
    <div className="erb-timeline-content">
      <div className="erb-timeline-title">{title}</div>
      {description && <div className="erb-timeline-description">{description}</div>}
    </div>
  </li>
);

export interface TimelineProps {
  children: React.ReactNode;
  className?: string;
}

export const Timeline: React.FC<TimelineProps> = ({ children, className = '' }) => (
  <ul className={`erb-timeline ${className}`}>
    {children}
  </ul>
);