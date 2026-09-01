import React from 'react';
export interface GalleryProps {
  images: { src: string; alt: string }[];
  onImageClick?: (index: number) => void;
}

export const Gallery: React.FC<GalleryProps> = ({ images, onImageClick }) => {
  return (
    <div className="erb-gallery">
      {images.map((img, idx) => (
        <div key={idx} className="erb-gallery-item" onClick={() => onImageClick?.(idx)}>
          <img src={img.src} alt={img.alt} className="erb-gallery-img" />
        </div>
      ))}
    </div>
  );
};
