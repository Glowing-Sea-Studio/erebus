import React, { useState } from 'react';


export interface AccordionProps { title: React.ReactNode; children: React.ReactNode; defaultExpanded?: boolean; }

export const Accordion = ({ title, children, defaultExpanded = false }: AccordionProps) => {
  const [expanded, setExpanded] = useState(defaultExpanded);
  return (
    <div className="erb-accordion">
      <h3 className="erb-accordion__header">
        <button aria-expanded={expanded} className="erb-accordion__button" onClick={() => setExpanded(!expanded)}>{title}</button>
      </h3>
      <div className="erb-accordion__panel" hidden={!expanded}>{children}</div>
    </div>
  );
};
