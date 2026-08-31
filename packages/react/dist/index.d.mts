import * as react from 'react';
import { ComponentPropsWithRef, ElementType, ButtonHTMLAttributes, HTMLAttributes, InputHTMLAttributes, ReactNode, TextareaHTMLAttributes, FieldsetHTMLAttributes, SelectHTMLAttributes } from 'react';
import { Placement } from '@floating-ui/react';

interface ContainerProps extends ComponentPropsWithRef<'div'> {
    as?: ElementType;
}
declare const Container: react.ForwardRefExoticComponent<Omit<ContainerProps, "ref"> & react.RefAttributes<HTMLElement>>;

type ResponsiveValue<T> = T | {
    base?: T;
    sm?: T;
    md?: T;
    lg?: T;
    xl?: T;
    '2xl'?: T;
};

interface GridProps extends ComponentPropsWithRef<'div'> {
    as?: ElementType;
    cols?: ResponsiveValue<number>;
    gap?: ResponsiveValue<number>;
    align?: ResponsiveValue<'start' | 'end' | 'center' | 'stretch'>;
    justify?: ResponsiveValue<'start' | 'end' | 'center' | 'stretch'>;
}
declare const Grid: react.ForwardRefExoticComponent<Omit<GridProps, "ref"> & react.RefAttributes<HTMLElement>>;

interface GridItemProps extends ComponentPropsWithRef<'div'> {
    as?: ElementType;
    colSpan?: ResponsiveValue<number>;
    rowSpan?: ResponsiveValue<number>;
}
declare const GridItem: react.ForwardRefExoticComponent<Omit<GridItemProps, "ref"> & react.RefAttributes<HTMLElement>>;

interface FlexProps extends ComponentPropsWithRef<'div'> {
    as?: ElementType;
    direction?: ResponsiveValue<'row' | 'row-reverse' | 'column' | 'column-reverse'>;
    gap?: ResponsiveValue<number>;
    align?: ResponsiveValue<'start' | 'end' | 'center' | 'stretch' | 'baseline'>;
    justify?: ResponsiveValue<'start' | 'end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'>;
    wrap?: ResponsiveValue<'nowrap' | 'wrap' | 'wrap-reverse'>;
}
declare const Flex: react.ForwardRefExoticComponent<Omit<FlexProps, "ref"> & react.RefAttributes<HTMLElement>>;

interface StackProps extends ComponentPropsWithRef<'div'> {
    as?: ElementType;
    gap?: ResponsiveValue<number>;
    align?: ResponsiveValue<'start' | 'end' | 'center' | 'stretch' | 'baseline'>;
    justify?: ResponsiveValue<'start' | 'end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'>;
}
declare const Stack: react.ForwardRefExoticComponent<Omit<StackProps, "ref"> & react.RefAttributes<HTMLElement>>;

interface InlineProps extends ComponentPropsWithRef<'div'> {
    as?: ElementType;
    gap?: ResponsiveValue<number>;
    align?: ResponsiveValue<'start' | 'end' | 'center' | 'stretch' | 'baseline'>;
    justify?: ResponsiveValue<'start' | 'end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'>;
}
declare const Inline: react.ForwardRefExoticComponent<Omit<InlineProps, "ref"> & react.RefAttributes<HTMLElement>>;

interface SpacerProps extends ComponentPropsWithRef<'div'> {
    as?: ElementType;
}
declare const Spacer: react.ForwardRefExoticComponent<Omit<SpacerProps, "ref"> & react.RefAttributes<HTMLElement>>;

interface CenterProps extends ComponentPropsWithRef<'div'> {
    as?: ElementType;
    inline?: boolean;
}
declare const Center: react.ForwardRefExoticComponent<Omit<CenterProps, "ref"> & react.RefAttributes<HTMLElement>>;

interface AspectRatioProps extends ComponentPropsWithRef<'div'> {
    as?: ElementType;
    ratio?: number;
}
declare const AspectRatio: react.ForwardRefExoticComponent<Omit<AspectRatioProps, "ref"> & react.RefAttributes<HTMLElement>>;

interface SplitProps extends ComponentPropsWithRef<'div'> {
    as?: ElementType;
    gap?: ResponsiveValue<number>;
    fraction?: '1/2' | '1/3' | '2/3' | '1/4' | '3/4' | 'auto-start' | 'auto-end';
    align?: ResponsiveValue<'start' | 'end' | 'center' | 'stretch'>;
}
declare const Split: react.ForwardRefExoticComponent<Omit<SplitProps, "ref"> & react.RefAttributes<HTMLElement>>;

interface SectionProps extends ComponentPropsWithRef<'section'> {
    as?: ElementType;
}
declare const Section: react.ForwardRefExoticComponent<Omit<SectionProps, "ref"> & react.RefAttributes<HTMLElement>>;

interface ScrollAreaProps extends ComponentPropsWithRef<'div'> {
    as?: ElementType;
    maxHeight?: number | string;
}
declare const ScrollArea: react.ForwardRefExoticComponent<Omit<ScrollAreaProps, "ref"> & react.RefAttributes<HTMLElement>>;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    size?: 'sm' | 'md' | 'lg';
    variant?: 'solid' | 'outline' | 'ghost';
}
declare const Button: react.ForwardRefExoticComponent<ButtonProps & react.RefAttributes<HTMLButtonElement>>;

declare const Card: react.ForwardRefExoticComponent<HTMLAttributes<HTMLDivElement> & react.RefAttributes<HTMLDivElement>>;
declare const CardHeader: react.ForwardRefExoticComponent<HTMLAttributes<HTMLDivElement> & react.RefAttributes<HTMLDivElement>>;
declare const CardTitle: react.ForwardRefExoticComponent<HTMLAttributes<HTMLHeadingElement> & react.RefAttributes<HTMLHeadingElement>>;
declare const CardDescription: react.ForwardRefExoticComponent<HTMLAttributes<HTMLParagraphElement> & react.RefAttributes<HTMLParagraphElement>>;
declare const CardBody: react.ForwardRefExoticComponent<HTMLAttributes<HTMLDivElement> & react.RefAttributes<HTMLDivElement>>;
declare const CardFooter: react.ForwardRefExoticComponent<HTMLAttributes<HTMLDivElement> & react.RefAttributes<HTMLDivElement>>;

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    size?: 'sm' | 'md' | 'lg';
    label?: string;
    error?: string;
}
declare const Input: react.ForwardRefExoticComponent<InputProps & react.RefAttributes<HTMLInputElement>>;

interface AlertProps extends HTMLAttributes<HTMLDivElement> {
    intent?: 'info' | 'success' | 'warning' | 'danger';
}
declare const Alert: react.ForwardRefExoticComponent<AlertProps & react.RefAttributes<HTMLDivElement>>;
declare const AlertTitle: react.ForwardRefExoticComponent<HTMLAttributes<HTMLHeadingElement> & react.RefAttributes<HTMLHeadingElement>>;
declare const AlertDescription: react.ForwardRefExoticComponent<HTMLAttributes<HTMLParagraphElement> & react.RefAttributes<HTMLParagraphElement>>;

interface ModalContextValue {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}
declare function useModal(): ModalContextValue;
interface ModalProps {
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    children: ReactNode;
}
declare function Modal({ open, onOpenChange, children }: ModalProps): react.JSX.Element;
declare const ModalOverlay: react.ForwardRefExoticComponent<HTMLAttributes<HTMLDivElement> & react.RefAttributes<HTMLDivElement>>;
declare const ModalContent: react.ForwardRefExoticComponent<HTMLAttributes<HTMLDivElement> & react.RefAttributes<HTMLDivElement>>;
declare const ModalHeader: react.ForwardRefExoticComponent<HTMLAttributes<HTMLDivElement> & react.RefAttributes<HTMLDivElement>>;
declare const ModalTitle: react.ForwardRefExoticComponent<HTMLAttributes<HTMLHeadingElement> & react.RefAttributes<HTMLHeadingElement>>;
declare const ModalDescription: react.ForwardRefExoticComponent<HTMLAttributes<HTMLParagraphElement> & react.RefAttributes<HTMLParagraphElement>>;
declare const ModalBody: react.ForwardRefExoticComponent<HTMLAttributes<HTMLDivElement> & react.RefAttributes<HTMLDivElement>>;
declare const ModalFooter: react.ForwardRefExoticComponent<HTMLAttributes<HTMLDivElement> & react.RefAttributes<HTMLDivElement>>;

interface PanelProps extends HTMLAttributes<HTMLDivElement> {
    open?: boolean;
    position?: 'left' | 'right';
}
declare const Panel: react.ForwardRefExoticComponent<PanelProps & react.RefAttributes<HTMLDivElement>>;
interface PanelOverlayProps extends HTMLAttributes<HTMLDivElement> {
    open?: boolean;
    onClose?: () => void;
}
declare const PanelOverlay: react.ForwardRefExoticComponent<PanelOverlayProps & react.RefAttributes<HTMLDivElement>>;
declare const PanelHeader: react.ForwardRefExoticComponent<HTMLAttributes<HTMLDivElement> & react.RefAttributes<HTMLDivElement>>;
declare const PanelTitle: react.ForwardRefExoticComponent<HTMLAttributes<HTMLHeadingElement> & react.RefAttributes<HTMLHeadingElement>>;
declare const PanelBody: react.ForwardRefExoticComponent<HTMLAttributes<HTMLDivElement> & react.RefAttributes<HTMLDivElement>>;
declare const PanelFooter: react.ForwardRefExoticComponent<HTMLAttributes<HTMLDivElement> & react.RefAttributes<HTMLDivElement>>;

interface MenuProps {
    trigger: ReactNode;
    children: ReactNode;
    placement?: Placement;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    className?: string;
}
declare function Menu({ trigger, children, placement, open: controlledOpen, onOpenChange, className }: MenuProps): react.JSX.Element;
declare const MenuItem: react.ForwardRefExoticComponent<HTMLAttributes<HTMLDivElement> & react.RefAttributes<HTMLDivElement>>;
declare const MenuSeparator: react.ForwardRefExoticComponent<HTMLAttributes<HTMLDivElement> & react.RefAttributes<HTMLDivElement>>;

interface TabsContextValue {
    value: string;
    onValueChange: (value: string) => void;
}
declare function useTabs(): TabsContextValue;
interface TabsProps extends Omit<HTMLAttributes<HTMLDivElement>, 'defaultValue'> {
    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
}
declare const Tabs: react.ForwardRefExoticComponent<TabsProps & react.RefAttributes<HTMLDivElement>>;
declare const TabsList: react.ForwardRefExoticComponent<HTMLAttributes<HTMLDivElement> & react.RefAttributes<HTMLDivElement>>;
interface TabProps extends HTMLAttributes<HTMLButtonElement> {
    value: string;
}
declare const Tab: react.ForwardRefExoticComponent<TabProps & react.RefAttributes<HTMLButtonElement>>;
interface TabsPanelProps extends HTMLAttributes<HTMLDivElement> {
    value: string;
}
declare const TabsPanel: react.ForwardRefExoticComponent<TabsPanelProps & react.RefAttributes<HTMLDivElement>>;

declare const Header: react.ForwardRefExoticComponent<HTMLAttributes<HTMLElement> & react.RefAttributes<HTMLElement>>;

declare const Footer: react.ForwardRefExoticComponent<HTMLAttributes<HTMLElement> & react.RefAttributes<HTMLElement>>;

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: string;
}
declare const Textarea: react.ForwardRefExoticComponent<TextareaProps & react.RefAttributes<HTMLTextAreaElement>>;

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
    size?: 'sm' | 'md' | 'lg';
    label?: string;
}
declare const Checkbox: react.ForwardRefExoticComponent<CheckboxProps & react.RefAttributes<HTMLInputElement>>;

interface CheckboxGroupProps extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
    legend?: ReactNode;
    orientation?: 'vertical' | 'horizontal';
    size?: 'sm' | 'md' | 'lg';
    name?: string;
}
declare const CheckboxGroup: react.ForwardRefExoticComponent<CheckboxGroupProps & react.RefAttributes<HTMLFieldSetElement>>;

interface CheckboxGroupContextValue {
    name?: string | undefined;
    size?: 'sm' | 'md' | 'lg' | undefined;
    disabled?: boolean | undefined;
}
declare const CheckboxGroupContext: react.Context<CheckboxGroupContextValue>;
declare const useCheckboxGroup: () => CheckboxGroupContextValue;

interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
    size?: 'sm' | 'md' | 'lg';
    label?: string;
}
declare const Radio: react.ForwardRefExoticComponent<RadioProps & react.RefAttributes<HTMLInputElement>>;

interface RadioGroupProps extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
    legend?: ReactNode;
    orientation?: 'vertical' | 'horizontal';
    size?: 'sm' | 'md' | 'lg';
    name?: string;
}
declare const RadioGroup: react.ForwardRefExoticComponent<RadioGroupProps & react.RefAttributes<HTMLFieldSetElement>>;

interface RadioGroupContextValue {
    name?: string | undefined;
    size?: 'sm' | 'md' | 'lg' | undefined;
    disabled?: boolean | undefined;
}
declare const RadioGroupContext: react.Context<RadioGroupContextValue>;
declare const useRadioGroup: () => RadioGroupContextValue;

interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
    size?: 'sm' | 'md' | 'lg';
    label?: string;
}
declare const Switch: react.ForwardRefExoticComponent<SwitchProps & react.RefAttributes<HTMLInputElement>>;

interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
    size?: 'sm' | 'md' | 'lg';
    label?: string;
    error?: string;
}
declare const Select: react.ForwardRefExoticComponent<SelectProps & react.RefAttributes<HTMLSelectElement>>;

interface NumberInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
    size?: 'sm' | 'md' | 'lg';
    label?: string;
    error?: string;
}
declare const NumberInput: react.ForwardRefExoticComponent<NumberInputProps & react.RefAttributes<HTMLInputElement>>;

interface SearchInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
    size?: 'sm' | 'md' | 'lg';
    label?: string;
    error?: string;
    onClear?: () => void;
}
declare const SearchInput: react.ForwardRefExoticComponent<SearchInputProps & react.RefAttributes<HTMLInputElement>>;

export { Alert, AlertDescription, type AlertProps, AlertTitle, AspectRatio, type AspectRatioProps, Button, type ButtonProps, Card, CardBody, CardDescription, CardFooter, CardHeader, CardTitle, Center, type CenterProps, Checkbox, CheckboxGroup, CheckboxGroupContext, type CheckboxGroupContextValue, type CheckboxGroupProps, type CheckboxProps, Container, type ContainerProps, Flex, type FlexProps, Footer, Grid, GridItem, type GridItemProps, type GridProps, Header, Inline, type InlineProps, Input, type InputProps, Menu, MenuItem, type MenuProps, MenuSeparator, Modal, ModalBody, ModalContent, ModalDescription, ModalFooter, ModalHeader, ModalOverlay, type ModalProps, ModalTitle, NumberInput, type NumberInputProps, Panel, PanelBody, PanelFooter, PanelHeader, PanelOverlay, type PanelOverlayProps, type PanelProps, PanelTitle, Radio, RadioGroup, RadioGroupContext, type RadioGroupContextValue, type RadioGroupProps, type RadioProps, ScrollArea, type ScrollAreaProps, SearchInput, type SearchInputProps, Section, type SectionProps, Select, type SelectProps, Spacer, type SpacerProps, Split, type SplitProps, Stack, type StackProps, Switch, type SwitchProps, Tab, type TabProps, Tabs, TabsList, TabsPanel, type TabsPanelProps, type TabsProps, Textarea, type TextareaProps, useCheckboxGroup, useModal, useRadioGroup, useTabs };
