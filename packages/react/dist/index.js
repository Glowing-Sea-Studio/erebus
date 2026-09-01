"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Accordion: () => Accordion,
  Alert: () => Alert,
  AlertDescription: () => AlertDescription,
  AlertDialog: () => AlertDialog,
  AlertDialogBody: () => AlertDialogBody,
  AlertDialogContent: () => AlertDialogContent,
  AlertDialogDescription: () => AlertDialogDescription,
  AlertDialogFooter: () => AlertDialogFooter,
  AlertDialogHeader: () => AlertDialogHeader,
  AlertDialogOverlay: () => AlertDialogOverlay,
  AlertDialogTitle: () => AlertDialogTitle,
  AlertTitle: () => AlertTitle,
  AppShell: () => AppShell,
  AspectRatio: () => AspectRatio,
  Avatar: () => Avatar,
  AvatarGroup: () => AvatarGroup,
  Badge: () => Badge,
  Banner: () => Banner,
  BottomNav: () => BottomNav,
  Breadcrumb: () => Breadcrumb,
  Button: () => Button,
  ButtonGroup: () => ButtonGroup,
  CTA: () => CTA,
  Callout: () => Callout,
  Card: () => Card,
  CardBody: () => CardBody,
  CardDescription: () => CardDescription,
  CardFooter: () => CardFooter,
  CardHeader: () => CardHeader,
  CardTitle: () => CardTitle,
  Carousel: () => Carousel,
  Center: () => Center,
  Checkbox: () => Checkbox,
  CheckboxGroup: () => CheckboxGroup,
  CheckboxGroupContext: () => CheckboxGroupContext,
  Code: () => Code,
  ColorPicker: () => ColorPicker,
  Combobox: () => Combobox,
  CommandPalette: () => CommandPalette,
  Container: () => Container,
  DatePicker: () => DatePicker,
  DateRangePicker: () => DateRangePicker,
  DescriptionDetails: () => DescriptionDetails,
  DescriptionList: () => DescriptionList,
  DescriptionTerm: () => DescriptionTerm,
  Divider: () => Divider,
  Drawer: () => Drawer,
  DrawerBody: () => DrawerBody,
  DrawerContent: () => DrawerContent,
  DrawerDescription: () => DrawerDescription,
  DrawerFooter: () => DrawerFooter,
  DrawerHeader: () => DrawerHeader,
  DrawerOverlay: () => DrawerOverlay,
  DrawerTitle: () => DrawerTitle,
  EmptyState: () => EmptyState,
  ErrorState: () => ErrorState,
  FAQ: () => FAQ,
  FeatureGrid: () => FeatureGrid,
  Field: () => Field,
  FileUpload: () => FileUpload,
  Flex: () => Flex,
  FocusTrap: () => FocusTrap,
  Footer: () => Footer,
  Gallery: () => Gallery,
  Grid: () => Grid,
  GridItem: () => GridItem,
  Header: () => Header,
  Heading: () => Heading,
  Hero: () => Hero,
  IconButton: () => IconButton,
  Image: () => Image,
  Inline: () => Inline,
  Input: () => Input,
  Kbd: () => Kbd,
  Label: () => Label,
  LayerManager: () => LayerManager,
  Lightbox: () => Lightbox,
  List: () => List,
  ListItem: () => ListItem,
  LoadingOverlay: () => LoadingOverlay,
  LogoCloud: () => LogoCloud,
  Menu: () => Menu,
  MenuItem: () => MenuItem,
  MenuSeparator: () => MenuSeparator,
  MobileNav: () => MobileNav,
  Modal: () => Modal,
  ModalBody: () => ModalBody,
  ModalContent: () => ModalContent,
  ModalDescription: () => ModalDescription,
  ModalFooter: () => ModalFooter,
  ModalHeader: () => ModalHeader,
  ModalOverlay: () => ModalOverlay,
  ModalTitle: () => ModalTitle,
  MultiSelect: () => MultiSelect,
  NumberInput: () => NumberInput,
  Pagination: () => Pagination,
  Panel: () => Panel,
  PanelBody: () => PanelBody,
  PanelFooter: () => PanelFooter,
  PanelHeader: () => PanelHeader,
  PanelOverlay: () => PanelOverlay,
  PanelTitle: () => PanelTitle,
  PinInput: () => PinInput,
  Popover: () => Popover,
  Portal: () => Portal,
  Progress: () => Progress,
  Prose: () => Prose,
  Radio: () => Radio,
  RadioGroup: () => RadioGroup,
  RadioGroupContext: () => RadioGroupContext,
  RangeSlider: () => RangeSlider,
  Rating: () => Rating,
  ScrollArea: () => ScrollArea,
  ScrollLock: () => ScrollLock,
  SearchInput: () => SearchInput,
  Section: () => Section,
  Select: () => Select,
  Sidebar: () => Sidebar,
  Skeleton: () => Skeleton,
  SkipLink: () => SkipLink,
  Slider: () => Slider,
  Spacer: () => Spacer,
  Spinner: () => Spinner,
  Split: () => Split,
  Stack: () => Stack,
  Stat: () => Stat,
  Stepper: () => Stepper,
  Switch: () => Switch,
  Tab: () => Tab,
  Table: () => Table,
  TableBody: () => TableBody,
  TableCell: () => TableCell,
  TableHead: () => TableHead,
  TableHeaderCell: () => TableHeaderCell,
  TableRow: () => TableRow,
  Tabs: () => Tabs,
  TabsList: () => TabsList,
  TabsPanel: () => TabsPanel,
  Tag: () => Tag,
  TagsInput: () => TagsInput,
  Testimonial: () => Testimonial,
  Text: () => Text,
  Textarea: () => Textarea,
  TimePicker: () => TimePicker,
  Timeline: () => Timeline,
  TimelineItem: () => TimelineItem,
  Toast: () => Toast,
  ToastProvider: () => ToastProvider,
  Tooltip: () => Tooltip,
  useCheckboxGroup: () => useCheckboxGroup,
  useLayerEscape: () => useLayerEscape,
  useLayerTransition: () => useLayerTransition,
  useModal: () => useModal,
  useRadioGroup: () => useRadioGroup,
  useScrollLock: () => useScrollLock,
  useTabs: () => useTabs,
  useToast: () => useToast
});
module.exports = __toCommonJS(index_exports);

// src/container/container.tsx
var import_react = require("react");

// src/utils.ts
var import_clsx = __toESM(require("clsx"));
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.default)(inputs));
}
function resolveResponsiveProps(cssVar, val, transform) {
  if (val === void 0 || val === null) return {};
  if (typeof val !== "object") {
    return { [cssVar]: transform ? transform(val) : String(val) };
  }
  const obj = val;
  const result = {};
  if (obj.base !== void 0) result[cssVar] = transform ? transform(obj.base) : String(obj.base);
  if (obj.sm !== void 0) result[`${cssVar}-sm`] = transform ? transform(obj.sm) : String(obj.sm);
  if (obj.md !== void 0) result[`${cssVar}-md`] = transform ? transform(obj.md) : String(obj.md);
  if (obj.lg !== void 0) result[`${cssVar}-lg`] = transform ? transform(obj.lg) : String(obj.lg);
  if (obj.xl !== void 0) result[`${cssVar}-xl`] = transform ? transform(obj.xl) : String(obj.xl);
  if (obj["2xl"] !== void 0) result[`${cssVar}-2xl`] = transform ? transform(obj["2xl"]) : String(obj["2xl"]);
  return result;
}

// src/container/container.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var Container = (0, import_react.forwardRef)(
  ({ as: Component = "div", className, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      Component,
      {
        ref,
        className: cn("erb-container", className),
        ...props
      }
    );
  }
);
Container.displayName = "Container";

// src/grid/grid.tsx
var import_react2 = require("react");
var import_jsx_runtime2 = require("react/jsx-runtime");
var Grid = (0, import_react2.forwardRef)(
  ({ as: Component = "div", className, cols = 1, gap, align, justify, style, ...props }, ref) => {
    const customStyle = {
      ...style,
      ...resolveResponsiveProps("--erb-grid-cols", cols, (v) => `repeat(${v}, minmax(0, 1fr))`),
      ...resolveResponsiveProps("--erb-grid-gap", gap, (v) => `var(--erb-space-${v})`),
      ...resolveResponsiveProps("--erb-grid-align", align),
      ...resolveResponsiveProps("--erb-grid-justify", justify)
    };
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      Component,
      {
        ref,
        className: cn("erb-grid", className),
        style: customStyle,
        ...props
      }
    );
  }
);
Grid.displayName = "Grid";

// src/grid/grid-item.tsx
var import_react3 = require("react");
var import_jsx_runtime3 = require("react/jsx-runtime");
var GridItem = (0, import_react3.forwardRef)(
  ({ as: Component = "div", className, colSpan, rowSpan, style, ...props }, ref) => {
    const customStyle = {
      ...style,
      ...resolveResponsiveProps("--erb-grid-item-col-span", colSpan),
      ...resolveResponsiveProps("--erb-grid-item-row-span", rowSpan)
    };
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      Component,
      {
        ref,
        className: cn("erb-grid-item", className),
        style: customStyle,
        ...props
      }
    );
  }
);
GridItem.displayName = "GridItem";

// src/flex/flex.tsx
var import_react4 = require("react");
var import_jsx_runtime4 = require("react/jsx-runtime");
var justifyMap = {
  start: "flex-start",
  end: "flex-end",
  center: "center",
  "space-between": "space-between",
  "space-around": "space-around",
  "space-evenly": "space-evenly"
};
var alignMap = {
  start: "flex-start",
  end: "flex-end",
  center: "center",
  stretch: "stretch",
  baseline: "baseline"
};
var Flex = (0, import_react4.forwardRef)(
  ({ as: Component = "div", className, direction, gap, align, justify, wrap, style, ...props }, ref) => {
    const customStyle = {
      ...style,
      ...resolveResponsiveProps("--erb-flex-direction", direction),
      ...resolveResponsiveProps("--erb-flex-gap", gap, (v) => `var(--erb-space-${v})`),
      ...resolveResponsiveProps("--erb-flex-align", align, (v) => alignMap[v] || v),
      ...resolveResponsiveProps("--erb-flex-justify", justify, (v) => justifyMap[v] || v),
      ...resolveResponsiveProps("--erb-flex-wrap", wrap)
    };
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      Component,
      {
        ref,
        className: cn("erb-flex", className),
        style: customStyle,
        ...props
      }
    );
  }
);
Flex.displayName = "Flex";

// src/stack/stack.tsx
var import_react5 = require("react");
var import_jsx_runtime5 = require("react/jsx-runtime");
var justifyMap2 = {
  start: "flex-start",
  end: "flex-end",
  center: "center",
  "space-between": "space-between",
  "space-around": "space-around",
  "space-evenly": "space-evenly"
};
var alignMap2 = {
  start: "flex-start",
  end: "flex-end",
  center: "center",
  stretch: "stretch",
  baseline: "baseline"
};
var Stack = (0, import_react5.forwardRef)(
  ({ as: Component = "div", className, gap, align, justify, style, ...props }, ref) => {
    const customStyle = {
      ...style,
      ...resolveResponsiveProps("--erb-stack-gap", gap, (v) => `var(--erb-space-${v})`),
      ...resolveResponsiveProps("--erb-stack-align", align, (v) => alignMap2[v] || v),
      ...resolveResponsiveProps("--erb-stack-justify", justify, (v) => justifyMap2[v] || v)
    };
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      Component,
      {
        ref,
        className: cn("erb-stack", className),
        style: customStyle,
        ...props
      }
    );
  }
);
Stack.displayName = "Stack";

// src/inline/inline.tsx
var import_react6 = require("react");
var import_jsx_runtime6 = require("react/jsx-runtime");
var justifyMap3 = {
  start: "flex-start",
  end: "flex-end",
  center: "center",
  "space-between": "space-between",
  "space-around": "space-around",
  "space-evenly": "space-evenly"
};
var alignMap3 = {
  start: "flex-start",
  end: "flex-end",
  center: "center",
  stretch: "stretch",
  baseline: "baseline"
};
var Inline = (0, import_react6.forwardRef)(
  ({ as: Component = "div", className, gap, align, justify, style, ...props }, ref) => {
    const customStyle = {
      ...style,
      ...resolveResponsiveProps("--erb-inline-gap", gap, (v) => `var(--erb-space-${v})`),
      ...resolveResponsiveProps("--erb-inline-align", align, (v) => alignMap3[v] || v),
      ...resolveResponsiveProps("--erb-inline-justify", justify, (v) => justifyMap3[v] || v)
    };
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      Component,
      {
        ref,
        className: cn("erb-inline", className),
        style: customStyle,
        ...props
      }
    );
  }
);
Inline.displayName = "Inline";

// src/spacer/spacer.tsx
var import_react7 = require("react");
var import_jsx_runtime7 = require("react/jsx-runtime");
var Spacer = (0, import_react7.forwardRef)(
  ({ as: Component = "div", className, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
      Component,
      {
        ref,
        className: cn("erb-spacer", className),
        ...props
      }
    );
  }
);
Spacer.displayName = "Spacer";

// src/center/center.tsx
var import_react8 = require("react");
var import_jsx_runtime8 = require("react/jsx-runtime");
var Center = (0, import_react8.forwardRef)(
  ({ as: Component = "div", className, inline, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
      Component,
      {
        ref,
        className: cn("erb-center", className),
        "data-inline": inline ? "true" : void 0,
        ...props
      }
    );
  }
);
Center.displayName = "Center";

// src/aspect-ratio/aspect-ratio.tsx
var import_react9 = require("react");
var import_jsx_runtime9 = require("react/jsx-runtime");
var AspectRatio = (0, import_react9.forwardRef)(
  ({ as: Component = "div", className, ratio = 4 / 3, style, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
      Component,
      {
        ref,
        className: cn("erb-aspect-ratio", className),
        style: { "--erb-aspect-ratio": ratio, ...style },
        ...props
      }
    );
  }
);
AspectRatio.displayName = "AspectRatio";

// src/split/split.tsx
var import_react10 = require("react");
var import_jsx_runtime10 = require("react/jsx-runtime");
var Split = (0, import_react10.forwardRef)(
  ({ as: Component = "div", className, gap, fraction = "1/2", align, style, ...props }, ref) => {
    const customStyle = {
      ...style,
      ...resolveResponsiveProps("--erb-split-gap", gap, (v) => `var(--erb-space-${v})`),
      ...resolveResponsiveProps("--erb-split-align", align)
    };
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
      Component,
      {
        ref,
        className: cn("erb-split", className),
        "data-fraction": fraction !== "1/2" ? fraction : void 0,
        style: customStyle,
        ...props
      }
    );
  }
);
Split.displayName = "Split";

// src/section/section.tsx
var import_react11 = require("react");
var import_jsx_runtime11 = require("react/jsx-runtime");
var Section = (0, import_react11.forwardRef)(
  ({ as: Component = "section", className, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
      Component,
      {
        ref,
        className: cn("erb-section", className),
        ...props
      }
    );
  }
);
Section.displayName = "Section";

// src/scroll-area/scroll-area.tsx
var import_react12 = require("react");
var import_jsx_runtime12 = require("react/jsx-runtime");
var ScrollArea = (0, import_react12.forwardRef)(
  ({ as: Component = "div", className, maxHeight, style, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
      Component,
      {
        ref,
        className: cn("erb-scroll-area", className),
        style: { "--erb-scroll-area-max-height": typeof maxHeight === "number" ? `${maxHeight}px` : maxHeight, ...style },
        ...props
      }
    );
  }
);
ScrollArea.displayName = "ScrollArea";

// src/button/Button.tsx
var import_react13 = require("react");
var import_jsx_runtime13 = require("react/jsx-runtime");
var Button = (0, import_react13.forwardRef)(
  ({ className, size = "md", variant = "solid", ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
      "button",
      {
        ref,
        className: cn("erb-button", className),
        "data-size": size,
        "data-variant": variant,
        ...props
      }
    );
  }
);
Button.displayName = "Button";

// src/card/Card.tsx
var import_react14 = require("react");
var import_jsx_runtime14 = require("react/jsx-runtime");
var Card = (0, import_react14.forwardRef)(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { ref, className: cn("erb-card", className), ...props })
);
Card.displayName = "Card";
var CardHeader = (0, import_react14.forwardRef)(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { ref, className: cn("erb-card-header", className), ...props })
);
CardHeader.displayName = "CardHeader";
var CardTitle = (0, import_react14.forwardRef)(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("h3", { ref, className: cn("erb-card-title", className), ...props })
);
CardTitle.displayName = "CardTitle";
var CardDescription = (0, import_react14.forwardRef)(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { ref, className: cn("erb-card-description", className), ...props })
);
CardDescription.displayName = "CardDescription";
var CardBody = (0, import_react14.forwardRef)(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { ref, className: cn("erb-card-body", className), ...props })
);
CardBody.displayName = "CardBody";
var CardFooter = (0, import_react14.forwardRef)(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { ref, className: cn("erb-card-footer", className), ...props })
);
CardFooter.displayName = "CardFooter";

// src/input/Input.tsx
var import_react15 = require("react");
var import_jsx_runtime15 = require("react/jsx-runtime");
var Input = (0, import_react15.forwardRef)(
  ({ className, size = "md", label, error, id, disabled, ...props }, ref) => {
    const generatedId = (0, import_react15.useId)();
    const inputId = id ?? generatedId;
    const errorId = `${inputId}-error`;
    return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "erb-input-wrapper", children: [
      label && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("label", { htmlFor: inputId, className: "erb-label", children: label }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
        "input",
        {
          ref,
          id: inputId,
          className: cn("erb-input", className),
          "data-size": size,
          disabled,
          "aria-invalid": !!error,
          "aria-describedby": error ? errorId : void 0,
          ...props
        }
      ),
      error && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { id: errorId, className: "erb-error-message", children: error })
    ] });
  }
);
Input.displayName = "Input";

// src/alert/Alert.tsx
var import_react16 = require("react");
var import_jsx_runtime16 = require("react/jsx-runtime");
var Alert = (0, import_react16.forwardRef)(
  ({ className, intent = "info", children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
    "div",
    {
      ref,
      role: "alert",
      className: cn("erb-alert", className),
      "data-intent": intent,
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "erb-alert-content", children })
    }
  )
);
Alert.displayName = "Alert";
var AlertTitle = (0, import_react16.forwardRef)(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("h5", { ref, className: cn("erb-alert-title", className), ...props })
);
AlertTitle.displayName = "AlertTitle";
var AlertDescription = (0, import_react16.forwardRef)(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("p", { ref, className: cn("erb-alert-description", className), ...props })
);
AlertDescription.displayName = "AlertDescription";

// src/modal/Modal.tsx
var import_react17 = require("react");
var import_react_dom = require("react-dom");
var import_jsx_runtime17 = require("react/jsx-runtime");
var ModalContext = (0, import_react17.createContext)(void 0);
function useModal() {
  const context = (0, import_react17.useContext)(ModalContext);
  if (!context) throw new Error("useModal must be used within a Modal");
  return context;
}
function Modal({ open = false, onOpenChange, children }) {
  const [isOpen, setIsOpen] = (0, import_react17.useState)(open);
  (0, import_react17.useEffect)(() => {
    if (open !== void 0) setIsOpen(open);
  }, [open]);
  const handleOpenChange = (newOpen) => {
    setIsOpen(newOpen);
    onOpenChange?.(newOpen);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(ModalContext.Provider, { value: { open: isOpen, onOpenChange: handleOpenChange }, children });
}
function useMounted() {
  const [mounted, setMounted] = (0, import_react17.useState)(false);
  (0, import_react17.useEffect)(() => setMounted(true), []);
  return mounted;
}
var ModalOverlay = (0, import_react17.forwardRef)(
  ({ className, ...props }, ref) => {
    const { open, onOpenChange } = useModal();
    const mounted = useMounted();
    if (!open || !mounted) return null;
    return (0, import_react_dom.createPortal)(
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
        "div",
        {
          ref,
          className: cn("erb-modal-overlay", className),
          onClick: () => onOpenChange(false),
          ...props
        }
      ),
      document.body
    );
  }
);
ModalOverlay.displayName = "ModalOverlay";
var ModalContent = (0, import_react17.forwardRef)(
  ({ className, children, ...props }, ref) => {
    const { open } = useModal();
    const mounted = useMounted();
    if (!open || !mounted) return null;
    return (0, import_react_dom.createPortal)(
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
        "div",
        {
          ref,
          role: "dialog",
          "aria-modal": "true",
          className: cn("erb-modal-content", className),
          ...props,
          children
        }
      ),
      document.body
    );
  }
);
ModalContent.displayName = "ModalContent";
var ModalHeader = (0, import_react17.forwardRef)(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { ref, className: cn("erb-modal-header", className), ...props })
);
ModalHeader.displayName = "ModalHeader";
var ModalTitle = (0, import_react17.forwardRef)(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("h2", { ref, className: cn("erb-modal-title", className), ...props })
);
ModalTitle.displayName = "ModalTitle";
var ModalDescription = (0, import_react17.forwardRef)(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("p", { ref, className: cn("erb-modal-description", className), ...props })
);
ModalDescription.displayName = "ModalDescription";
var ModalBody = (0, import_react17.forwardRef)(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { ref, className: cn("erb-modal-body", className), ...props })
);
ModalBody.displayName = "ModalBody";
var ModalFooter = (0, import_react17.forwardRef)(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { ref, className: cn("erb-modal-footer", className), ...props })
);
ModalFooter.displayName = "ModalFooter";

// src/panel/Panel.tsx
var import_react18 = require("react");
var import_react_dom2 = require("react-dom");
var import_jsx_runtime18 = require("react/jsx-runtime");
function useMounted2() {
  const [mounted, setMounted] = (0, import_react18.useState)(false);
  (0, import_react18.useEffect)(() => setMounted(true), []);
  return mounted;
}
var Panel = (0, import_react18.forwardRef)(
  ({ className, open = true, position = "right", children, ...props }, ref) => {
    const mounted = useMounted2();
    if (!open || !mounted) return null;
    return (0, import_react_dom2.createPortal)(
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
        "div",
        {
          ref,
          role: "dialog",
          "aria-modal": "true",
          "data-position": position,
          className: cn("erb-panel", className),
          ...props,
          children
        }
      ),
      document.body
    );
  }
);
Panel.displayName = "Panel";
var PanelOverlay = (0, import_react18.forwardRef)(
  ({ className, open = true, onClose, ...props }, ref) => {
    const mounted = useMounted2();
    if (!open || !mounted) return null;
    return (0, import_react_dom2.createPortal)(
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
        "div",
        {
          ref,
          className: cn("erb-panel-overlay", className),
          onClick: onClose,
          ...props
        }
      ),
      document.body
    );
  }
);
PanelOverlay.displayName = "PanelOverlay";
var PanelHeader = (0, import_react18.forwardRef)(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { ref, className: cn("erb-panel-header", className), ...props })
);
PanelHeader.displayName = "PanelHeader";
var PanelTitle = (0, import_react18.forwardRef)(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("h2", { ref, className: cn("erb-panel-title", className), ...props })
);
PanelTitle.displayName = "PanelTitle";
var PanelBody = (0, import_react18.forwardRef)(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { ref, className: cn("erb-panel-body", className), ...props })
);
PanelBody.displayName = "PanelBody";
var PanelFooter = (0, import_react18.forwardRef)(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { ref, className: cn("erb-panel-footer", className), ...props })
);
PanelFooter.displayName = "PanelFooter";

// src/menu/Menu.tsx
var import_react19 = require("react");
var import_react20 = require("@floating-ui/react");
var import_jsx_runtime19 = require("react/jsx-runtime");
function Menu({ trigger, children, placement = "bottom-start", open: controlledOpen, onOpenChange, className }) {
  const [uncontrolledOpen, setUncontrolledOpen] = (0, import_react19.useState)(false);
  const open = controlledOpen !== void 0 ? controlledOpen : uncontrolledOpen;
  const setOpen = (open2) => {
    setUncontrolledOpen(open2);
    onOpenChange?.(open2);
  };
  const { refs, floatingStyles, context } = (0, import_react20.useFloating)({
    open,
    onOpenChange: setOpen,
    placement,
    whileElementsMounted: import_react20.autoUpdate,
    middleware: [(0, import_react20.offset)(4), (0, import_react20.flip)(), (0, import_react20.shift)()]
  });
  const click = (0, import_react20.useClick)(context);
  const dismiss = (0, import_react20.useDismiss)(context);
  const role = (0, import_react20.useRole)(context);
  const { getReferenceProps, getFloatingProps } = (0, import_react20.useInteractions)([
    click,
    dismiss,
    role
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(import_jsx_runtime19.Fragment, { children: [
    (0, import_react19.isValidElement)(trigger) && (0, import_react19.cloneElement)(trigger, {
      ref: refs.setReference,
      ...getReferenceProps(trigger.props || {})
    }),
    open && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_react20.FloatingPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_react20.FloatingFocusManager, { context, modal: false, children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
      "div",
      {
        ref: refs.setFloating,
        style: floatingStyles,
        className: cn("erb-menu", className),
        ...getFloatingProps(),
        children
      }
    ) }) })
  ] });
}
var MenuItem = (0, import_react19.forwardRef)(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
    "div",
    {
      ref,
      role: "menuitem",
      className: cn("erb-menu-item", className),
      ...props
    }
  )
);
MenuItem.displayName = "MenuItem";
var MenuSeparator = (0, import_react19.forwardRef)(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
    "div",
    {
      ref,
      role: "separator",
      className: cn("erb-menu-separator", className),
      ...props
    }
  )
);
MenuSeparator.displayName = "MenuSeparator";

// src/tabs/Tabs.tsx
var import_react21 = require("react");
var import_jsx_runtime20 = require("react/jsx-runtime");
var TabsContext = (0, import_react21.createContext)(void 0);
function useTabs() {
  const context = (0, import_react21.useContext)(TabsContext);
  if (!context) throw new Error("useTabs must be used within Tabs");
  return context;
}
var Tabs = (0, import_react21.forwardRef)(
  ({ className, value: controlledValue, defaultValue, onValueChange, children, ...props }, ref) => {
    const [uncontrolledValue, setUncontrolledValue] = (0, import_react21.useState)(defaultValue || "");
    const value = controlledValue !== void 0 ? controlledValue : uncontrolledValue;
    const handleValueChange = (newValue) => {
      setUncontrolledValue(newValue);
      onValueChange?.(newValue);
    };
    return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(TabsContext.Provider, { value: { value, onValueChange: handleValueChange }, children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { ref, className: cn("erb-tabs", className), ...props, children }) });
  }
);
Tabs.displayName = "Tabs";
var TabsList = (0, import_react21.forwardRef)(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { ref, role: "tablist", className: cn("erb-tabs-list", className), ...props })
);
TabsList.displayName = "TabsList";
var Tab = (0, import_react21.forwardRef)(
  ({ className, value, ...props }, ref) => {
    const { value: selectedValue, onValueChange } = useTabs();
    const isActive = selectedValue === value;
    const state = isActive ? "active" : "inactive";
    return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
      "button",
      {
        ref,
        role: "tab",
        "aria-selected": isActive,
        "data-state": state,
        className: cn("erb-tab", className),
        onClick: () => onValueChange(value),
        ...props
      }
    );
  }
);
Tab.displayName = "Tab";
var TabsPanel = (0, import_react21.forwardRef)(
  ({ className, value, ...props }, ref) => {
    const { value: selectedValue } = useTabs();
    const isActive = selectedValue === value;
    const state = isActive ? "active" : "inactive";
    if (!isActive) return null;
    return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
      "div",
      {
        ref,
        role: "tabpanel",
        "data-state": state,
        className: cn("erb-tabs-panel", className),
        ...props
      }
    );
  }
);
TabsPanel.displayName = "TabsPanel";

// src/header/Header.tsx
var import_react22 = require("react");
var import_jsx_runtime21 = require("react/jsx-runtime");
var Header = (0, import_react22.forwardRef)(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("header", { ref, className: cn("erb-header", className), ...props })
);
Header.displayName = "Header";

// src/footer/Footer.tsx
var import_react23 = require("react");
var import_jsx_runtime22 = require("react/jsx-runtime");
var Footer = (0, import_react23.forwardRef)(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("footer", { ref, className: cn("erb-footer", className), ...props })
);
Footer.displayName = "Footer";

// src/textarea/Textarea.tsx
var import_react24 = require("react");
var import_jsx_runtime23 = require("react/jsx-runtime");
var Textarea = (0, import_react24.forwardRef)(
  ({ className, label, error, id, disabled, ...props }, ref) => {
    const generatedId = (0, import_react24.useId)();
    const textareaId = id ?? generatedId;
    const errorId = `${textareaId}-error`;
    return /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "erb-input-wrapper", children: [
      label && /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("label", { htmlFor: textareaId, className: "erb-label", children: label }),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
        "textarea",
        {
          ref,
          id: textareaId,
          className: cn("erb-textarea", className),
          disabled,
          "aria-invalid": !!error,
          "aria-describedby": error ? errorId : void 0,
          ...props
        }
      ),
      error && /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("span", { id: errorId, className: "erb-error-message", children: error })
    ] });
  }
);
Textarea.displayName = "Textarea";

// src/checkbox/Checkbox.tsx
var import_react26 = require("react");

// src/checkbox-group/CheckboxGroupContext.ts
var import_react25 = require("react");
var CheckboxGroupContext = (0, import_react25.createContext)({});
var useCheckboxGroup = () => (0, import_react25.useContext)(CheckboxGroupContext);

// src/checkbox/Checkbox.tsx
var import_jsx_runtime24 = require("react/jsx-runtime");
var Checkbox = (0, import_react26.forwardRef)(
  ({ className, size, label, id, disabled, name, ...props }, ref) => {
    const generatedId = (0, import_react26.useId)();
    const inputId = id ?? generatedId;
    const group = useCheckboxGroup();
    const finalSize = size ?? group.size ?? "md";
    const finalDisabled = disabled ?? group.disabled;
    const finalName = name ?? group.name;
    return /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { className: cn("erb-checkbox-wrapper", className), children: [
      /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
        "input",
        {
          ref,
          type: "checkbox",
          id: inputId,
          name: finalName,
          className: "erb-checkbox",
          "data-size": finalSize,
          disabled: finalDisabled,
          ...props
        }
      ),
      label && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("label", { htmlFor: inputId, className: "erb-checkbox-label", children: label })
    ] });
  }
);
Checkbox.displayName = "Checkbox";

// src/checkbox-group/CheckboxGroup.tsx
var import_react27 = require("react");
var import_jsx_runtime25 = require("react/jsx-runtime");
var CheckboxGroup = (0, import_react27.forwardRef)(
  ({ className, legend, children, orientation = "vertical", size, name, disabled, ...props }, ref) => {
    const Wrapper = orientation === "horizontal" ? Inline : Stack;
    return /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(
      "fieldset",
      {
        ref,
        className: cn("erb-checkbox-group", className),
        disabled,
        ...props,
        children: [
          legend && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("legend", { className: "erb-checkbox-group-legend", children: legend }),
          /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(CheckboxGroupContext.Provider, { value: { name, size, disabled }, children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(Wrapper, { children }) })
        ]
      }
    );
  }
);
CheckboxGroup.displayName = "CheckboxGroup";

// src/radio/Radio.tsx
var import_react29 = require("react");

// src/radio-group/RadioGroupContext.ts
var import_react28 = require("react");
var RadioGroupContext = (0, import_react28.createContext)({});
var useRadioGroup = () => (0, import_react28.useContext)(RadioGroupContext);

// src/radio/Radio.tsx
var import_jsx_runtime26 = require("react/jsx-runtime");
var Radio = (0, import_react29.forwardRef)(
  ({ className, size, label, id, disabled, name, ...props }, ref) => {
    const generatedId = (0, import_react29.useId)();
    const inputId = id ?? generatedId;
    const group = useRadioGroup();
    const finalSize = size ?? group.size ?? "md";
    const finalDisabled = disabled ?? group.disabled;
    const finalName = name ?? group.name;
    return /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: cn("erb-radio-wrapper", className), children: [
      /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
        "input",
        {
          ref,
          type: "radio",
          id: inputId,
          name: finalName,
          className: "erb-radio",
          "data-size": finalSize,
          disabled: finalDisabled,
          ...props
        }
      ),
      label && /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("label", { htmlFor: inputId, className: "erb-radio-label", children: label })
    ] });
  }
);
Radio.displayName = "Radio";

// src/radio-group/RadioGroup.tsx
var import_react30 = require("react");
var import_jsx_runtime27 = require("react/jsx-runtime");
var RadioGroup = (0, import_react30.forwardRef)(
  ({ className, legend, children, orientation = "vertical", size, name, disabled, ...props }, ref) => {
    const Wrapper = orientation === "horizontal" ? Inline : Stack;
    return /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(
      "fieldset",
      {
        ref,
        className: cn("erb-radio-group", className),
        disabled,
        ...props,
        children: [
          legend && /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("legend", { className: "erb-radio-group-legend", children: legend }),
          /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(RadioGroupContext.Provider, { value: { name, size, disabled }, children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(Wrapper, { children }) })
        ]
      }
    );
  }
);
RadioGroup.displayName = "RadioGroup";

// src/switch/Switch.tsx
var import_react31 = require("react");
var import_jsx_runtime28 = require("react/jsx-runtime");
var Switch = (0, import_react31.forwardRef)(
  ({ className, size = "md", label, id, disabled, ...props }, ref) => {
    const generatedId = (0, import_react31.useId)();
    const inputId = id ?? generatedId;
    return /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("div", { className: cn("erb-switch-wrapper", className), children: [
      /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
        "input",
        {
          ref,
          type: "checkbox",
          role: "switch",
          id: inputId,
          className: "erb-switch",
          "data-size": size,
          disabled,
          ...props
        }
      ),
      label && /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("label", { htmlFor: inputId, className: "erb-switch-label", children: label })
    ] });
  }
);
Switch.displayName = "Switch";

// src/select/Select.tsx
var import_react32 = require("react");
var import_jsx_runtime29 = require("react/jsx-runtime");
var Select = (0, import_react32.forwardRef)(
  ({ className, size = "md", label, error, id, disabled, children, ...props }, ref) => {
    const generatedId = (0, import_react32.useId)();
    const selectId = id ?? generatedId;
    const errorId = `${selectId}-error`;
    return /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("div", { className: "erb-input-wrapper", children: [
      label && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("label", { htmlFor: selectId, className: "erb-label", children: label }),
      /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
        "select",
        {
          ref,
          id: selectId,
          className: cn("erb-select", className),
          "data-size": size,
          disabled,
          "aria-invalid": !!error,
          "aria-describedby": error ? errorId : void 0,
          ...props,
          children
        }
      ),
      error && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { id: errorId, className: "erb-error-message", children: error })
    ] });
  }
);
Select.displayName = "Select";

// src/number-input/NumberInput.tsx
var import_react33 = require("react");
var import_jsx_runtime30 = require("react/jsx-runtime");
var ChevronUp = () => /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("svg", { width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("polyline", { points: "18 15 12 9 6 15" }) });
var ChevronDown = () => /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("svg", { width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("polyline", { points: "6 9 12 15 18 9" }) });
var NumberInput = (0, import_react33.forwardRef)(
  ({ className, size = "md", label, error, id, disabled, ...props }, ref) => {
    const generatedId = (0, import_react33.useId)();
    const inputId = id ?? generatedId;
    const errorId = `${inputId}-error`;
    const internalRef = (0, import_react33.useRef)(null);
    const setRefs = (node) => {
      internalRef.current = node;
      if (typeof ref === "function") {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    };
    const handleStepUp = (e) => {
      e.preventDefault();
      if (!disabled && internalRef.current) {
        internalRef.current.stepUp();
        internalRef.current.dispatchEvent(new Event("change", { bubbles: true }));
      }
    };
    const handleStepDown = (e) => {
      e.preventDefault();
      if (!disabled && internalRef.current) {
        internalRef.current.stepDown();
        internalRef.current.dispatchEvent(new Event("change", { bubbles: true }));
      }
    };
    return /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", { className: "erb-input-wrapper", children: [
      label && /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("label", { htmlFor: inputId, className: "erb-label", children: label }),
      /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", { className: "erb-number-input-wrapper", children: [
        /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
          "input",
          {
            ref: setRefs,
            type: "number",
            id: inputId,
            className: cn("erb-number-input", className),
            "data-size": size,
            disabled,
            "aria-invalid": !!error,
            "aria-describedby": error ? errorId : void 0,
            ...props
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", { className: "erb-number-input-stepper", children: [
          /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
            "button",
            {
              type: "button",
              className: "erb-number-input-stepper-btn",
              onClick: handleStepUp,
              disabled,
              tabIndex: -1,
              "aria-hidden": "true",
              children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(ChevronUp, {})
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
            "button",
            {
              type: "button",
              className: "erb-number-input-stepper-btn",
              onClick: handleStepDown,
              disabled,
              tabIndex: -1,
              "aria-hidden": "true",
              children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(ChevronDown, {})
            }
          )
        ] })
      ] }),
      error && /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("span", { id: errorId, className: "erb-error-message", children: error })
    ] });
  }
);
NumberInput.displayName = "NumberInput";

// src/search-input/SearchInput.tsx
var import_react34 = require("react");
var import_jsx_runtime31 = require("react/jsx-runtime");
var SearchIcon = () => /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("svg", { width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("circle", { cx: "11", cy: "11", r: "8" }),
  /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" })
] });
var XIcon = () => /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("svg", { width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
  /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
] });
var SearchInput = (0, import_react34.forwardRef)(
  ({ className, size = "md", label, error, id, disabled, onClear, onChange, ...props }, ref) => {
    const generatedId = (0, import_react34.useId)();
    const inputId = id ?? generatedId;
    const errorId = `${inputId}-error`;
    const internalRef = (0, import_react34.useRef)(null);
    const [hasValue, setHasValue] = (0, import_react34.useState)(
      Boolean(props.value || props.defaultValue)
    );
    const setRefs = (node) => {
      internalRef.current = node;
      if (typeof ref === "function") {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    };
    const handleChange = (e) => {
      setHasValue(Boolean(e.target.value));
      if (onChange) {
        onChange(e);
      }
    };
    const handleClear = (e) => {
      e.preventDefault();
      if (!disabled && internalRef.current) {
        internalRef.current.value = "";
        internalRef.current.dispatchEvent(new Event("input", { bubbles: true }));
        internalRef.current.dispatchEvent(new Event("change", { bubbles: true }));
        internalRef.current.focus();
        setHasValue(false);
        if (onClear) {
          onClear();
        }
      }
    };
    return /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("div", { className: "erb-input-wrapper", children: [
      label && /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("label", { htmlFor: inputId, className: "erb-label", children: label }),
      /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("div", { className: "erb-search-input-wrapper", children: [
        /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("div", { className: "erb-search-input-icon", children: /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(SearchIcon, {}) }),
        /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
          "input",
          {
            ref: setRefs,
            type: "search",
            id: inputId,
            className: cn("erb-search-input", className),
            "data-size": size,
            disabled,
            "aria-invalid": !!error,
            "aria-describedby": error ? errorId : void 0,
            onChange: handleChange,
            ...props
          }
        ),
        hasValue && /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
          "button",
          {
            type: "button",
            className: "erb-search-input-clear-btn",
            onClick: handleClear,
            disabled,
            tabIndex: -1,
            "aria-label": "Clear search",
            children: /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(XIcon, {})
          }
        )
      ] }),
      error && /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("span", { id: errorId, className: "erb-error-message", children: error })
    ] });
  }
);
SearchInput.displayName = "SearchInput";

// src/layer/LayerManager.ts
var import_react35 = require("react");
var LayerManagerImpl = class {
  stack = [];
  constructor() {
    if (typeof window !== "undefined") {
      window.addEventListener("keydown", this.handleKeyDown);
    }
  }
  register(id, element, close) {
    this.stack.push({ id, element, close });
    this.updateInert();
    this.updateZIndex(element);
  }
  unregister(id) {
    this.stack = this.stack.filter((entry) => entry.id !== id);
    this.updateInert();
  }
  handleKeyDown = (e) => {
    if (e.key === "Escape" && this.stack.length > 0) {
      const topLayer = this.stack[this.stack.length - 1];
      if (topLayer) {
        topLayer.close();
        e.stopPropagation();
      }
    }
  };
  updateInert() {
    if (typeof document === "undefined") return;
    const root = document.querySelector("[data-erebus-root]") || document.body;
    const hasLayers = this.stack.length > 0;
    Array.from(root.children).forEach((child) => {
      const isLayer = this.stack.some((layer) => layer.element === child || layer.element.contains(child));
      if (!isLayer && child.tagName !== "SCRIPT" && child.tagName !== "STYLE" && child.tagName !== "NOSCRIPT") {
        if (hasLayers) {
          child.setAttribute("inert", "");
        } else {
          child.removeAttribute("inert");
        }
      }
    });
  }
  updateZIndex(element) {
    const baseZ = 1300;
    element.style.zIndex = `calc(var(--erb-z-overlay, ${baseZ}) + ${this.stack.length})`;
  }
};
var LayerManager = new LayerManagerImpl();
function useLayerEscape(isOpen, onClose, layerElement, id) {
  (0, import_react35.useEffect)(() => {
    if (isOpen && layerElement) {
      LayerManager.register(id, layerElement, onClose);
      return () => LayerManager.unregister(id);
    }
  }, [isOpen, onClose, layerElement, id]);
}

// src/layer/Portal.tsx
var import_react36 = require("react");
var import_react_dom3 = require("react-dom");
function Portal({ children, container }) {
  const [mounted, setMounted] = (0, import_react36.useState)(false);
  (0, import_react36.useEffect)(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  const target = container || document.body;
  return (0, import_react_dom3.createPortal)(children, target);
}

// src/layer/FocusTrap.tsx
var import_react37 = __toESM(require("react"));
var FOCUSABLE_ELEMENTS = [
  "a[href]",
  "area[href]",
  'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
  "select:not([disabled]):not([aria-hidden])",
  "textarea:not([disabled]):not([aria-hidden])",
  "button:not([disabled]):not([aria-hidden])",
  "iframe",
  "object",
  "embed",
  "[contenteditable]",
  '[tabindex]:not([tabindex^="-"])'
].join(",");
function FocusTrap({ children, active = true }) {
  const containerRef = (0, import_react37.useRef)(null);
  const previousFocusRef = (0, import_react37.useRef)(null);
  (0, import_react37.useEffect)(() => {
    if (active) {
      previousFocusRef.current = document.activeElement;
      const container = containerRef.current;
      if (container) {
        const focusableElements = Array.from(
          container.querySelectorAll(FOCUSABLE_ELEMENTS)
        );
        if (focusableElements.length > 0 && focusableElements[0]) {
          focusableElements[0].focus();
        } else {
          container.focus();
        }
      }
    }
    return () => {
      if (active && previousFocusRef.current) {
        previousFocusRef.current.focus();
      }
    };
  }, [active]);
  (0, import_react37.useEffect)(() => {
    if (!active) return;
    const handleKeyDown = (e) => {
      if (e.key !== "Tab") return;
      const container = containerRef.current;
      if (!container) return;
      const focusableElements = Array.from(
        container.querySelectorAll(FOCUSABLE_ELEMENTS)
      );
      if (focusableElements.length === 0) {
        e.preventDefault();
        return;
      }
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      if (e.shiftKey) {
        if (firstElement && document.activeElement === firstElement) {
          e.preventDefault();
          if (lastElement) lastElement.focus();
        }
      } else {
        if (lastElement && document.activeElement === lastElement) {
          e.preventDefault();
          if (firstElement) firstElement.focus();
        }
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [active]);
  return import_react37.default.cloneElement(children, {
    ref: (node) => {
      containerRef.current = node;
      const { ref } = children;
      if (typeof ref === "function") ref(node);
      else if (ref) ref.current = node;
    },
    tabIndex: -1
  });
}

// src/layer/ScrollLock.tsx
var import_react38 = require("react");
var scrollLockCount = 0;
var originalStyle = null;
var originalPadding = null;
var getScrollbarWidth = () => {
  return window.innerWidth - document.documentElement.clientWidth;
};
var useScrollLock = (lock) => {
  (0, import_react38.useLayoutEffect)(() => {
    if (!lock) return;
    if (scrollLockCount === 0) {
      originalStyle = document.body.style.overflow;
      originalPadding = document.body.style.paddingRight;
      const scrollbarWidth = getScrollbarWidth();
      document.body.style.overflow = "hidden";
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `calc(${window.getComputedStyle(document.body).paddingRight} + ${scrollbarWidth}px)`;
      }
    }
    scrollLockCount++;
    return () => {
      scrollLockCount--;
      if (scrollLockCount === 0) {
        if (originalStyle !== null) {
          document.body.style.overflow = originalStyle;
        } else {
          document.body.style.removeProperty("overflow");
        }
        if (originalPadding !== null) {
          document.body.style.paddingRight = originalPadding;
        } else {
          document.body.style.removeProperty("padding-right");
        }
      }
    };
  }, [lock]);
};
function ScrollLock({ lock = true }) {
  useScrollLock(lock);
  return null;
}

// src/layer/Transition.ts
var import_react39 = require("react");
function useLayerTransition(isOpen, duration = 200) {
  const [shouldRender, setShouldRender] = (0, import_react39.useState)(isOpen);
  const [state, setState] = (0, import_react39.useState)(isOpen ? "open" : "closed");
  (0, import_react39.useEffect)(() => {
    let timeoutId;
    if (isOpen) {
      setShouldRender(true);
      timeoutId = window.setTimeout(() => {
        setState("open");
      }, 10);
    } else {
      setState("closed");
      timeoutId = window.setTimeout(() => {
        setShouldRender(false);
      }, duration);
    }
    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isOpen, duration]);
  return { shouldRender, state };
}

// src/badge/Badge.tsx
var import_react40 = __toESM(require("react"));
var import_jsx_runtime32 = require("react/jsx-runtime");
var Badge = import_react40.default.forwardRef(
  ({ className = "", variant = "solid", color = "primary", size = "md", shape = "rounded", children, ...props }, ref) => {
    const classNames = [
      "erb-badge",
      `erb-badge--variant-${variant}`,
      `erb-badge--color-${color}`,
      `erb-badge--size-${size}`,
      `erb-badge--shape-${shape}`,
      className
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("span", { ref, className: classNames, ...props, children });
  }
);
Badge.displayName = "Badge";

// src/tag/Tag.tsx
var import_react41 = __toESM(require("react"));
var import_jsx_runtime33 = require("react/jsx-runtime");
var Tag = import_react41.default.forwardRef(
  ({ className = "", variant = "solid", color = "primary", size = "md", closable, onClose, children, ...props }, ref) => {
    const classNames = [
      "erb-tag",
      `erb-tag--variant-${variant}`,
      `erb-tag--color-${color}`,
      `erb-tag--size-${size}`,
      className
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("span", { ref, className: classNames, ...props, children: [
      children,
      closable && /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("button", { type: "button", className: "erb-tag__close", "aria-label": "Close", onClick: onClose, children: "\xD7" })
    ] });
  }
);
Tag.displayName = "Tag";

// src/spinner/Spinner.tsx
var import_react42 = __toESM(require("react"));
var import_jsx_runtime34 = require("react/jsx-runtime");
var Spinner = import_react42.default.forwardRef(
  ({ size, className = "", style, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
      "div",
      {
        ref,
        className: `erb-spinner ${className}`.trim(),
        style: {
          ...style,
          "--erb-spinner-size": typeof size === "number" ? `${size}px` : size
        },
        ...props
      }
    );
  }
);
Spinner.displayName = "Spinner";

// src/skeleton/Skeleton.tsx
var import_react43 = __toESM(require("react"));
var import_jsx_runtime35 = require("react/jsx-runtime");
var Skeleton = import_react43.default.forwardRef(
  ({ variant = "rect", width, height, className = "", style, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
      "div",
      {
        ref,
        className: `erb-skeleton ${variant === "circle" ? "erb-skeleton--circle" : ""} ${className}`.trim(),
        style: {
          ...style,
          width: typeof width === "number" ? `${width}px` : width,
          height: typeof height === "number" ? `${height}px` : height
        },
        ...props
      }
    );
  }
);
Skeleton.displayName = "Skeleton";

// src/field/Field.tsx
var import_react45 = require("react");
var import_clsx3 = require("clsx");

// src/label/Label.tsx
var import_react44 = require("react");
var import_clsx2 = require("clsx");
var import_jsx_runtime36 = require("react/jsx-runtime");
var Label = (0, import_react44.forwardRef)(
  ({ children, className, disabled, required, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
      "label",
      {
        ref,
        className: (0, import_clsx2.clsx)(
          "erb-label",
          {
            "erb-label--disabled": disabled,
            "erb-label--required": required
          },
          className
        ),
        ...props,
        children
      }
    );
  }
);
Label.displayName = "Label";

// src/field/Field.tsx
var import_jsx_runtime37 = require("react/jsx-runtime");
var Field = (0, import_react45.forwardRef)(
  ({ children, className, label, hint, error, horizontal, required, disabled, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)(
      "div",
      {
        ref,
        className: (0, import_clsx3.clsx)(
          "erb-field",
          {
            "erb-field--horizontal": horizontal
          },
          className
        ),
        ...props,
        children: [
          label && /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(Label, { required: !!required, disabled: !!disabled, children: label }),
          /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("div", { className: "erb-field__content", children: [
            children,
            error ? /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("div", { className: "erb-field__error", children: error }) : hint ? /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("div", { className: "erb-field__hint", children: hint }) : null
          ] })
        ]
      }
    );
  }
);
Field.displayName = "Field";

// src/icon-button/IconButton.tsx
var import_react46 = require("react");
var import_jsx_runtime38 = require("react/jsx-runtime");
var IconButton = (0, import_react46.forwardRef)(
  ({ className, size = "md", variant = "solid", "aria-label": ariaLabel, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
      "button",
      {
        ref,
        className: cn("erb-icon-button", className),
        "data-size": size,
        "data-variant": variant,
        "aria-label": ariaLabel,
        ...props
      }
    );
  }
);
IconButton.displayName = "IconButton";

// src/button-group/ButtonGroup.tsx
var import_react47 = require("react");
var import_jsx_runtime39 = require("react/jsx-runtime");
var ButtonGroup = (0, import_react47.forwardRef)(
  ({ className, orientation = "horizontal", ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
      "div",
      {
        ref,
        className: cn("erb-button-group", className),
        "data-orientation": orientation,
        role: "group",
        ...props
      }
    );
  }
);
ButtonGroup.displayName = "ButtonGroup";

// src/avatar/Avatar.tsx
var import_react48 = require("react");
var import_jsx_runtime40 = require("react/jsx-runtime");
var Avatar = (0, import_react48.forwardRef)(
  ({ className, src, name, size = "md", ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
      "div",
      {
        ref,
        className: cn("erb-avatar", className),
        "data-size": size,
        role: "img",
        "aria-label": name,
        ...props,
        children: src ? /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("img", { src, alt: name, className: "erb-avatar__image" }) : /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("span", { className: "erb-avatar__initials", children: name ? name.charAt(0).toUpperCase() : "?" })
      }
    );
  }
);
Avatar.displayName = "Avatar";

// src/avatar-group/AvatarGroup.tsx
var import_react49 = require("react");
var import_jsx_runtime41 = require("react/jsx-runtime");
var AvatarGroup = (0, import_react49.forwardRef)(
  ({ className, max, children, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
      "div",
      {
        ref,
        className: cn("erb-avatar-group", className),
        ...props,
        children
      }
    );
  }
);
AvatarGroup.displayName = "AvatarGroup";

// src/divider/Divider.tsx
var import_react50 = require("react");
var import_jsx_runtime42 = require("react/jsx-runtime");
var Divider = (0, import_react50.forwardRef)(
  ({ className, orientation = "horizontal", ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
      "hr",
      {
        ref,
        className: cn("erb-divider", className),
        "data-orientation": orientation,
        role: "separator",
        "aria-orientation": orientation,
        ...props
      }
    );
  }
);
Divider.displayName = "Divider";

// src/kbd/Kbd.tsx
var import_react51 = require("react");
var import_jsx_runtime43 = require("react/jsx-runtime");
var Kbd = (0, import_react51.forwardRef)(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
      "kbd",
      {
        ref,
        className: cn("erb-kbd", className),
        ...props
      }
    );
  }
);
Kbd.displayName = "Kbd";

// src/code/Code.tsx
var import_react52 = require("react");
var import_jsx_runtime44 = require("react/jsx-runtime");
var Code = (0, import_react52.forwardRef)(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
      "code",
      {
        ref,
        className: cn("erb-code", className),
        ...props
      }
    );
  }
);
Code.displayName = "Code";

// src/callout/Callout.tsx
var import_react53 = require("react");
var import_jsx_runtime45 = require("react/jsx-runtime");
var Callout = (0, import_react53.forwardRef)(
  ({ className, intent = "neutral", children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
    "div",
    {
      ref,
      className: cn("erb-callout", className),
      "data-intent": intent,
      ...props,
      children
    }
  )
);
Callout.displayName = "Callout";

// src/heading/Heading.tsx
var import_react54 = require("react");
var import_jsx_runtime46 = require("react/jsx-runtime");
var Heading = (0, import_react54.forwardRef)(
  ({ className, level = 2, ...props }, ref) => {
    const Component = `h${level}`;
    return /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
      Component,
      {
        ref,
        className: cn(`erb-heading erb-heading--${level}`, className),
        ...props
      }
    );
  }
);
Heading.displayName = "Heading";

// src/text/Text.tsx
var import_react55 = require("react");
var import_jsx_runtime47 = require("react/jsx-runtime");
var Text = (0, import_react55.forwardRef)(
  ({ className, size = "md", muted = false, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
      "p",
      {
        ref,
        className: cn("erb-text", className),
        "data-size": size,
        "data-muted": muted,
        ...props
      }
    );
  }
);
Text.displayName = "Text";

// src/prose/Prose.tsx
var import_react56 = require("react");
var import_jsx_runtime48 = require("react/jsx-runtime");
var Prose = (0, import_react56.forwardRef)(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
      "div",
      {
        ref,
        className: cn("erb-prose", className),
        ...props
      }
    );
  }
);
Prose.displayName = "Prose";

// src/alert-dialog/AlertDialog.tsx
var import_react57 = require("react");
var import_jsx_runtime49 = require("react/jsx-runtime");
var AlertDialog = Modal;
var AlertDialogOverlay = (0, import_react57.forwardRef)(
  ({ className, onClick, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
    ModalOverlay,
    {
      ref,
      className: cn("erb-alert-dialog-overlay", className),
      onClick: (e) => {
        e.stopPropagation();
        onClick?.(e);
      },
      ...props
    }
  )
);
AlertDialogOverlay.displayName = "AlertDialogOverlay";
var AlertDialogContent = (0, import_react57.forwardRef)(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
    ModalContent,
    {
      ref,
      role: "alertdialog",
      className: cn("erb-alert-dialog-content", className),
      ...props
    }
  )
);
AlertDialogContent.displayName = "AlertDialogContent";
var AlertDialogHeader = (0, import_react57.forwardRef)(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(ModalHeader, { ref, className: cn("erb-alert-dialog-header", className), ...props })
);
AlertDialogHeader.displayName = "AlertDialogHeader";
var AlertDialogTitle = (0, import_react57.forwardRef)(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(ModalTitle, { ref, className: cn("erb-alert-dialog-title", className), ...props })
);
AlertDialogTitle.displayName = "AlertDialogTitle";
var AlertDialogDescription = (0, import_react57.forwardRef)(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(ModalDescription, { ref, className: cn("erb-alert-dialog-description", className), ...props })
);
AlertDialogDescription.displayName = "AlertDialogDescription";
var AlertDialogBody = (0, import_react57.forwardRef)(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(ModalBody, { ref, className: cn("erb-alert-dialog-body", className), ...props })
);
AlertDialogBody.displayName = "AlertDialogBody";
var AlertDialogFooter = (0, import_react57.forwardRef)(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(ModalFooter, { ref, className: cn("erb-alert-dialog-footer", className), ...props })
);
AlertDialogFooter.displayName = "AlertDialogFooter";

// src/drawer/Drawer.tsx
var import_react58 = require("react");
var import_jsx_runtime50 = require("react/jsx-runtime");
var Drawer = Modal;
var DrawerOverlay = (0, import_react58.forwardRef)(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(ModalOverlay, { ref, className: cn("erb-drawer-overlay", className), ...props })
);
DrawerOverlay.displayName = "DrawerOverlay";
var DrawerContent = (0, import_react58.forwardRef)(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
    ModalContent,
    {
      ref,
      role: "dialog",
      className: cn("erb-drawer-content", className),
      ...props
    }
  )
);
DrawerContent.displayName = "DrawerContent";
var DrawerHeader = (0, import_react58.forwardRef)(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(ModalHeader, { ref, className: cn("erb-drawer-header", className), ...props })
);
DrawerHeader.displayName = "DrawerHeader";
var DrawerTitle = (0, import_react58.forwardRef)(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(ModalTitle, { ref, className: cn("erb-drawer-title", className), ...props })
);
DrawerTitle.displayName = "DrawerTitle";
var DrawerDescription = (0, import_react58.forwardRef)(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(ModalDescription, { ref, className: cn("erb-drawer-description", className), ...props })
);
DrawerDescription.displayName = "DrawerDescription";
var DrawerBody = (0, import_react58.forwardRef)(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(ModalBody, { ref, className: cn("erb-drawer-body", className), ...props })
);
DrawerBody.displayName = "DrawerBody";
var DrawerFooter = (0, import_react58.forwardRef)(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(ModalFooter, { ref, className: cn("erb-drawer-footer", className), ...props })
);
DrawerFooter.displayName = "DrawerFooter";

// src/popover/Popover.tsx
var import_react59 = require("react");
var import_react60 = require("@floating-ui/react");
var import_jsx_runtime51 = require("react/jsx-runtime");
function Popover({ trigger, children, placement = "bottom", open: controlledOpen, onOpenChange, className }) {
  const [uncontrolledOpen, setUncontrolledOpen] = (0, import_react59.useState)(false);
  const open = controlledOpen !== void 0 ? controlledOpen : uncontrolledOpen;
  const setOpen = (open2) => {
    setUncontrolledOpen(open2);
    onOpenChange?.(open2);
  };
  const { refs, floatingStyles, context } = (0, import_react60.useFloating)({
    open,
    onOpenChange: setOpen,
    placement,
    whileElementsMounted: import_react60.autoUpdate,
    middleware: [(0, import_react60.offset)(4), (0, import_react60.flip)(), (0, import_react60.shift)()]
  });
  const click = (0, import_react60.useClick)(context);
  const dismiss = (0, import_react60.useDismiss)(context);
  const role = (0, import_react60.useRole)(context);
  const { getReferenceProps, getFloatingProps } = (0, import_react60.useInteractions)([
    click,
    dismiss,
    role
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(import_jsx_runtime51.Fragment, { children: [
    (0, import_react59.isValidElement)(trigger) && (0, import_react59.cloneElement)(trigger, {
      ref: refs.setReference,
      ...getReferenceProps(trigger.props || {})
    }),
    open && /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(import_react60.FloatingPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(import_react60.FloatingFocusManager, { context, modal: false, children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
      "div",
      {
        ref: refs.setFloating,
        style: floatingStyles,
        className: cn("erb-popover", className),
        ...getFloatingProps(),
        children
      }
    ) }) })
  ] });
}

// src/tooltip/Tooltip.tsx
var import_react61 = require("react");
var import_react62 = require("@floating-ui/react");
var import_jsx_runtime52 = require("react/jsx-runtime");
function Tooltip({ trigger, content, placement = "top", open: controlledOpen, onOpenChange, className }) {
  const [uncontrolledOpen, setUncontrolledOpen] = (0, import_react61.useState)(false);
  const open = controlledOpen !== void 0 ? controlledOpen : uncontrolledOpen;
  const setOpen = (open2) => {
    setUncontrolledOpen(open2);
    onOpenChange?.(open2);
  };
  const { refs, floatingStyles, context } = (0, import_react62.useFloating)({
    open,
    onOpenChange: setOpen,
    placement,
    whileElementsMounted: import_react62.autoUpdate,
    middleware: [(0, import_react62.offset)(4), (0, import_react62.flip)(), (0, import_react62.shift)()]
  });
  const hover = (0, import_react62.useHover)(context, { move: false });
  const focus = (0, import_react62.useFocus)(context);
  const dismiss = (0, import_react62.useDismiss)(context);
  const role = (0, import_react62.useRole)(context, { role: "tooltip" });
  const { getReferenceProps, getFloatingProps } = (0, import_react62.useInteractions)([
    hover,
    focus,
    dismiss,
    role
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)(import_jsx_runtime52.Fragment, { children: [
    (0, import_react61.isValidElement)(trigger) && (0, import_react61.cloneElement)(trigger, {
      ref: refs.setReference,
      ...getReferenceProps(trigger.props || {})
    }),
    open && /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(import_react62.FloatingPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(
      "div",
      {
        ref: refs.setFloating,
        style: floatingStyles,
        className: cn("erb-tooltip", className),
        ...getFloatingProps(),
        children: content
      }
    ) })
  ] });
}

// src/Sidebar/Sidebar.tsx
var import_jsx_runtime53 = require("react/jsx-runtime");
var Sidebar = ({ children, className = "", ...props }) => /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { className: `erb-sidebar ${className}`, ...props, children });

// src/AppShell/AppShell.tsx
var import_jsx_runtime54 = require("react/jsx-runtime");
var AppShell = ({ children, className = "", ...props }) => /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("div", { className: `erb-app-shell ${className}`, ...props, children });

// src/MobileNav/MobileNav.tsx
var import_jsx_runtime55 = require("react/jsx-runtime");
var MobileNav = ({ children, className = "", ...props }) => /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("div", { className: `erb-mobile-nav ${className}`, ...props, children });

// src/BottomNav/BottomNav.tsx
var import_jsx_runtime56 = require("react/jsx-runtime");
var BottomNav = ({ children, className = "", ...props }) => /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { className: `erb-bottom-nav ${className}`, ...props, children });

// src/breadcrumb/Breadcrumb.tsx
var import_react63 = __toESM(require("react"));
var import_jsx_runtime57 = require("react/jsx-runtime");
var Breadcrumb = ({ children, ariaLabel = "Breadcrumb" }) => /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("nav", { "aria-label": ariaLabel, className: "erb-breadcrumb", children: /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("ol", { className: "erb-breadcrumb__list", children: import_react63.default.Children.map(children, (child, i) => /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)("li", { className: "erb-breadcrumb__item", children: [
  child,
  i < import_react63.default.Children.count(children) - 1 && /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("span", { className: "erb-breadcrumb__separator", "aria-hidden": "true", children: "/" })
] })) }) });

// src/pagination/Pagination.tsx
var import_jsx_runtime58 = require("react/jsx-runtime");
var Pagination = ({ currentPage, totalPages, onPageChange }) => /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("nav", { "aria-label": "Pagination", children: /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("ul", { className: "erb-pagination", children: Array.from({ length: totalPages }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("li", { className: "erb-pagination__item", children: /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("button", { "aria-current": currentPage === i + 1 ? "page" : void 0, onClick: () => onPageChange(i + 1), children: i + 1 }) }, i)) }) });

// src/stepper/Stepper.tsx
var import_jsx_runtime59 = require("react/jsx-runtime");
var Stepper = ({ currentStep, steps }) => /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("ol", { className: "erb-stepper", children: steps.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("li", { className: "erb-stepper__step", "aria-current": currentStep === i ? "step" : void 0, children: [
  /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("span", { children: i + 1 }),
  " ",
  /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("span", { children: step })
] }, i)) });

// src/accordion/Accordion.tsx
var import_react64 = require("react");
var import_jsx_runtime60 = require("react/jsx-runtime");
var Accordion = ({ title, children, defaultExpanded = false }) => {
  const [expanded, setExpanded] = (0, import_react64.useState)(defaultExpanded);
  return /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("div", { className: "erb-accordion", children: [
    /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("h3", { className: "erb-accordion__header", children: /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("button", { "aria-expanded": expanded, className: "erb-accordion__button", onClick: () => setExpanded(!expanded), children: title }) }),
    /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("div", { className: "erb-accordion__panel", hidden: !expanded, children })
  ] });
};

// src/skip-link/SkipLink.tsx
var import_react65 = __toESM(require("react"));
var import_jsx_runtime61 = require("react/jsx-runtime");
var SkipLink = import_react65.default.forwardRef(({ href, children, className = "", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("a", { ref, href, className: `erb-skip-link ${className}`, ...props, children }));
SkipLink.displayName = "SkipLink";

// src/combobox/Combobox.tsx
var import_react66 = require("react");
var import_jsx_runtime62 = require("react/jsx-runtime");
var Combobox = (0, import_react66.forwardRef)(
  ({ className, options, value = "", onChange, label, error, id, disabled, placeholder, ...props }, ref) => {
    const generatedId = (0, import_react66.useId)();
    const comboboxId = id ?? generatedId;
    const errorId = `${comboboxId}-error`;
    const listboxId = `${comboboxId}-listbox`;
    const [isOpen, setIsOpen] = (0, import_react66.useState)(false);
    const [inputValue, setInputValue] = (0, import_react66.useState)("");
    const [activeIndex, setActiveIndex] = (0, import_react66.useState)(-1);
    const wrapperRef = (0, import_react66.useRef)(null);
    const inputRef = (0, import_react66.useRef)(null);
    (0, import_react66.useEffect)(() => {
      const selectedOption = options.find((opt) => opt.value === value);
      setInputValue(selectedOption ? selectedOption.label : "");
    }, [value, options]);
    const filteredOptions = options.filter(
      (opt) => opt.label.toLowerCase().includes(inputValue.toLowerCase())
    );
    (0, import_react66.useEffect)(() => {
      const handleClickOutside = (event) => {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    const handleInputChange = (e) => {
      setInputValue(e.target.value);
      setIsOpen(true);
      setActiveIndex(-1);
    };
    const handleSelect = (selectedValue) => {
      const selectedOption = options.find((opt) => opt.value === selectedValue);
      if (selectedOption) {
        setInputValue(selectedOption.label);
        onChange?.(selectedValue);
      }
      setIsOpen(false);
      inputRef.current?.focus();
    };
    const handleKeyDown = (e) => {
      if (!isOpen || !options) {
        if (e.key === "ArrowDown" || e.key === "ArrowUp" || e.key === "Enter") {
          setIsOpen(true);
        }
        return;
      }
      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          setActiveIndex((prev) => prev < filteredOptions.length - 1 ? prev + 1 : prev);
          break;
        case "ArrowUp":
          e.preventDefault();
          setActiveIndex((prev) => prev > 0 ? prev - 1 : 0);
          break;
        case "Enter":
          e.preventDefault();
          if (activeIndex >= 0 && activeIndex < filteredOptions.length) {
            handleSelect(filteredOptions[activeIndex].value);
          }
          break;
        case "Escape":
          setIsOpen(false);
          break;
      }
    };
    return /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)("div", { className: "erb-combobox-wrapper", ref: wrapperRef, children: [
      label && /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("label", { htmlFor: comboboxId, className: "erb-label", children: label }),
      /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("div", { className: "erb-combobox", children: /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(
        "input",
        {
          ref: (node) => {
            inputRef.current = node;
            if (typeof ref === "function") ref(node);
            else if (ref) ref.current = node;
          },
          id: comboboxId,
          type: "text",
          role: "combobox",
          "aria-expanded": isOpen,
          "aria-controls": listboxId,
          "aria-activedescendant": isOpen && activeIndex >= 0 ? `${listboxId}-option-${activeIndex}` : void 0,
          "aria-invalid": !!error,
          "aria-describedby": error ? errorId : void 0,
          className: cn("erb-combobox-input", className),
          value: inputValue,
          onChange: handleInputChange,
          onKeyDown: handleKeyDown,
          onFocus: () => setIsOpen(true),
          disabled,
          placeholder,
          ...props
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(
        "ul",
        {
          id: listboxId,
          className: "erb-combobox-listbox",
          "data-open": isOpen && filteredOptions.length > 0,
          role: "listbox",
          children: filteredOptions.map((opt, index) => /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(
            "li",
            {
              id: `${listboxId}-option-${index}`,
              className: "erb-combobox-option",
              role: "option",
              "aria-selected": opt.value === value,
              onClick: () => handleSelect(opt.value),
              onMouseEnter: () => setActiveIndex(index),
              style: activeIndex === index ? { backgroundColor: "var(--erb-color-bg-subtle)" } : {},
              children: opt.label
            },
            opt.value
          ))
        }
      ),
      error && /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("span", { id: errorId, className: "erb-error-message", children: error })
    ] });
  }
);
Combobox.displayName = "Combobox";

// src/multi-select/MultiSelect.tsx
var import_react67 = require("react");
var import_jsx_runtime63 = require("react/jsx-runtime");
var MultiSelect = (0, import_react67.forwardRef)(
  ({ className, options, value = [], onChange, label, error, id, disabled, placeholder, ...props }, ref) => {
    const generatedId = (0, import_react67.useId)();
    const selectId = id ?? generatedId;
    const errorId = `${selectId}-error`;
    const listboxId = `${selectId}-listbox`;
    const [isOpen, setIsOpen] = (0, import_react67.useState)(false);
    const [inputValue, setInputValue] = (0, import_react67.useState)("");
    const [activeIndex, setActiveIndex] = (0, import_react67.useState)(-1);
    const wrapperRef = (0, import_react67.useRef)(null);
    const inputRef = (0, import_react67.useRef)(null);
    const selectedOptions = options.filter((opt) => value.includes(opt.value));
    const unselectedOptions = options.filter((opt) => !value.includes(opt.value));
    const filteredOptions = unselectedOptions.filter(
      (opt) => opt.label.toLowerCase().includes(inputValue.toLowerCase())
    );
    (0, import_react67.useEffect)(() => {
      const handleClickOutside = (event) => {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    const handleRemove = (valueToRemove, e) => {
      e?.stopPropagation();
      if (disabled) return;
      const newValue = value.filter((v) => v !== valueToRemove);
      onChange?.(newValue);
    };
    const handleSelect = (selectedValue) => {
      if (disabled) return;
      const newValue = [...value, selectedValue];
      onChange?.(newValue);
      setInputValue("");
      setIsOpen(false);
      inputRef.current?.focus();
    };
    const handleKeyDown = (e) => {
      if (disabled) return;
      if (e.key === "Backspace" && inputValue === "" && value.length > 0) {
        handleRemove(value[value.length - 1]);
        return;
      }
      if (!isOpen || !options) {
        if (e.key === "ArrowDown" || e.key === "ArrowUp" || e.key === "Enter") {
          setIsOpen(true);
        }
        return;
      }
      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          setActiveIndex((prev) => prev < filteredOptions.length - 1 ? prev + 1 : prev);
          break;
        case "ArrowUp":
          e.preventDefault();
          setActiveIndex((prev) => prev > 0 ? prev - 1 : 0);
          break;
        case "Enter":
          e.preventDefault();
          if (activeIndex >= 0 && activeIndex < filteredOptions.length) {
            handleSelect(filteredOptions[activeIndex].value);
          }
          break;
        case "Escape":
          setIsOpen(false);
          break;
      }
    };
    return /* @__PURE__ */ (0, import_jsx_runtime63.jsxs)("div", { className: "erb-multi-select-wrapper", ref: wrapperRef, children: [
      label && /* @__PURE__ */ (0, import_jsx_runtime63.jsx)("label", { htmlFor: selectId, className: "erb-label", children: label }),
      /* @__PURE__ */ (0, import_jsx_runtime63.jsxs)(
        "div",
        {
          className: cn("erb-multi-select-trigger", className),
          onClick: () => {
            if (!disabled) {
              setIsOpen(true);
              inputRef.current?.focus();
            }
          },
          "aria-invalid": !!error,
          "aria-disabled": disabled,
          children: [
            selectedOptions.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime63.jsxs)("span", { className: "erb-multi-select-tag", children: [
              opt.label,
              /* @__PURE__ */ (0, import_jsx_runtime63.jsx)(
                "button",
                {
                  type: "button",
                  className: "erb-multi-select-tag-remove",
                  onClick: (e) => handleRemove(opt.value, e),
                  disabled,
                  "aria-label": `Remove ${opt.label}`,
                  children: "\xD7"
                }
              )
            ] }, opt.value)),
            /* @__PURE__ */ (0, import_jsx_runtime63.jsx)(
              "input",
              {
                ref: (node) => {
                  inputRef.current = node;
                  if (typeof ref === "function") ref(node);
                  else if (ref) ref.current = node;
                },
                id: selectId,
                type: "text",
                className: "erb-multi-select-input",
                role: "combobox",
                "aria-expanded": isOpen,
                "aria-controls": listboxId,
                "aria-activedescendant": isOpen && activeIndex >= 0 ? `${listboxId}-option-${activeIndex}` : void 0,
                "aria-describedby": error ? errorId : void 0,
                value: inputValue,
                onChange: (e) => {
                  setInputValue(e.target.value);
                  setIsOpen(true);
                  setActiveIndex(-1);
                },
                onKeyDown: handleKeyDown,
                disabled,
                placeholder: value.length === 0 ? placeholder : "",
                ...props
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime63.jsx)(
        "ul",
        {
          id: listboxId,
          className: "erb-multi-select-listbox",
          "data-open": isOpen && filteredOptions.length > 0,
          role: "listbox",
          "aria-multiselectable": "true",
          children: filteredOptions.map((opt, index) => /* @__PURE__ */ (0, import_jsx_runtime63.jsx)(
            "li",
            {
              id: `${listboxId}-option-${index}`,
              className: "erb-multi-select-option",
              role: "option",
              "aria-selected": "false",
              onClick: () => handleSelect(opt.value),
              onMouseEnter: () => setActiveIndex(index),
              "data-focused": activeIndex === index,
              children: opt.label
            },
            opt.value
          ))
        }
      ),
      error && /* @__PURE__ */ (0, import_jsx_runtime63.jsx)("span", { id: errorId, className: "erb-error-message", children: error })
    ] });
  }
);
MultiSelect.displayName = "MultiSelect";

// src/slider/Slider.tsx
var import_react68 = __toESM(require("react"));
var import_jsx_runtime64 = require("react/jsx-runtime");
var Slider = import_react68.default.forwardRef(
  ({ min = 0, max = 100, step = 1, value, defaultValue, onChange, disabled = false, className = "", ...props }, ref) => {
    const [internalValue, setInternalValue] = (0, import_react68.useState)(defaultValue ?? min);
    const containerRef = (0, import_react68.useRef)(null);
    const isControlled = value !== void 0;
    const currentValue = isControlled ? value : internalValue;
    const clamp = (val) => Math.min(Math.max(val, min), max);
    const updateValue = (0, import_react68.useCallback)((newValue) => {
      const clampedValue = clamp(newValue);
      const steppedValue = Math.round((clampedValue - min) / step) * step + min;
      const finalValue = clamp(steppedValue);
      if (!isControlled) {
        setInternalValue(finalValue);
      }
      if (onChange && currentValue !== finalValue) {
        onChange(finalValue);
      }
    }, [min, max, step, isControlled, currentValue, onChange]);
    const handlePointerDown = (e) => {
      if (disabled || !containerRef.current) return;
      e.currentTarget.setPointerCapture(e.pointerId);
      const rect = containerRef.current.getBoundingClientRect();
      const percent = (e.clientX - rect.left) / rect.width;
      updateValue(min + percent * (max - min));
    };
    const handlePointerMove = (e) => {
      if (disabled || !containerRef.current || !e.currentTarget.hasPointerCapture(e.pointerId)) return;
      const rect = containerRef.current.getBoundingClientRect();
      const percent = (e.clientX - rect.left) / rect.width;
      updateValue(min + percent * (max - min));
    };
    const handleKeyDown = (e) => {
      if (disabled) return;
      let newValue = currentValue;
      switch (e.key) {
        case "ArrowRight":
        case "ArrowUp":
          newValue += step;
          break;
        case "ArrowLeft":
        case "ArrowDown":
          newValue -= step;
          break;
        case "Home":
          newValue = min;
          break;
        case "End":
          newValue = max;
          break;
        default:
          return;
      }
      e.preventDefault();
      updateValue(newValue);
    };
    const percentage = (currentValue - min) / (max - min) * 100;
    return /* @__PURE__ */ (0, import_jsx_runtime64.jsxs)(
      "div",
      {
        ref: (node) => {
          containerRef.current = node;
          if (typeof ref === "function") ref(node);
          else if (ref) ref.current = node;
        },
        className: `erb-slider-container ${disabled ? "erb-slider-container--disabled" : ""} ${className}`,
        onPointerDown: handlePointerDown,
        onPointerMove: handlePointerMove,
        onPointerUp: (e) => e.currentTarget.releasePointerCapture(e.pointerId),
        ...props,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime64.jsx)("div", { className: "erb-slider-track" }),
          /* @__PURE__ */ (0, import_jsx_runtime64.jsx)("div", { className: "erb-slider-fill", style: { width: `${percentage}%`, left: 0 } }),
          /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(
            "div",
            {
              className: "erb-slider-thumb",
              style: { left: `${percentage}%` },
              role: "slider",
              tabIndex: disabled ? -1 : 0,
              "aria-valuemin": min,
              "aria-valuemax": max,
              "aria-valuenow": currentValue,
              "aria-disabled": disabled,
              onKeyDown: handleKeyDown
            }
          )
        ]
      }
    );
  }
);
Slider.displayName = "Slider";

// src/slider/RangeSlider.tsx
var import_react69 = __toESM(require("react"));
var import_jsx_runtime65 = require("react/jsx-runtime");
var RangeSlider = import_react69.default.forwardRef(
  ({ min = 0, max = 100, step = 1, value, defaultValue, onChange, disabled = false, className = "", ...props }, ref) => {
    const [internalValue, setInternalValue] = (0, import_react69.useState)(defaultValue ?? [min, max]);
    const containerRef = (0, import_react69.useRef)(null);
    const isControlled = value !== void 0;
    const currentValue = isControlled ? value : internalValue;
    const [activeThumb, setActiveThumb] = (0, import_react69.useState)(null);
    const clamp = (val) => Math.min(Math.max(val, min), max);
    const updateValue = (0, import_react69.useCallback)((index, newValue) => {
      const clampedValue = clamp(newValue);
      const steppedValue = Math.round((clampedValue - min) / step) * step + min;
      let finalValue = clamp(steppedValue);
      const newValues = [...currentValue];
      newValues[index] = finalValue;
      if (index === 0 && newValues[0] > newValues[1]) {
        newValues[0] = newValues[1];
      } else if (index === 1 && newValues[1] < newValues[0]) {
        newValues[1] = newValues[0];
      }
      if (!isControlled) {
        setInternalValue(newValues);
      }
      if (onChange && (currentValue[0] !== newValues[0] || currentValue[1] !== newValues[1])) {
        onChange(newValues);
      }
    }, [min, max, step, isControlled, currentValue, onChange]);
    const getClosestThumb = (val) => {
      const d0 = Math.abs(currentValue[0] - val);
      const d1 = Math.abs(currentValue[1] - val);
      return d0 < d1 ? 0 : 1;
    };
    const handlePointerDown = (e) => {
      if (disabled || !containerRef.current) return;
      e.currentTarget.setPointerCapture(e.pointerId);
      const rect = containerRef.current.getBoundingClientRect();
      const percent = (e.clientX - rect.left) / rect.width;
      const val = min + percent * (max - min);
      const thumb = getClosestThumb(val);
      setActiveThumb(thumb);
      updateValue(thumb, val);
    };
    const handlePointerMove = (e) => {
      if (disabled || !containerRef.current || !e.currentTarget.hasPointerCapture(e.pointerId) || activeThumb === null) return;
      const rect = containerRef.current.getBoundingClientRect();
      const percent = (e.clientX - rect.left) / rect.width;
      const val = min + percent * (max - min);
      updateValue(activeThumb, val);
    };
    const handleKeyDown = (index) => (e) => {
      if (disabled) return;
      let val = currentValue[index];
      switch (e.key) {
        case "ArrowRight":
        case "ArrowUp":
          val += step;
          break;
        case "ArrowLeft":
        case "ArrowDown":
          val -= step;
          break;
        case "Home":
          val = index === 0 ? min : currentValue[0];
          break;
        case "End":
          val = index === 1 ? max : currentValue[1];
          break;
        default:
          return;
      }
      e.preventDefault();
      updateValue(index, val);
    };
    const p0 = (currentValue[0] - min) / (max - min) * 100;
    const p1 = (currentValue[1] - min) / (max - min) * 100;
    return /* @__PURE__ */ (0, import_jsx_runtime65.jsxs)(
      "div",
      {
        ref: (node) => {
          containerRef.current = node;
          if (typeof ref === "function") ref(node);
          else if (ref) ref.current = node;
        },
        className: `erb-slider-container ${disabled ? "erb-slider-container--disabled" : ""} ${className}`,
        onPointerDown: handlePointerDown,
        onPointerMove: handlePointerMove,
        onPointerUp: (e) => {
          e.currentTarget.releasePointerCapture(e.pointerId);
          setActiveThumb(null);
        },
        ...props,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime65.jsx)("div", { className: "erb-slider-track" }),
          /* @__PURE__ */ (0, import_jsx_runtime65.jsx)("div", { className: "erb-slider-fill", style: { left: `${p0}%`, width: `${p1 - p0}%` } }),
          /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(
            "div",
            {
              className: "erb-slider-thumb",
              style: { left: `${p0}%` },
              role: "slider",
              tabIndex: disabled ? -1 : 0,
              "aria-valuemin": min,
              "aria-valuemax": currentValue[1],
              "aria-valuenow": currentValue[0],
              "aria-disabled": disabled,
              onKeyDown: handleKeyDown(0)
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(
            "div",
            {
              className: "erb-slider-thumb",
              style: { left: `${p1}%` },
              role: "slider",
              tabIndex: disabled ? -1 : 0,
              "aria-valuemin": currentValue[0],
              "aria-valuemax": max,
              "aria-valuenow": currentValue[1],
              "aria-disabled": disabled,
              onKeyDown: handleKeyDown(1)
            }
          )
        ]
      }
    );
  }
);
RangeSlider.displayName = "RangeSlider";

// src/DatePicker/DatePicker.tsx
var import_react70 = __toESM(require("react"));
var import_jsx_runtime66 = require("react/jsx-runtime");
var DatePicker = import_react70.default.forwardRef(
  ({ className = "", size = "md", ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(
      "input",
      {
        ref,
        type: "date",
        className: `erb-datepicker ${className}`,
        "data-size": size,
        ...props
      }
    );
  }
);
DatePicker.displayName = "DatePicker";

// src/DateRangePicker/DateRangePicker.tsx
var import_react71 = __toESM(require("react"));
var import_jsx_runtime67 = require("react/jsx-runtime");
var DateRangePicker = import_react71.default.forwardRef(
  ({ className = "", size = "md", startDate, endDate, onStartDateChange, onEndDateChange, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime67.jsxs)("div", { ref, className: `erb-daterangepicker ${className}`, "data-size": size, ...props, children: [
      /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(
        "input",
        {
          type: "date",
          className: "erb-daterangepicker-start",
          value: startDate || "",
          onChange: (e) => onStartDateChange?.(e.target.value)
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime67.jsx)("span", { className: "erb-daterangepicker-separator", children: "-" }),
      /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(
        "input",
        {
          type: "date",
          className: "erb-daterangepicker-end",
          value: endDate || "",
          onChange: (e) => onEndDateChange?.(e.target.value)
        }
      )
    ] });
  }
);
DateRangePicker.displayName = "DateRangePicker";

// src/TimePicker/TimePicker.tsx
var import_react72 = __toESM(require("react"));
var import_jsx_runtime68 = require("react/jsx-runtime");
var TimePicker = import_react72.default.forwardRef(
  ({ className = "", size = "md", ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime68.jsx)(
      "input",
      {
        ref,
        type: "time",
        className: `erb-timepicker ${className}`,
        "data-size": size,
        ...props
      }
    );
  }
);
TimePicker.displayName = "TimePicker";

// src/ColorPicker/ColorPicker.tsx
var import_jsx_runtime69 = require("react/jsx-runtime");
var ColorPicker = ({
  value = "#000000",
  onChange,
  className = "",
  ...props
}) => {
  const handleChange = (e) => {
    onChange?.(e.target.value);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime69.jsx)("div", { className: `erb-color-picker ${className}`.trim(), children: /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(
    "input",
    {
      type: "color",
      className: "erb-color-picker-input",
      value,
      onChange: handleChange,
      ...props
    }
  ) });
};

// src/FileUpload/FileUpload.tsx
var import_react73 = require("react");
var import_jsx_runtime70 = require("react/jsx-runtime");
var FileUpload = ({
  onFileSelect,
  className = "",
  children,
  ...props
}) => {
  const [isDragActive, setIsDragActive] = (0, import_react73.useState)(false);
  const fileInputRef = (0, import_react73.useRef)(null);
  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(true);
  };
  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);
  };
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      onFileSelect?.(e.dataTransfer.files);
    }
  };
  const handleChange = (e) => {
    onFileSelect?.(e.target.files);
  };
  const handleClick = () => {
    fileInputRef.current?.click();
  };
  return /* @__PURE__ */ (0, import_jsx_runtime70.jsxs)(
    "div",
    {
      className: `erb-file-upload ${className}`.trim(),
      "data-drag-active": isDragActive,
      onDragEnter: handleDragEnter,
      onDragLeave: handleDragLeave,
      onDragOver: handleDragOver,
      onDrop: handleDrop,
      onClick: handleClick,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime70.jsx)(
          "input",
          {
            type: "file",
            ref: fileInputRef,
            className: "erb-file-upload-input",
            onChange: handleChange,
            ...props
          }
        ),
        children || /* @__PURE__ */ (0, import_jsx_runtime70.jsx)("span", { children: "Drag & Drop files here or click to browse" })
      ]
    }
  );
};

// src/pin-input/PinInput.tsx
var import_react74 = require("react");
var import_jsx_runtime71 = require("react/jsx-runtime");
var PinInput = (0, import_react74.forwardRef)(({ length = 4, value = "", onChange, disabled = false }, ref) => {
  const inputsRef = (0, import_react74.useRef)([]);
  const handleChange = (e, index) => {
    const val = e.target.value;
    const char = val.slice(-1);
    if (char && !/^[0-9]$/.test(char)) return;
    const newValue = value.split("");
    newValue[index] = char;
    const finalValue = newValue.join("");
    onChange?.(finalValue.slice(0, length));
    if (char && index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      if (!value[index] && index > 0) {
        inputsRef.current[index - 1]?.focus();
      } else {
        const newValue = value.split("");
        newValue[index] = "";
        onChange?.(newValue.join(""));
      }
    } else if (e.key === "ArrowLeft" && index > 0) {
      inputsRef.current[index - 1]?.focus();
    } else if (e.key === "ArrowRight" && index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };
  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text/plain").replace(/\D/g, "").slice(0, length);
    if (pastedData) {
      onChange?.(pastedData);
      const nextFocus = Math.min(pastedData.length, length - 1);
      inputsRef.current[nextFocus]?.focus();
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime71.jsx)("div", { className: "erb-pin-input", ref, children: Array.from({ length }).map((_, index) => /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(
    "input",
    {
      ref: (el) => inputsRef.current[index] = el,
      className: "erb-pin-input__field",
      type: "text",
      inputMode: "numeric",
      maxLength: 1,
      value: value[index] || "",
      onChange: (e) => handleChange(e, index),
      onKeyDown: (e) => handleKeyDown(e, index),
      onPaste: handlePaste,
      disabled
    },
    index
  )) });
});
PinInput.displayName = "PinInput";

// src/tags-input/TagsInput.tsx
var import_react75 = require("react");
var import_jsx_runtime72 = require("react/jsx-runtime");
var TagsInput = (0, import_react75.forwardRef)(({ tags = [], onChange, disabled = false, placeholder }, ref) => {
  const [inputValue, setInputValue] = (0, import_react75.useState)("");
  const handleKeyDown = (e) => {
    if (disabled) return;
    if (e.key === "Enter" && inputValue.trim()) {
      e.preventDefault();
      if (!tags.includes(inputValue.trim())) {
        onChange?.([...tags, inputValue.trim()]);
      }
      setInputValue("");
    } else if (e.key === "Backspace" && !inputValue && tags.length > 0) {
      onChange?.(tags.slice(0, -1));
    }
  };
  const removeTag = (tagToRemove) => {
    if (disabled) return;
    onChange?.(tags.filter((tag) => tag !== tagToRemove));
  };
  return /* @__PURE__ */ (0, import_jsx_runtime72.jsxs)("div", { className: `erb-tags-input ${disabled ? "erb-tags-input--disabled" : ""}`, ref, children: [
    tags.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime72.jsxs)("span", { className: "erb-tags-input__tag", children: [
      tag,
      !disabled && /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(
        "button",
        {
          type: "button",
          className: "erb-tags-input__tag-remove",
          onClick: () => removeTag(tag),
          "aria-label": `Remove ${tag}`,
          children: "\xD7"
        }
      )
    ] }, tag)),
    /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(
      "input",
      {
        type: "text",
        className: "erb-tags-input__input",
        value: inputValue,
        onChange: (e) => setInputValue(e.target.value),
        onKeyDown: handleKeyDown,
        disabled,
        placeholder: tags.length === 0 ? placeholder : ""
      }
    )
  ] });
});
TagsInput.displayName = "TagsInput";

// src/rating/Rating.tsx
var import_react76 = require("react");
var import_jsx_runtime73 = require("react/jsx-runtime");
var Rating = (0, import_react76.forwardRef)(({ max = 5, value = 0, onChange, disabled = false }, ref) => {
  const [hoverValue, setHoverValue] = (0, import_react76.useState)(null);
  const handleKeyDown = (e) => {
    if (disabled) return;
    let newValue = value;
    if (e.key === "ArrowRight" || e.key === "ArrowUp") {
      newValue = Math.min(value + 1, max);
    } else if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
      newValue = Math.max(value - 1, 1);
    }
    if (newValue !== value) {
      e.preventDefault();
      onChange?.(newValue);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime73.jsx)(
    "div",
    {
      ref,
      className: "erb-rating",
      role: "slider",
      "aria-valuemin": 1,
      "aria-valuemax": max,
      "aria-valuenow": value,
      "aria-disabled": disabled,
      tabIndex: disabled ? -1 : 0,
      onKeyDown: handleKeyDown,
      onMouseLeave: () => setHoverValue(null),
      children: Array.from({ length: max }).map((_, index) => {
        const starValue = index + 1;
        const isActive = starValue <= (hoverValue ?? value);
        return /* @__PURE__ */ (0, import_jsx_runtime73.jsx)(
          "span",
          {
            className: `erb-rating__item ${isActive ? "erb-rating__item--active" : ""}`,
            onClick: () => !disabled && onChange?.(starValue),
            onMouseEnter: () => !disabled && setHoverValue(starValue),
            "aria-hidden": "true",
            children: "\u2605"
          },
          starValue
        );
      })
    }
  );
});
Rating.displayName = "Rating";

// src/Table/Table.tsx
var import_react77 = __toESM(require("react"));
var import_jsx_runtime74 = require("react/jsx-runtime");
var Table = import_react77.default.forwardRef((props, ref) => {
  const { className = "", ...rest } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime74.jsx)("table", { ref, className: `erb-table ${className}`, ...rest });
});
Table.displayName = "Table";
var TableHead = import_react77.default.forwardRef((props, ref) => /* @__PURE__ */ (0, import_jsx_runtime74.jsx)("thead", { ref, ...props }));
TableHead.displayName = "TableHead";
var TableBody = import_react77.default.forwardRef((props, ref) => /* @__PURE__ */ (0, import_jsx_runtime74.jsx)("tbody", { ref, ...props }));
TableBody.displayName = "TableBody";
var TableRow = import_react77.default.forwardRef((props, ref) => /* @__PURE__ */ (0, import_jsx_runtime74.jsx)("tr", { ref, ...props }));
TableRow.displayName = "TableRow";
var TableCell = import_react77.default.forwardRef((props, ref) => /* @__PURE__ */ (0, import_jsx_runtime74.jsx)("td", { ref, ...props }));
TableCell.displayName = "TableCell";
var TableHeaderCell = import_react77.default.forwardRef((props, ref) => /* @__PURE__ */ (0, import_jsx_runtime74.jsx)("th", { ref, ...props }));
TableHeaderCell.displayName = "TableHeaderCell";

// src/List/List.tsx
var import_react78 = __toESM(require("react"));
var import_jsx_runtime75 = require("react/jsx-runtime");
var List = import_react78.default.forwardRef((props, ref) => {
  const { as: Component = "ul", className = "", ...rest } = props;
  const listClass = Component === "ol" ? "erb-list--ordered" : "erb-list--unordered";
  return import_react78.default.createElement(Component, { ref, className: `erb-list ${listClass} ${className}`.trim(), ...rest });
});
List.displayName = "List";
var ListItem = import_react78.default.forwardRef((props, ref) => {
  const { className = "", ...rest } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime75.jsx)("li", { ref, className: `erb-list-item ${className}`.trim(), ...rest });
});
ListItem.displayName = "ListItem";

// src/DescriptionList/DescriptionList.tsx
var import_react79 = __toESM(require("react"));
var import_jsx_runtime76 = require("react/jsx-runtime");
var DescriptionList = import_react79.default.forwardRef((props, ref) => {
  const { className = "", ...rest } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime76.jsx)("dl", { ref, className: `erb-description-list ${className}`.trim(), ...rest });
});
DescriptionList.displayName = "DescriptionList";
var DescriptionTerm = import_react79.default.forwardRef((props, ref) => {
  const { className = "", ...rest } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime76.jsx)("dt", { ref, className: `erb-description-list-term ${className}`.trim(), ...rest });
});
DescriptionTerm.displayName = "DescriptionTerm";
var DescriptionDetails = import_react79.default.forwardRef((props, ref) => {
  const { className = "", ...rest } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime76.jsx)("dd", { ref, className: `erb-description-list-details ${className}`.trim(), ...rest });
});
DescriptionDetails.displayName = "DescriptionDetails";

// src/Stat/Stat.tsx
var import_react80 = __toESM(require("react"));
var import_jsx_runtime77 = require("react/jsx-runtime");
var Stat = import_react80.default.forwardRef((props, ref) => {
  const { label, value, helpText, className = "", ...rest } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime77.jsxs)("div", { ref, className: `erb-stat ${className}`.trim(), ...rest, children: [
    /* @__PURE__ */ (0, import_jsx_runtime77.jsx)("div", { className: "erb-stat-label", children: label }),
    /* @__PURE__ */ (0, import_jsx_runtime77.jsx)("div", { className: "erb-stat-value", children: value }),
    helpText && /* @__PURE__ */ (0, import_jsx_runtime77.jsx)("div", { className: "erb-stat-help-text", children: helpText })
  ] });
});
Stat.displayName = "Stat";

// src/Timeline/Timeline.tsx
var import_jsx_runtime78 = require("react/jsx-runtime");
var TimelineItem = ({ title, description, isLast }) => /* @__PURE__ */ (0, import_jsx_runtime78.jsxs)("li", { className: "erb-timeline-item", children: [
  /* @__PURE__ */ (0, import_jsx_runtime78.jsxs)("div", { className: "erb-timeline-indicator", children: [
    /* @__PURE__ */ (0, import_jsx_runtime78.jsx)("div", { className: "erb-timeline-dot" }),
    !isLast && /* @__PURE__ */ (0, import_jsx_runtime78.jsx)("div", { className: "erb-timeline-line" })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime78.jsxs)("div", { className: "erb-timeline-content", children: [
    /* @__PURE__ */ (0, import_jsx_runtime78.jsx)("div", { className: "erb-timeline-title", children: title }),
    description && /* @__PURE__ */ (0, import_jsx_runtime78.jsx)("div", { className: "erb-timeline-description", children: description })
  ] })
] });
var Timeline = ({ children, className = "" }) => /* @__PURE__ */ (0, import_jsx_runtime78.jsx)("ul", { className: `erb-timeline ${className}`, children });

// src/EmptyState/EmptyState.tsx
var import_jsx_runtime79 = require("react/jsx-runtime");
var EmptyState = ({ title, description, icon, children, className = "" }) => /* @__PURE__ */ (0, import_jsx_runtime79.jsxs)("div", { className: `erb-empty-state ${className}`, children: [
  icon && /* @__PURE__ */ (0, import_jsx_runtime79.jsx)("div", { className: "erb-empty-state-icon", children: icon }),
  /* @__PURE__ */ (0, import_jsx_runtime79.jsx)("div", { className: "erb-empty-state-title", children: title }),
  description && /* @__PURE__ */ (0, import_jsx_runtime79.jsx)("div", { className: "erb-empty-state-description", children: description }),
  children && /* @__PURE__ */ (0, import_jsx_runtime79.jsx)("div", { className: "erb-empty-state-actions", children })
] });

// src/ErrorState/ErrorState.tsx
var import_jsx_runtime80 = require("react/jsx-runtime");
var ErrorState = ({ title, description, className = "", onRetry }) => /* @__PURE__ */ (0, import_jsx_runtime80.jsxs)("div", { className: `erb-error-state ${className}`, children: [
  /* @__PURE__ */ (0, import_jsx_runtime80.jsx)("div", { className: "erb-error-state-title", children: title }),
  description && /* @__PURE__ */ (0, import_jsx_runtime80.jsx)("div", { className: "erb-error-state-description", children: description }),
  onRetry && /* @__PURE__ */ (0, import_jsx_runtime80.jsx)("button", { className: "erb-error-state-retry", onClick: onRetry, children: "Retry" })
] });

// src/Toast/Toast.tsx
var import_react81 = require("react");
var import_jsx_runtime81 = require("react/jsx-runtime");
var Toast = ({ message, onClose }) => /* @__PURE__ */ (0, import_jsx_runtime81.jsxs)("div", { className: "erb-toast", children: [
  /* @__PURE__ */ (0, import_jsx_runtime81.jsx)("div", { className: "erb-toast-message", children: message }),
  /* @__PURE__ */ (0, import_jsx_runtime81.jsx)("button", { className: "erb-toast-close", onClick: onClose, children: "\xD7" })
] });
var ToastContext = (0, import_react81.createContext)(void 0);
var ToastProvider = ({ children }) => {
  const [toasts, setToasts] = (0, import_react81.useState)([]);
  const addToast = (0, import_react81.useCallback)((message) => {
    const id = Math.random().toString(36).substring(7);
    setToasts((prev) => [...prev, { id, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3e3);
  }, []);
  const removeToast = (0, import_react81.useCallback)((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime81.jsxs)(ToastContext.Provider, { value: { addToast }, children: [
    children,
    /* @__PURE__ */ (0, import_jsx_runtime81.jsx)("div", { className: "erb-toast-container", children: toasts.map((toast) => /* @__PURE__ */ (0, import_jsx_runtime81.jsx)(Toast, { id: toast.id, message: toast.message, onClose: () => removeToast(toast.id) }, toast.id)) })
  ] });
};
var useToast = () => {
  const context = (0, import_react81.useContext)(ToastContext);
  if (!context) throw new Error("useToast must be used within a ToastProvider");
  return context;
};

// src/banner/banner.tsx
var import_react82 = __toESM(require("react"));
var import_jsx_runtime82 = require("react/jsx-runtime");
var Banner = import_react82.default.forwardRef(({ variant = "info", className = "", children, ...props }, ref) => {
  return /* @__PURE__ */ (0, import_jsx_runtime82.jsx)("div", { ref, className: `erb-banner erb-banner--${variant} ${className}`, role: "alert", ...props, children });
});
Banner.displayName = "Banner";

// src/progress/progress.tsx
var import_react83 = __toESM(require("react"));
var import_jsx_runtime83 = require("react/jsx-runtime");
var Progress = import_react83.default.forwardRef(({ value, max = 100, className = "", ...props }, ref) => {
  const percentage = Math.min(100, Math.max(0, value / max * 100));
  return /* @__PURE__ */ (0, import_jsx_runtime83.jsx)("div", { ref, className: `erb-progress ${className}`, role: "progressbar", "aria-valuenow": value, "aria-valuemin": 0, "aria-valuemax": max, ...props, children: /* @__PURE__ */ (0, import_jsx_runtime83.jsx)("div", { className: "erb-progress__bar", style: { width: `${percentage}%` } }) });
});
Progress.displayName = "Progress";

// src/loading-overlay/loading-overlay.tsx
var import_react84 = __toESM(require("react"));
var import_jsx_runtime84 = require("react/jsx-runtime");
var LoadingOverlay = import_react84.default.forwardRef(({ active = true, className = "", ...props }, ref) => {
  if (!active) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime84.jsx)("div", { ref, className: `erb-loading-overlay ${className}`, ...props, children: /* @__PURE__ */ (0, import_jsx_runtime84.jsx)("div", { className: "erb-loading-overlay__spinner", "aria-label": "Loading" }) });
});
LoadingOverlay.displayName = "LoadingOverlay";

// src/image/image.tsx
var import_react85 = __toESM(require("react"));
var import_jsx_runtime85 = require("react/jsx-runtime");
var Image = import_react85.default.forwardRef(({ lazy = false, fallbackText = "Image not available", src, alt, className = "", ...props }, ref) => {
  const [error, setError] = (0, import_react85.useState)(false);
  if (error || !src) {
    return /* @__PURE__ */ (0, import_jsx_runtime85.jsx)("div", { className: `erb-image-wrapper erb-image--fallback ${className}`, style: { width: props.width || "100%", height: props.height || "100px" }, children: fallbackText });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime85.jsx)("div", { className: `erb-image-wrapper ${className}`, children: /* @__PURE__ */ (0, import_jsx_runtime85.jsx)("img", { ref, src, alt, className: "erb-image", loading: lazy ? "lazy" : "eager", onError: () => setError(true), ...props }) });
});
Image.displayName = "Image";

// src/gallery/Gallery.tsx
var import_jsx_runtime86 = require("react/jsx-runtime");
var Gallery = ({ images, onImageClick }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime86.jsx)("div", { className: "erb-gallery", children: images.map((img, idx) => /* @__PURE__ */ (0, import_jsx_runtime86.jsx)("div", { className: "erb-gallery-item", onClick: () => onImageClick?.(idx), children: /* @__PURE__ */ (0, import_jsx_runtime86.jsx)("img", { src: img.src, alt: img.alt, className: "erb-gallery-img" }) }, idx)) });
};

// src/lightbox/Lightbox.tsx
var import_react86 = require("react");
var import_jsx_runtime87 = require("react/jsx-runtime");
var Lightbox = ({ isOpen, onClose, imageSrc, imageAlt }) => {
  (0, import_react86.useEffect)(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);
  if (!isOpen || !imageSrc) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime87.jsx)("div", { className: "erb-lightbox", onClick: onClose, role: "dialog", "aria-modal": "true", children: /* @__PURE__ */ (0, import_jsx_runtime87.jsxs)("div", { className: "erb-lightbox-content", onClick: (e) => e.stopPropagation(), children: [
    /* @__PURE__ */ (0, import_jsx_runtime87.jsx)("button", { className: "erb-lightbox-close", onClick: onClose, "aria-label": "Close", children: "\xD7" }),
    /* @__PURE__ */ (0, import_jsx_runtime87.jsx)("img", { src: imageSrc, alt: imageAlt, className: "erb-lightbox-img" })
  ] }) });
};

// src/carousel/Carousel.tsx
var import_react87 = require("react");
var import_jsx_runtime88 = require("react/jsx-runtime");
var Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = (0, import_react87.useState)(0);
  if (!images || images.length === 0) return null;
  const next = () => setCurrentIndex((i) => (i + 1) % images.length);
  const prev = () => setCurrentIndex((i) => (i - 1 + images.length) % images.length);
  return /* @__PURE__ */ (0, import_jsx_runtime88.jsxs)("div", { className: "erb-carousel", children: [
    /* @__PURE__ */ (0, import_jsx_runtime88.jsx)(
      "div",
      {
        className: "erb-carousel-track",
        style: { transform: `translateX(-${currentIndex * 100}%)` },
        children: images.map((img, i) => /* @__PURE__ */ (0, import_jsx_runtime88.jsx)("div", { className: "erb-carousel-item", children: /* @__PURE__ */ (0, import_jsx_runtime88.jsx)("img", { src: img.src, alt: img.alt, className: "erb-gallery-img", style: { width: "100%", display: "block" } }) }, i))
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime88.jsxs)("div", { className: "erb-carousel-controls", children: [
      /* @__PURE__ */ (0, import_jsx_runtime88.jsx)("button", { className: "erb-carousel-btn", onClick: prev, "aria-label": "Previous", children: "<" }),
      /* @__PURE__ */ (0, import_jsx_runtime88.jsx)("button", { className: "erb-carousel-btn", onClick: next, "aria-label": "Next", children: ">" })
    ] })
  ] });
};

// src/Hero/Hero.tsx
var import_jsx_runtime89 = require("react/jsx-runtime");
var Hero = ({ className = "", children, ...props }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime89.jsx)("div", { className: `erb-hero ${className}`, ...props, children });
};

// src/FeatureGrid/FeatureGrid.tsx
var import_jsx_runtime90 = require("react/jsx-runtime");
var FeatureGrid = ({ className = "", children, ...props }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime90.jsx)("div", { className: `erb-featuregrid ${className}`, ...props, children });
};

// src/CTA/CTA.tsx
var import_jsx_runtime91 = require("react/jsx-runtime");
var CTA = ({ className = "", children, ...props }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime91.jsx)("div", { className: `erb-cta ${className}`, ...props, children });
};

// src/Testimonial/Testimonial.tsx
var import_jsx_runtime92 = require("react/jsx-runtime");
var Testimonial = ({ className = "", children, ...props }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime92.jsx)("div", { className: `erb-testimonial ${className}`, ...props, children });
};

// src/LogoCloud/LogoCloud.tsx
var import_jsx_runtime93 = require("react/jsx-runtime");
var LogoCloud = ({ className = "", children, ...props }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime93.jsx)("div", { className: `erb-logocloud ${className}`, ...props, children });
};

// src/FAQ/FAQ.tsx
var import_react88 = require("react");
var import_jsx_runtime94 = require("react/jsx-runtime");
var FAQ = (0, import_react88.forwardRef)(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime94.jsx)(
      "div",
      {
        ref,
        className: cn("erb-faq", className),
        ...props
      }
    );
  }
);
FAQ.displayName = "FAQ";

// src/CommandPalette/CommandPalette.tsx
var import_react89 = require("react");
var import_jsx_runtime95 = require("react/jsx-runtime");
var CommandPalette = (0, import_react89.forwardRef)(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime95.jsx)(
      "div",
      {
        ref,
        className: cn("erb-command-palette", className),
        ...props
      }
    );
  }
);
CommandPalette.displayName = "CommandPalette";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Accordion,
  Alert,
  AlertDescription,
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertDialogTitle,
  AlertTitle,
  AppShell,
  AspectRatio,
  Avatar,
  AvatarGroup,
  Badge,
  Banner,
  BottomNav,
  Breadcrumb,
  Button,
  ButtonGroup,
  CTA,
  Callout,
  Card,
  CardBody,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Carousel,
  Center,
  Checkbox,
  CheckboxGroup,
  CheckboxGroupContext,
  Code,
  ColorPicker,
  Combobox,
  CommandPalette,
  Container,
  DatePicker,
  DateRangePicker,
  DescriptionDetails,
  DescriptionList,
  DescriptionTerm,
  Divider,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerTitle,
  EmptyState,
  ErrorState,
  FAQ,
  FeatureGrid,
  Field,
  FileUpload,
  Flex,
  FocusTrap,
  Footer,
  Gallery,
  Grid,
  GridItem,
  Header,
  Heading,
  Hero,
  IconButton,
  Image,
  Inline,
  Input,
  Kbd,
  Label,
  LayerManager,
  Lightbox,
  List,
  ListItem,
  LoadingOverlay,
  LogoCloud,
  Menu,
  MenuItem,
  MenuSeparator,
  MobileNav,
  Modal,
  ModalBody,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalTitle,
  MultiSelect,
  NumberInput,
  Pagination,
  Panel,
  PanelBody,
  PanelFooter,
  PanelHeader,
  PanelOverlay,
  PanelTitle,
  PinInput,
  Popover,
  Portal,
  Progress,
  Prose,
  Radio,
  RadioGroup,
  RadioGroupContext,
  RangeSlider,
  Rating,
  ScrollArea,
  ScrollLock,
  SearchInput,
  Section,
  Select,
  Sidebar,
  Skeleton,
  SkipLink,
  Slider,
  Spacer,
  Spinner,
  Split,
  Stack,
  Stat,
  Stepper,
  Switch,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Tabs,
  TabsList,
  TabsPanel,
  Tag,
  TagsInput,
  Testimonial,
  Text,
  Textarea,
  TimePicker,
  Timeline,
  TimelineItem,
  Toast,
  ToastProvider,
  Tooltip,
  useCheckboxGroup,
  useLayerEscape,
  useLayerTransition,
  useModal,
  useRadioGroup,
  useScrollLock,
  useTabs,
  useToast
});
//# sourceMappingURL=index.js.map