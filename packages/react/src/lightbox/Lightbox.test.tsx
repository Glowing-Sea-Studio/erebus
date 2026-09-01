import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Lightbox } from './Lightbox';

describe('Lightbox', () => {
  it('renders nothing when closed', () => {
    const { container } = render(<Lightbox isOpen={false} onClose={() => {}} imageSrc="test.jpg" />);
    expect(container.firstChild).toBeNull();
  });

  it('renders image when open', () => {
    render(<Lightbox isOpen={true} onClose={() => {}} imageSrc="test.jpg" imageAlt="test img" />);
    expect(screen.getByAltText('test img')).toBeInTheDocument();
  });

  it('calls onClose when close button clicked', () => {
    const onClose = jest.fn();
    render(<Lightbox isOpen={true} onClose={onClose} imageSrc="test.jpg" />);
    fireEvent.click(screen.getByLabelText('Close'));
    expect(onClose).toHaveBeenCalled();
  });
});
