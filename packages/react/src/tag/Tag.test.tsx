import { render, screen, fireEvent } from '@testing-library/react';
import { Tag } from './Tag';
import '@testing-library/jest-dom';

describe('Tag', () => {
  it('renders correctly', () => {
    render(<Tag>Test Tag</Tag>);
    expect(screen.getByText('Test Tag')).toBeInTheDocument();
    expect(screen.getByText('Test Tag')).toHaveClass('erb-tag');
  });

  it('renders close button when closable', () => {
    const onClose = jest.fn();
    render(<Tag closable onClose={onClose}>Test Tag</Tag>);
    const closeBtn = screen.getByLabelText('Close');
    expect(closeBtn).toBeInTheDocument();
    fireEvent.click(closeBtn);
    expect(onClose).toHaveBeenCalled();
  });
});
