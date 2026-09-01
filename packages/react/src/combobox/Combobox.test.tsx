import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Combobox } from './Combobox';

const options = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
];

describe('Combobox', () => {
  it('renders correctly', () => {
    render(<Combobox label="Fruit" options={options} />);
    expect(screen.getByRole('combobox')).toBeInTheDocument();
    expect(screen.getByText('Fruit')).toBeInTheDocument();
  });

  it('filters options based on input', () => {
    render(<Combobox options={options} />);
    const input = screen.getByRole('combobox');
    
    fireEvent.change(input, { target: { value: 'app' } });
    fireEvent.focus(input);
    
    expect(screen.getByText('Apple')).toBeInTheDocument();
    expect(screen.queryByText('Banana')).not.toBeInTheDocument();
  });

  it('calls onChange when an option is selected', () => {
    const handleChange = vi.fn();
    render(<Combobox options={options} onChange={handleChange} />);
    const input = screen.getByRole('combobox');
    
    fireEvent.focus(input);
    const option = screen.getByText('Apple');
    fireEvent.click(option);
    
    expect(handleChange).toHaveBeenCalledWith('apple');
  });
});
