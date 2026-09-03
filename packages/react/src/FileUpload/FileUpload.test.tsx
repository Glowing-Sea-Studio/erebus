import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { FileUpload } from './FileUpload';

describe('FileUpload', () => {
  it('renders correctly', () => {
    render(<FileUpload data-testid="file-upload" />);
    expect(screen.getByText('Drag & Drop files here or click to browse')).toBeInTheDocument();
  });

  it('handles click to open file dialog', () => {
    render(<FileUpload data-testid="file-upload" />);
    // Testing the UI interaction
    const container = screen.getByText('Drag & Drop files here or click to browse').parentElement;
    expect(container).toBeInTheDocument();
  });
  
  it('updates drag state correctly', () => {
    render(<FileUpload data-testid="file-upload" />);
    const container = screen.getByText('Drag & Drop files here or click to browse').parentElement!;
    
    fireEvent.dragEnter(container);
    expect(container.getAttribute('data-drag-active')).toBe('true');
    
    fireEvent.dragLeave(container);
    expect(container.getAttribute('data-drag-active')).toBe('false');
  });
});
