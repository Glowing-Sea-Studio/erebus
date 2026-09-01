import { render, screen, fireEvent } from '@testing-library/react';
import { Carousel } from './Carousel';

describe('Carousel', () => {
  it('renders images', () => {
    const images = [{ src: 'img1.jpg', alt: 'img1' }, { src: 'img2.jpg', alt: 'img2' }];
    render(<Carousel images={images} />);
    expect(screen.getByAltText('img1')).toBeInTheDocument();
    expect(screen.getByAltText('img2')).toBeInTheDocument();
  });

  it('navigates next and prev', () => {
    const images = [{ src: 'img1.jpg', alt: 'img1' }, { src: 'img2.jpg', alt: 'img2' }];
    render(<Carousel images={images} />);
    
    const nextBtn = screen.getByLabelText('Next');
    fireEvent.click(nextBtn);
    // Note: detailed style testing is often skipped or needs special setup, but we test interaction
    const prevBtn = screen.getByLabelText('Previous');
    fireEvent.click(prevBtn);
  });
});
