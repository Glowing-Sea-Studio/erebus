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
  Alert: () => Alert,
  AlertDescription: () => AlertDescription,
  AlertTitle: () => AlertTitle,
  AspectRatio: () => AspectRatio,
  Button: () => Button,
  Card: () => Card,
  CardBody: () => CardBody,
  CardDescription: () => CardDescription,
  CardFooter: () => CardFooter,
  CardHeader: () => CardHeader,
  CardTitle: () => CardTitle,
  Center: () => Center,
  Checkbox: () => Checkbox,
  CheckboxGroup: () => CheckboxGroup,
  CheckboxGroupContext: () => CheckboxGroupContext,
  Container: () => Container,
  Flex: () => Flex,
  FocusTrap: () => FocusTrap,
  Footer: () => Footer,
  Grid: () => Grid,
  GridItem: () => GridItem,
  Header: () => Header,
  Inline: () => Inline,
  Input: () => Input,
  LayerManager: () => LayerManager,
  Menu: () => Menu,
  MenuItem: () => MenuItem,
  MenuSeparator: () => MenuSeparator,
  Modal: () => Modal,
  ModalBody: () => ModalBody,
  ModalContent: () => ModalContent,
  ModalDescription: () => ModalDescription,
  ModalFooter: () => ModalFooter,
  ModalHeader: () => ModalHeader,
  ModalOverlay: () => ModalOverlay,
  ModalTitle: () => ModalTitle,
  NumberInput: () => NumberInput,
  Panel: () => Panel,
  PanelBody: () => PanelBody,
  PanelFooter: () => PanelFooter,
  PanelHeader: () => PanelHeader,
  PanelOverlay: () => PanelOverlay,
  PanelTitle: () => PanelTitle,
  Portal: () => Portal,
  Radio: () => Radio,
  RadioGroup: () => RadioGroup,
  RadioGroupContext: () => RadioGroupContext,
  ScrollArea: () => ScrollArea,
  ScrollLock: () => ScrollLock,
  SearchInput: () => SearchInput,
  Section: () => Section,
  Select: () => Select,
  Spacer: () => Spacer,
  Split: () => Split,
  Stack: () => Stack,
  Switch: () => Switch,
  Tab: () => Tab,
  Tabs: () => Tabs,
  TabsList: () => TabsList,
  TabsPanel: () => TabsPanel,
  Textarea: () => Textarea,
  useCheckboxGroup: () => useCheckboxGroup,
  useLayerEscape: () => useLayerEscape,
  useLayerTransition: () => useLayerTransition,
  useModal: () => useModal,
  useRadioGroup: () => useRadioGroup,
  useScrollLock: () => useScrollLock,
  useTabs: () => useTabs
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Alert,
  AlertDescription,
  AlertTitle,
  AspectRatio,
  Button,
  Card,
  CardBody,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Center,
  Checkbox,
  CheckboxGroup,
  CheckboxGroupContext,
  Container,
  Flex,
  FocusTrap,
  Footer,
  Grid,
  GridItem,
  Header,
  Inline,
  Input,
  LayerManager,
  Menu,
  MenuItem,
  MenuSeparator,
  Modal,
  ModalBody,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalTitle,
  NumberInput,
  Panel,
  PanelBody,
  PanelFooter,
  PanelHeader,
  PanelOverlay,
  PanelTitle,
  Portal,
  Radio,
  RadioGroup,
  RadioGroupContext,
  ScrollArea,
  ScrollLock,
  SearchInput,
  Section,
  Select,
  Spacer,
  Split,
  Stack,
  Switch,
  Tab,
  Tabs,
  TabsList,
  TabsPanel,
  Textarea,
  useCheckboxGroup,
  useLayerEscape,
  useLayerTransition,
  useModal,
  useRadioGroup,
  useScrollLock,
  useTabs
});
//# sourceMappingURL=index.js.map