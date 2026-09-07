import React from 'react';

export interface LogoProps {
  src: string;
  alt: string;
}

export interface LogoCloudProps {
  className?: string;
  title?: string;
  logos: LogoProps[];
}

export const LogoCloud: React.FC<LogoCloudProps> = ({
  className = '',
  title,
  logos,
  ...props
}) => {
  return (
    <div className={`erb-logocloud ${className}`} {...props}>
      {title && <p className="erb-logocloud-title">{title}</p>}
      <div className="erb-logocloud-logos">
        {logos.map((logo, idx) => (
          <img key={idx} src={logo.src} alt={logo.alt} className="erb-logocloud-logo" />
        ))}
      </div>
    </div>
  );
};
