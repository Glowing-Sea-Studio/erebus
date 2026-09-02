import { render, fireEvent, act } from '@testing-library/react';
import { ToastProvider, useToast } from './Toast';

const TestComponent = () => {
  const { addToast } = useToast();
  return <button onClick={() => addToast('Test toast')}>Show Toast</button>;
};

describe('Toast', () => {
  it('shows and hides toast', () => {
    vi.useFakeTimers();
    const { getByText, queryByText } = render(
      <ToastProvider>
        <TestComponent />
      </ToastProvider>
    );

    fireEvent.click(getByText('Show Toast'));
    expect(getByText('Test toast')).toBeInTheDocument();

    act(() => {
      vi.advanceTimersByTime(3000);
    });

    expect(queryByText('Test toast')).not.toBeInTheDocument();
    vi.useRealTimers();
  });
});