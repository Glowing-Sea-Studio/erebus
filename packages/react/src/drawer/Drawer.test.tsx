import { render, screen } from '@testing-library/react';
import { useState } from 'react';
import { 
  Drawer, 
  DrawerOverlay, 
  DrawerContent, 
  DrawerHeader, 
  DrawerTitle, 
  DrawerDescription, 
  DrawerBody, 
  DrawerFooter 
} from './Drawer';

describe('Drawer', () => {
  it('renders correctly', () => {
    const TestComponent = () => {
      const [open, setOpen] = useState(true);
      return (
        <Drawer open={open} onOpenChange={setOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Title</DrawerTitle>
              <DrawerDescription>Description</DrawerDescription>
            </DrawerHeader>
            <DrawerBody>Body</DrawerBody>
            <DrawerFooter>Footer</DrawerFooter>
          </DrawerContent>
        </Drawer>
      );
    };

    render(<TestComponent />);
    
    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(screen.getByText('Description')).toBeInTheDocument();
    expect(screen.getByText('Body')).toBeInTheDocument();
    expect(screen.getByText('Footer')).toBeInTheDocument();
  });
});
