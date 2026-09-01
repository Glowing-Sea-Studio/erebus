import React, { useEffect } from 'react';

export interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc?: string;
  imageAlt?: string;
}

export const Lightbox: React.FC<LightboxProps> = ({ isOpen, onClose, imageSrc, imageAlt }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !imageSrc) return null;

  return (
    <div className="erb-lightbox" onClick={onClose} role="dialog" aria-modal="true">
      <div className="erb-lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button className="erb-lightbox-close" onClick={onClose} aria-label="Close">
          &times;
        </button>
        <img src={imageSrc} alt={imageAlt} className="erb-lightbox-img" />
      </div>
    </div>
  );
};
