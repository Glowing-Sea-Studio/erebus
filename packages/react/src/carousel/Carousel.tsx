import React, { useState } from 'react';

export interface CarouselProps {
  images: { src: string; alt: string }[];
}

export const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const next = () => setCurrentIndex((i) => (i + 1) % images.length);
  const prev = () => setCurrentIndex((i) => (i - 1 + images.length) % images.length);

  return (
    <div className="erb-carousel">
      <div 
        className="erb-carousel-track" 
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, i) => (
          <div key={i} className="erb-carousel-item">
            <img src={img.src} alt={img.alt} className="erb-gallery-img" style={{ width: '100%', display: 'block' }} />
          </div>
        ))}
      </div>
      <div className="erb-carousel-controls">
        <button className="erb-carousel-btn" onClick={prev} aria-label="Previous">&lt;</button>
        <button className="erb-carousel-btn" onClick={next} aria-label="Next">&gt;</button>
      </div>
    </div>
  );
};
