import { render, screen, fireEvent } from '@testing-library/react';
import { useState } from 'react';
import { 
  AlertDialog, 
  AlertDialogOverlay, 
  AlertDialogContent, 
  AlertDialogHeader, 
  AlertDialogTitle, 
  AlertDialogDescription, 
  AlertDialogBody, 
  AlertDialogFooter 
} from './AlertDialog';

describe('AlertDialog', () => {
  it('renders and prevents overlay click from closing', () => {
    const TestComponent = () => {
      const [open, setOpen] = useState(true);
      return (
        <AlertDialog open={open} onOpenChange={setOpen}>
          <AlertDialogOverlay data-testid="overlay" />
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Title</AlertDialogTitle>
              <AlertDialogDescription>Description</AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogBody>Body</AlertDialogBody>
            <AlertDialogFooter>Footer</AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      );
    };

    render(<TestComponent />);
    
    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(screen.getByText('Description')).toBeInTheDocument();
    expect(screen.getByText('Body')).toBeInTheDocument();
    expect(screen.getByText('Footer')).toBeInTheDocument();

    const overlay = screen.getByTestId('overlay');
    fireEvent.click(overlay);

    // It should not close, so it should still be in the document
    expect(screen.getByText('Title')).toBeInTheDocument();
  });
});
