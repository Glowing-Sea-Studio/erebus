import * as react from 'react';
import react__default, { ComponentPropsWithRef, ElementType, ButtonHTMLAttributes, HTMLAttributes, InputHTMLAttributes, ReactNode, TextareaHTMLAttributes, FieldsetHTMLAttributes, SelectHTMLAttributes } from 'react';
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
declare function Menu({ trigger, children, placement, open: controlledOpen, onOpenChange, className }: MenuProps): react__default.JSX.Element;
declare const MenuItem: react__default.ForwardRefExoticComponent<react__default.HTMLAttributes<HTMLDivElement> & react__default.RefAttributes<HTMLDivElement>>;
declare const MenuSeparator: react__default.ForwardRefExoticComponent<react__default.HTMLAttributes<HTMLDivElement> & react__default.RefAttributes<HTMLDivElement>>;

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

declare class LayerManagerImpl {
    private stack;
    constructor();
    register(id: string, element: HTMLElement, close: () => void): void;
    unregister(id: string): void;
    private handleKeyDown;
    private updateInert;
    private updateZIndex;
}
declare const LayerManager: LayerManagerImpl;
declare function useLayerEscape(isOpen: boolean, onClose: () => void, layerElement: HTMLElement | null, id: string): void;

interface PortalProps {
    children: ReactNode;
    container?: HTMLElement | null;
}
declare function Portal({ children, container }: PortalProps): react.ReactPortal | null;

interface FocusTrapProps {
    children: react__default.ReactElement;
    active?: boolean;
}
declare function FocusTrap({ children, active }: FocusTrapProps): react__default.ReactElement<any, string | react__default.JSXElementConstructor<any>>;

declare const useScrollLock: (lock: boolean) => void;
declare function ScrollLock({ lock }: {
    lock?: boolean;
}): null;

declare function useLayerTransition(isOpen: boolean, duration?: number): {
    shouldRender: boolean;
    state: "open" | "closed";
};

interface BadgeProps extends react__default.HTMLAttributes<HTMLSpanElement> {
    variant?: 'solid' | 'outline' | 'soft';
    color?: 'primary' | 'success' | 'warning' | 'danger' | 'neutral';
    size?: 'sm' | 'md' | 'lg';
    shape?: 'rounded' | 'pill';
}
declare const Badge: react__default.ForwardRefExoticComponent<BadgeProps & react__default.RefAttributes<HTMLSpanElement>>;

interface TagProps extends react__default.HTMLAttributes<HTMLSpanElement> {
    variant?: 'solid' | 'outline' | 'soft';
    color?: 'primary' | 'success' | 'warning' | 'danger' | 'neutral';
    size?: 'sm' | 'md' | 'lg';
    closable?: boolean;
    onClose?: () => void;
}
declare const Tag: react__default.ForwardRefExoticComponent<TagProps & react__default.RefAttributes<HTMLSpanElement>>;

interface SpinnerProps extends react__default.HTMLAttributes<HTMLDivElement> {
    size?: number | string;
}
declare const Spinner: react__default.ForwardRefExoticComponent<SpinnerProps & react__default.RefAttributes<HTMLDivElement>>;

interface SkeletonProps extends react__default.HTMLAttributes<HTMLDivElement> {
    variant?: 'rect' | 'circle';
    width?: number | string;
    height?: number | string;
}
declare const Skeleton: react__default.ForwardRefExoticComponent<SkeletonProps & react__default.RefAttributes<HTMLDivElement>>;

interface FieldProps extends react__default.HTMLAttributes<HTMLDivElement> {
    label?: string;
    hint?: string;
    error?: string;
    horizontal?: boolean;
    required?: boolean;
    disabled?: boolean;
}
declare const Field: react__default.ForwardRefExoticComponent<FieldProps & react__default.RefAttributes<HTMLDivElement>>;

interface LabelProps extends react__default.LabelHTMLAttributes<HTMLLabelElement> {
    disabled?: boolean;
    required?: boolean;
}
declare const Label: react__default.ForwardRefExoticComponent<LabelProps & react__default.RefAttributes<HTMLLabelElement>>;

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    size?: 'sm' | 'md' | 'lg';
    variant?: 'solid' | 'outline' | 'ghost';
    'aria-label': string;
}
declare const IconButton: react.ForwardRefExoticComponent<IconButtonProps & react.RefAttributes<HTMLButtonElement>>;

interface ButtonGroupProps extends HTMLAttributes<HTMLDivElement> {
    orientation?: 'horizontal' | 'vertical';
}
declare const ButtonGroup: react.ForwardRefExoticComponent<ButtonGroupProps & react.RefAttributes<HTMLDivElement>>;

interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
    src?: string;
    name?: string;
    size?: 'sm' | 'md' | 'lg';
}
declare const Avatar: react.ForwardRefExoticComponent<AvatarProps & react.RefAttributes<HTMLDivElement>>;

interface AvatarGroupProps extends HTMLAttributes<HTMLDivElement> {
    max?: number;
}
declare const AvatarGroup: react.ForwardRefExoticComponent<AvatarGroupProps & react.RefAttributes<HTMLDivElement>>;

interface DividerProps extends HTMLAttributes<HTMLHRElement> {
    orientation?: 'horizontal' | 'vertical';
}
declare const Divider: react.ForwardRefExoticComponent<DividerProps & react.RefAttributes<HTMLHRElement>>;

interface KbdProps extends HTMLAttributes<HTMLElement> {
}
declare const Kbd: react.ForwardRefExoticComponent<KbdProps & react.RefAttributes<HTMLElement>>;

interface CodeProps extends HTMLAttributes<HTMLElement> {
}
declare const Code: react.ForwardRefExoticComponent<CodeProps & react.RefAttributes<HTMLElement>>;

interface CalloutProps extends HTMLAttributes<HTMLDivElement> {
    intent?: 'info' | 'success' | 'warning' | 'danger' | 'neutral';
}
declare const Callout: react.ForwardRefExoticComponent<CalloutProps & react.RefAttributes<HTMLDivElement>>;

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
    level?: 1 | 2 | 3 | 4 | 5 | 6;
}
declare const Heading: react.ForwardRefExoticComponent<HeadingProps & react.RefAttributes<HTMLHeadingElement>>;

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
    size?: 'sm' | 'md' | 'lg';
    muted?: boolean;
}
declare const Text: react.ForwardRefExoticComponent<TextProps & react.RefAttributes<HTMLParagraphElement>>;

interface ProseProps extends HTMLAttributes<HTMLDivElement> {
}
declare const Prose: react.ForwardRefExoticComponent<ProseProps & react.RefAttributes<HTMLDivElement>>;

declare const AlertDialog: typeof Modal;
type AlertDialogProps = ModalProps;
declare const AlertDialogOverlay: react.ForwardRefExoticComponent<HTMLAttributes<HTMLDivElement> & react.RefAttributes<HTMLDivElement>>;
declare const AlertDialogContent: react.ForwardRefExoticComponent<HTMLAttributes<HTMLDivElement> & react.RefAttributes<HTMLDivElement>>;
declare const AlertDialogHeader: react.ForwardRefExoticComponent<HTMLAttributes<HTMLDivElement> & react.RefAttributes<HTMLDivElement>>;
declare const AlertDialogTitle: react.ForwardRefExoticComponent<HTMLAttributes<HTMLHeadingElement> & react.RefAttributes<HTMLHeadingElement>>;
declare const AlertDialogDescription: react.ForwardRefExoticComponent<HTMLAttributes<HTMLParagraphElement> & react.RefAttributes<HTMLParagraphElement>>;
declare const AlertDialogBody: react.ForwardRefExoticComponent<HTMLAttributes<HTMLDivElement> & react.RefAttributes<HTMLDivElement>>;
declare const AlertDialogFooter: react.ForwardRefExoticComponent<HTMLAttributes<HTMLDivElement> & react.RefAttributes<HTMLDivElement>>;

declare const Drawer: typeof Modal;
type DrawerProps = ModalProps;
declare const DrawerOverlay: react.ForwardRefExoticComponent<HTMLAttributes<HTMLDivElement> & react.RefAttributes<HTMLDivElement>>;
declare const DrawerContent: react.ForwardRefExoticComponent<HTMLAttributes<HTMLDivElement> & react.RefAttributes<HTMLDivElement>>;
declare const DrawerHeader: react.ForwardRefExoticComponent<HTMLAttributes<HTMLDivElement> & react.RefAttributes<HTMLDivElement>>;
declare const DrawerTitle: react.ForwardRefExoticComponent<HTMLAttributes<HTMLHeadingElement> & react.RefAttributes<HTMLHeadingElement>>;
declare const DrawerDescription: react.ForwardRefExoticComponent<HTMLAttributes<HTMLParagraphElement> & react.RefAttributes<HTMLParagraphElement>>;
declare const DrawerBody: react.ForwardRefExoticComponent<HTMLAttributes<HTMLDivElement> & react.RefAttributes<HTMLDivElement>>;
declare const DrawerFooter: react.ForwardRefExoticComponent<HTMLAttributes<HTMLDivElement> & react.RefAttributes<HTMLDivElement>>;

interface PopoverProps {
    trigger: ReactNode;
    children: ReactNode;
    placement?: Placement;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    className?: string;
}
declare function Popover({ trigger, children, placement, open: controlledOpen, onOpenChange, className }: PopoverProps): react__default.JSX.Element;

interface TooltipProps {
    trigger: ReactNode;
    content: ReactNode;
    placement?: Placement;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    className?: string;
}
declare function Tooltip({ trigger, content, placement, open: controlledOpen, onOpenChange, className }: TooltipProps): react__default.JSX.Element;

interface SidebarProps extends react__default.HTMLAttributes<HTMLDivElement> {
    children?: react__default.ReactNode;
}
declare const Sidebar: react__default.FC<SidebarProps>;

interface AppShellProps extends react__default.HTMLAttributes<HTMLDivElement> {
    children?: react__default.ReactNode;
}
declare const AppShell: react__default.FC<AppShellProps>;

interface MobileNavProps extends react__default.HTMLAttributes<HTMLDivElement> {
    children?: react__default.ReactNode;
}
declare const MobileNav: react__default.FC<MobileNavProps>;

interface BottomNavProps extends react__default.HTMLAttributes<HTMLDivElement> {
    children?: react__default.ReactNode;
}
declare const BottomNav: react__default.FC<BottomNavProps>;

interface BreadcrumbProps {
    children: react__default.ReactNode;
    ariaLabel?: string;
}
declare const Breadcrumb: ({ children, ariaLabel }: BreadcrumbProps) => react__default.JSX.Element;

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}
declare const Pagination: ({ currentPage, totalPages, onPageChange }: PaginationProps) => react.JSX.Element;

interface StepperProps {
    currentStep: number;
    steps: string[];
}
declare const Stepper: ({ currentStep, steps }: StepperProps) => react.JSX.Element;

interface AccordionProps {
    title: react__default.ReactNode;
    children: react__default.ReactNode;
    defaultExpanded?: boolean;
}
declare const Accordion: ({ title, children, defaultExpanded }: AccordionProps) => react__default.JSX.Element;

interface SkipLinkProps extends react__default.AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
    children: react__default.ReactNode;
}
declare const SkipLink: react__default.ForwardRefExoticComponent<SkipLinkProps & react__default.RefAttributes<HTMLAnchorElement>>;

interface ComboboxOption {
    value: string;
    label: string;
}
interface ComboboxProps extends Omit<react__default.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'> {
    options: ComboboxOption[];
    value?: string;
    onChange?: (value: string) => void;
    label?: string;
    error?: string;
}
declare const Combobox: react__default.ForwardRefExoticComponent<ComboboxProps & react__default.RefAttributes<HTMLInputElement>>;

interface MultiSelectOption {
    value: string;
    label: string;
}
interface MultiSelectProps extends Omit<react__default.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value' | 'type'> {
    options: MultiSelectOption[];
    value?: string[];
    onChange?: (value: string[]) => void;
    label?: string;
    error?: string;
}
declare const MultiSelect: react__default.ForwardRefExoticComponent<MultiSelectProps & react__default.RefAttributes<HTMLInputElement>>;

interface SliderProps extends Omit<react__default.HTMLAttributes<HTMLDivElement>, 'onChange'> {
    min?: number;
    max?: number;
    step?: number;
    value?: number;
    defaultValue?: number;
    onChange?: (value: number) => void;
    disabled?: boolean;
}
declare const Slider: react__default.ForwardRefExoticComponent<SliderProps & react__default.RefAttributes<HTMLDivElement>>;

interface RangeSliderProps extends Omit<react__default.HTMLAttributes<HTMLDivElement>, 'onChange' | 'defaultValue'> {
    min?: number;
    max?: number;
    step?: number;
    value?: [number, number];
    defaultValue?: [number, number];
    onChange?: (value: [number, number]) => void;
    disabled?: boolean;
}
declare const RangeSlider: react__default.ForwardRefExoticComponent<RangeSliderProps & react__default.RefAttributes<HTMLDivElement>>;

interface DatePickerProps extends Omit<react__default.InputHTMLAttributes<HTMLInputElement>, 'size'> {
    size?: 'sm' | 'md' | 'lg';
}
declare const DatePicker: react__default.ForwardRefExoticComponent<DatePickerProps & react__default.RefAttributes<HTMLInputElement>>;

interface DateRangePickerProps extends Omit<react__default.HTMLAttributes<HTMLDivElement>, 'onChange'> {
    size?: 'sm' | 'md' | 'lg';
    startDate?: string;
    endDate?: string;
    onStartDateChange?: (date: string) => void;
    onEndDateChange?: (date: string) => void;
}
declare const DateRangePicker: react__default.ForwardRefExoticComponent<DateRangePickerProps & react__default.RefAttributes<HTMLDivElement>>;

interface TimePickerProps extends Omit<react__default.InputHTMLAttributes<HTMLInputElement>, 'size'> {
    size?: 'sm' | 'md' | 'lg';
}
declare const TimePicker: react__default.ForwardRefExoticComponent<TimePickerProps & react__default.RefAttributes<HTMLInputElement>>;

interface ColorPickerProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange'> {
    value?: string;
    onChange?: (color: string) => void;
    className?: string;
}
declare const ColorPicker: react__default.FC<ColorPickerProps>;

interface FileUploadProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange'> {
    onFileSelect?: (files: FileList | null) => void;
    className?: string;
    children?: react__default.ReactNode;
}
declare const FileUpload: react__default.FC<FileUploadProps>;

interface PinInputProps {
    length?: number;
    value?: string;
    onChange?: (value: string) => void;
    disabled?: boolean;
}
declare const PinInput: react__default.ForwardRefExoticComponent<PinInputProps & react__default.RefAttributes<HTMLDivElement>>;

interface TagsInputProps {
    tags?: string[];
    onChange?: (tags: string[]) => void;
    disabled?: boolean;
    placeholder?: string;
}
declare const TagsInput: react.ForwardRefExoticComponent<TagsInputProps & react.RefAttributes<HTMLDivElement>>;

interface RatingProps {
    max?: number;
    value?: number;
    onChange?: (value: number) => void;
    disabled?: boolean;
}
declare const Rating: react.ForwardRefExoticComponent<RatingProps & react.RefAttributes<HTMLDivElement>>;

interface TableProps extends react__default.TableHTMLAttributes<HTMLTableElement> {
}
declare const Table: react__default.ForwardRefExoticComponent<TableProps & react__default.RefAttributes<HTMLTableElement>>;
interface TableHeadProps extends react__default.HTMLAttributes<HTMLTableSectionElement> {
}
declare const TableHead: react__default.ForwardRefExoticComponent<TableHeadProps & react__default.RefAttributes<HTMLTableSectionElement>>;
interface TableBodyProps extends react__default.HTMLAttributes<HTMLTableSectionElement> {
}
declare const TableBody: react__default.ForwardRefExoticComponent<TableBodyProps & react__default.RefAttributes<HTMLTableSectionElement>>;
interface TableRowProps extends react__default.HTMLAttributes<HTMLTableRowElement> {
}
declare const TableRow: react__default.ForwardRefExoticComponent<TableRowProps & react__default.RefAttributes<HTMLTableRowElement>>;
interface TableCellProps extends react__default.TdHTMLAttributes<HTMLTableCellElement> {
}
declare const TableCell: react__default.ForwardRefExoticComponent<TableCellProps & react__default.RefAttributes<HTMLTableCellElement>>;
interface TableHeaderCellProps extends react__default.ThHTMLAttributes<HTMLTableCellElement> {
}
declare const TableHeaderCell: react__default.ForwardRefExoticComponent<TableHeaderCellProps & react__default.RefAttributes<HTMLTableCellElement>>;

interface ListProps extends react__default.HTMLAttributes<HTMLUListElement | HTMLOListElement> {
    as?: 'ul' | 'ol';
}
declare const List: react__default.ForwardRefExoticComponent<ListProps & react__default.RefAttributes<HTMLElement>>;
interface ListItemProps extends react__default.LiHTMLAttributes<HTMLLIElement> {
}
declare const ListItem: react__default.ForwardRefExoticComponent<ListItemProps & react__default.RefAttributes<HTMLLIElement>>;

interface DescriptionListProps extends react__default.HTMLAttributes<HTMLDListElement> {
}
declare const DescriptionList: react__default.ForwardRefExoticComponent<DescriptionListProps & react__default.RefAttributes<HTMLDListElement>>;
interface DescriptionTermProps extends react__default.HTMLAttributes<HTMLElement> {
}
declare const DescriptionTerm: react__default.ForwardRefExoticComponent<DescriptionTermProps & react__default.RefAttributes<HTMLElement>>;
interface DescriptionDetailsProps extends react__default.HTMLAttributes<HTMLElement> {
}
declare const DescriptionDetails: react__default.ForwardRefExoticComponent<DescriptionDetailsProps & react__default.RefAttributes<HTMLElement>>;

interface StatProps extends react__default.HTMLAttributes<HTMLDivElement> {
    label: react__default.ReactNode;
    value: react__default.ReactNode;
    helpText?: react__default.ReactNode;
}
declare const Stat: react__default.ForwardRefExoticComponent<StatProps & react__default.RefAttributes<HTMLDivElement>>;

interface TimelineItemProps {
    title: string;
    description?: string;
    isLast?: boolean;
}
declare const TimelineItem: react__default.FC<TimelineItemProps>;
interface TimelineProps {
    children: react__default.ReactNode;
    className?: string;
}
declare const Timeline: react__default.FC<TimelineProps>;

interface EmptyStateProps {
    title: string;
    description?: string;
    icon?: react__default.ReactNode;
    children?: react__default.ReactNode;
    className?: string;
}
declare const EmptyState: react__default.FC<EmptyStateProps>;

interface ErrorStateProps {
    title: string;
    description?: string;
    className?: string;
    onRetry?: () => void;
}
declare const ErrorState: react__default.FC<ErrorStateProps>;

interface ToastProps {
    id: string;
    message: string;
    onClose: () => void;
}
declare const Toast: react__default.FC<ToastProps>;
interface ToastContextType {
    addToast: (message: string) => void;
}
declare const ToastProvider: react__default.FC<{
    children: ReactNode;
}>;
declare const useToast: () => ToastContextType;

interface BannerProps extends react__default.HTMLAttributes<HTMLDivElement> {
    variant?: 'info' | 'success' | 'warning' | 'error';
}
declare const Banner: react__default.ForwardRefExoticComponent<BannerProps & react__default.RefAttributes<HTMLDivElement>>;

interface ProgressProps extends react__default.HTMLAttributes<HTMLDivElement> {
    value: number;
    max?: number;
}
declare const Progress: react__default.ForwardRefExoticComponent<ProgressProps & react__default.RefAttributes<HTMLDivElement>>;

interface LoadingOverlayProps extends react__default.HTMLAttributes<HTMLDivElement> {
    active?: boolean;
}
declare const LoadingOverlay: react__default.ForwardRefExoticComponent<LoadingOverlayProps & react__default.RefAttributes<HTMLDivElement>>;

interface ImageProps extends react__default.ImgHTMLAttributes<HTMLImageElement> {
    lazy?: boolean;
    fallbackText?: string;
}
declare const Image: react__default.ForwardRefExoticComponent<ImageProps & react__default.RefAttributes<HTMLImageElement>>;

interface GalleryProps {
    images: {
        src: string;
        alt: string;
    }[];
    onImageClick?: (index: number) => void;
}
declare const Gallery: react__default.FC<GalleryProps>;

interface LightboxProps {
    isOpen: boolean;
    onClose: () => void;
    imageSrc?: string;
    imageAlt?: string;
}
declare const Lightbox: react__default.FC<LightboxProps>;

interface CarouselProps {
    images: {
        src: string;
        alt: string;
    }[];
}
declare const Carousel: react__default.FC<CarouselProps>;

interface HeroProps {
    className?: string;
    children?: react__default.ReactNode;
}
declare const Hero: react__default.FC<HeroProps>;

interface FeatureGridProps {
    className?: string;
    children?: react__default.ReactNode;
}
declare const FeatureGrid: react__default.FC<FeatureGridProps>;

interface CTAProps {
    className?: string;
    children?: react__default.ReactNode;
}
declare const CTA: react__default.FC<CTAProps>;

interface TestimonialProps {
    className?: string;
    children?: react__default.ReactNode;
}
declare const Testimonial: react__default.FC<TestimonialProps>;

interface LogoCloudProps {
    className?: string;
    children?: react__default.ReactNode;
}
declare const LogoCloud: react__default.FC<LogoCloudProps>;

interface FAQProps extends HTMLAttributes<HTMLDivElement> {
}
declare const FAQ: react.ForwardRefExoticComponent<FAQProps & react.RefAttributes<HTMLDivElement>>;

interface CommandPaletteProps extends HTMLAttributes<HTMLDivElement> {
}
declare const CommandPalette: react.ForwardRefExoticComponent<CommandPaletteProps & react.RefAttributes<HTMLDivElement>>;

export { Accordion, type AccordionProps, Alert, AlertDescription, AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, type AlertDialogProps, AlertDialogTitle, type AlertProps, AlertTitle, AppShell, type AppShellProps, AspectRatio, type AspectRatioProps, Avatar, AvatarGroup, type AvatarGroupProps, type AvatarProps, Badge, type BadgeProps, Banner, type BannerProps, BottomNav, type BottomNavProps, Breadcrumb, type BreadcrumbProps, Button, ButtonGroup, type ButtonGroupProps, type ButtonProps, CTA, type CTAProps, Callout, type CalloutProps, Card, CardBody, CardDescription, CardFooter, CardHeader, CardTitle, Carousel, type CarouselProps, Center, type CenterProps, Checkbox, CheckboxGroup, CheckboxGroupContext, type CheckboxGroupContextValue, type CheckboxGroupProps, type CheckboxProps, Code, type CodeProps, ColorPicker, type ColorPickerProps, Combobox, type ComboboxOption, type ComboboxProps, CommandPalette, type CommandPaletteProps, Container, type ContainerProps, DatePicker, type DatePickerProps, DateRangePicker, type DateRangePickerProps, DescriptionDetails, type DescriptionDetailsProps, DescriptionList, type DescriptionListProps, DescriptionTerm, type DescriptionTermProps, Divider, type DividerProps, Drawer, DrawerBody, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerOverlay, type DrawerProps, DrawerTitle, EmptyState, type EmptyStateProps, ErrorState, type ErrorStateProps, FAQ, type FAQProps, FeatureGrid, type FeatureGridProps, Field, type FieldProps, FileUpload, type FileUploadProps, Flex, type FlexProps, FocusTrap, type FocusTrapProps, Footer, Gallery, type GalleryProps, Grid, GridItem, type GridItemProps, type GridProps, Header, Heading, type HeadingProps, Hero, type HeroProps, IconButton, type IconButtonProps, Image, type ImageProps, Inline, type InlineProps, Input, type InputProps, Kbd, type KbdProps, Label, type LabelProps, LayerManager, Lightbox, type LightboxProps, List, ListItem, type ListItemProps, type ListProps, LoadingOverlay, type LoadingOverlayProps, LogoCloud, type LogoCloudProps, Menu, MenuItem, type MenuProps, MenuSeparator, MobileNav, type MobileNavProps, Modal, ModalBody, ModalContent, ModalDescription, ModalFooter, ModalHeader, ModalOverlay, type ModalProps, ModalTitle, MultiSelect, type MultiSelectOption, type MultiSelectProps, NumberInput, type NumberInputProps, Pagination, type PaginationProps, Panel, PanelBody, PanelFooter, PanelHeader, PanelOverlay, type PanelOverlayProps, type PanelProps, PanelTitle, PinInput, type PinInputProps, Popover, type PopoverProps, Portal, type PortalProps, Progress, type ProgressProps, Prose, type ProseProps, Radio, RadioGroup, RadioGroupContext, type RadioGroupContextValue, type RadioGroupProps, type RadioProps, RangeSlider, type RangeSliderProps, Rating, type RatingProps, ScrollArea, type ScrollAreaProps, ScrollLock, SearchInput, type SearchInputProps, Section, type SectionProps, Select, type SelectProps, Sidebar, type SidebarProps, Skeleton, type SkeletonProps, SkipLink, type SkipLinkProps, Slider, type SliderProps, Spacer, type SpacerProps, Spinner, type SpinnerProps, Split, type SplitProps, Stack, type StackProps, Stat, type StatProps, Stepper, type StepperProps, Switch, type SwitchProps, Tab, type TabProps, Table, TableBody, type TableBodyProps, TableCell, type TableCellProps, TableHead, type TableHeadProps, TableHeaderCell, type TableHeaderCellProps, type TableProps, TableRow, type TableRowProps, Tabs, TabsList, TabsPanel, type TabsPanelProps, type TabsProps, Tag, type TagProps, TagsInput, type TagsInputProps, Testimonial, type TestimonialProps, Text, type TextProps, Textarea, type TextareaProps, TimePicker, type TimePickerProps, Timeline, TimelineItem, type TimelineItemProps, type TimelineProps, Toast, type ToastProps, ToastProvider, Tooltip, type TooltipProps, useCheckboxGroup, useLayerEscape, useLayerTransition, useModal, useRadioGroup, useScrollLock, useTabs, useToast };
