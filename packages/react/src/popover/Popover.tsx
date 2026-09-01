import React from 'react';
'use client';

import { ReactNode, useState, cloneElement, isValidElement } from 'react';
import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  useClick,
  useDismiss,
  useRole,
  useInteractions,
  FloatingPortal,
  Placement,
  FloatingFocusManager
} from '@floating-ui/react';
import { cn } from '../utils';

export interface PopoverProps {
  trigger: ReactNode;
  children: ReactNode;
  placement?: Placement;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  className?: string;
}

export function Popover({ trigger, children, placement = 'bottom', open: controlledOpen, onOpenChange, className }: PopoverProps) {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(false);
  const open = controlledOpen !== undefined ? controlledOpen : uncontrolledOpen;

  const setOpen = (open: boolean) => {
    setUncontrolledOpen(open);
    onOpenChange?.(open);
  };

  const { refs, floatingStyles, context } = useFloating({
    open,
    onOpenChange: setOpen,
    placement,
    whileElementsMounted: autoUpdate,
    middleware: [offset(4), flip(), shift()],
  });

  const click = useClick(context);
  const dismiss = useDismiss(context);
  const role = useRole(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    dismiss,
    role,
  ]);

  return (
    <>
      {isValidElement(trigger) && cloneElement(trigger as React.ReactElement, {
        ref: refs.setReference,
        ...getReferenceProps((trigger.props as any) || {}),
      })}
      
      {open && (
        <FloatingPortal>
          <FloatingFocusManager context={context} modal={false}>
            <div
              ref={refs.setFloating}
              style={floatingStyles}
              className={cn('erb-popover', className)}
              {...getFloatingProps()}
            >
              {children}
            </div>
          </FloatingFocusManager>
        </FloatingPortal>
      )}
    </>
  );
}
