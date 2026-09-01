import { render, screen } from '@testing-library/react';
import { Gallery } from './Gallery';

describe('Gallery', () => {
  it('renders images', () => {
    const images = [{ src: 'img1.jpg', alt: 'Image 1' }];
    render(<Gallery images={images} />);
    expect(screen.getByAltText('Image 1')).toBeInTheDocument();
  });
});
