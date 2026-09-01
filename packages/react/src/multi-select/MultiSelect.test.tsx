import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MultiSelect } from './MultiSelect';

const options = [
  { label: 'React', value: 'react' },
  { label: 'Vue', value: 'vue' },
];

describe('MultiSelect', () => {
  it('renders correctly', () => {
    render(<MultiSelect label="Frameworks" options={options} />);
    expect(screen.getByRole('combobox')).toBeInTheDocument();
    expect(screen.getByText('Frameworks')).toBeInTheDocument();
  });

  it('displays selected tags', () => {
    render(<MultiSelect options={options} value={['react']} />);
    expect(screen.getByText('React')).toBeInTheDocument();
  });

  it('calls onChange when an option is selected', () => {
    const handleChange = vi.fn();
    render(<MultiSelect options={options} onChange={handleChange} />);
    const input = screen.getByRole('combobox');
    
    fireEvent.focus(input);
    const option = screen.getByText('React');
    fireEvent.click(option);
    
    expect(handleChange).toHaveBeenCalledWith(['react']);
  });

  it('calls onChange when a tag is removed', () => {
    const handleChange = vi.fn();
    render(<MultiSelect options={options} value={['react']} onChange={handleChange} />);
    
    const removeButton = screen.getByLabelText('Remove React');
    fireEvent.click(removeButton);
    
    expect(handleChange).toHaveBeenCalledWith([]);
  });
});
