import React from 'react';
'use client';

import { ReactNode, useState, cloneElement, isValidElement } from 'react';
import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  useHover,
  useFocus,
  useDismiss,
  useRole,
  useInteractions,
  FloatingPortal,
  Placement,
} from '@floating-ui/react';
import { cn } from '../utils';

export interface TooltipProps {
  trigger: ReactNode;
  content: ReactNode;
  placement?: Placement;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  className?: string;
}

export function Tooltip({ trigger, content, placement = 'top', open: controlledOpen, onOpenChange, className }: TooltipProps) {
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

  const hover = useHover(context, { move: false });
  const focus = useFocus(context);
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: 'tooltip' });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    hover,
    focus,
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
          <div
            ref={refs.setFloating}
            style={floatingStyles}
            className={cn('erb-tooltip', className)}
            {...getFloatingProps()}
          >
            {content}
          </div>
        </FloatingPortal>
      )}
    </>
  );
}
