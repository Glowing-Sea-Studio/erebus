import type { Meta, StoryObj } from '@storybook/react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalTitle, ModalDescription, ModalBody, ModalFooter } from './index';
import { useState } from 'react';

const meta = {
  title: 'React/Modal',
  component: Modal,
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <button className="erb-button" data-variant="solid" data-size="md" onClick={() => setOpen(true)}>Open Modal</button>
        <Modal open={open} onOpenChange={setOpen}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              <ModalTitle>Action Required</ModalTitle>
              <ModalDescription>Please confirm your action below.</ModalDescription>
            </ModalHeader>
            <ModalBody>
              <p>Are you sure you want to proceed?</p>
            </ModalBody>
            <ModalFooter>
              <button className="erb-button" data-variant="ghost" data-size="md" onClick={() => setOpen(false)}>Cancel</button>
              <button className="erb-button" data-variant="solid" data-size="md" onClick={() => setOpen(false)}>Confirm</button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  }
};
