import { render, screen, fireEvent } from '@testing-library/react';
import { TagsInput } from './TagsInput';

describe('TagsInput', () => {
  it('renders correctly', () => {
    render(<TagsInput tags={['React', 'Angular']} />);
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('Angular')).toBeInTheDocument();
  });

  it('adds and removes tags', () => {
    const handleChange = jest.fn();
    render(<TagsInput tags={['React']} onChange={handleChange} />);
    
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'Vue' } });
    fireEvent.keyDown(input, { key: 'Enter' });
    
    expect(handleChange).toHaveBeenCalledWith(['React', 'Vue']);
    
    const removeBtn = screen.getByLabelText('Remove React');
    fireEvent.click(removeBtn);
    expect(handleChange).toHaveBeenCalledWith([]);
  });
});
