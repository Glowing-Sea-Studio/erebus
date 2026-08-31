'use client';

import { forwardRef, HTMLAttributes, ReactNode, useState, cloneElement, isValidElement } from 'react';
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

export interface MenuProps {
  trigger: ReactNode;
  children: ReactNode;
  placement?: Placement;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  className?: string;
}

export function Menu({ trigger, children, placement = 'bottom-start', open: controlledOpen, onOpenChange, className }: MenuProps) {
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
              className={cn('erb-menu', className)}
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

export const MenuItem = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      role="menuitem"
      className={cn('erb-menu-item', className)}
      {...props}
    />
  )
);
MenuItem.displayName = 'MenuItem';

export const MenuSeparator = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      role="separator"
      className={cn('erb-menu-separator', className)}
      {...props}
    />
  )
);
MenuSeparator.displayName = 'MenuSeparator';
