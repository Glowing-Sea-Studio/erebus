// src/container/container.tsx
import { forwardRef } from "react";

// src/utils.ts
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
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
import { jsx } from "react/jsx-runtime";
var Container = forwardRef(
  ({ as: Component = "div", className, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
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
import { forwardRef as forwardRef2 } from "react";
import { jsx as jsx2 } from "react/jsx-runtime";
var Grid = forwardRef2(
  ({ as: Component = "div", className, cols = 1, gap, align, justify, style, ...props }, ref) => {
    const customStyle = {
      ...style,
      ...resolveResponsiveProps("--erb-grid-cols", cols, (v) => `repeat(${v}, minmax(0, 1fr))`),
      ...resolveResponsiveProps("--erb-grid-gap", gap, (v) => `var(--erb-space-${v})`),
      ...resolveResponsiveProps("--erb-grid-align", align),
      ...resolveResponsiveProps("--erb-grid-justify", justify)
    };
    return /* @__PURE__ */ jsx2(
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
import { forwardRef as forwardRef3 } from "react";
import { jsx as jsx3 } from "react/jsx-runtime";
var GridItem = forwardRef3(
  ({ as: Component = "div", className, colSpan, rowSpan, style, ...props }, ref) => {
    const customStyle = {
      ...style,
      ...resolveResponsiveProps("--erb-grid-item-col-span", colSpan),
      ...resolveResponsiveProps("--erb-grid-item-row-span", rowSpan)
    };
    return /* @__PURE__ */ jsx3(
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
import { forwardRef as forwardRef4 } from "react";
import { jsx as jsx4 } from "react/jsx-runtime";
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
var Flex = forwardRef4(
  ({ as: Component = "div", className, direction, gap, align, justify, wrap, style, ...props }, ref) => {
    const customStyle = {
      ...style,
      ...resolveResponsiveProps("--erb-flex-direction", direction),
      ...resolveResponsiveProps("--erb-flex-gap", gap, (v) => `var(--erb-space-${v})`),
      ...resolveResponsiveProps("--erb-flex-align", align, (v) => alignMap[v] || v),
      ...resolveResponsiveProps("--erb-flex-justify", justify, (v) => justifyMap[v] || v),
      ...resolveResponsiveProps("--erb-flex-wrap", wrap)
    };
    return /* @__PURE__ */ jsx4(
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
import { forwardRef as forwardRef5 } from "react";
import { jsx as jsx5 } from "react/jsx-runtime";
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
var Stack = forwardRef5(
  ({ as: Component = "div", className, gap, align, justify, style, ...props }, ref) => {
    const customStyle = {
      ...style,
      ...resolveResponsiveProps("--erb-stack-gap", gap, (v) => `var(--erb-space-${v})`),
      ...resolveResponsiveProps("--erb-stack-align", align, (v) => alignMap2[v] || v),
      ...resolveResponsiveProps("--erb-stack-justify", justify, (v) => justifyMap2[v] || v)
    };
    return /* @__PURE__ */ jsx5(
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
import { forwardRef as forwardRef6 } from "react";
import { jsx as jsx6 } from "react/jsx-runtime";
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
var Inline = forwardRef6(
  ({ as: Component = "div", className, gap, align, justify, style, ...props }, ref) => {
    const customStyle = {
      ...style,
      ...resolveResponsiveProps("--erb-inline-gap", gap, (v) => `var(--erb-space-${v})`),
      ...resolveResponsiveProps("--erb-inline-align", align, (v) => alignMap3[v] || v),
      ...resolveResponsiveProps("--erb-inline-justify", justify, (v) => justifyMap3[v] || v)
    };
    return /* @__PURE__ */ jsx6(
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
import { forwardRef as forwardRef7 } from "react";
import { jsx as jsx7 } from "react/jsx-runtime";
var Spacer = forwardRef7(
  ({ as: Component = "div", className, ...props }, ref) => {
    return /* @__PURE__ */ jsx7(
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
import { forwardRef as forwardRef8 } from "react";
import { jsx as jsx8 } from "react/jsx-runtime";
var Center = forwardRef8(
  ({ as: Component = "div", className, inline, ...props }, ref) => {
    return /* @__PURE__ */ jsx8(
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
import { forwardRef as forwardRef9 } from "react";
import { jsx as jsx9 } from "react/jsx-runtime";
var AspectRatio = forwardRef9(
  ({ as: Component = "div", className, ratio = 4 / 3, style, ...props }, ref) => {
    return /* @__PURE__ */ jsx9(
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
import { forwardRef as forwardRef10 } from "react";
import { jsx as jsx10 } from "react/jsx-runtime";
var Split = forwardRef10(
  ({ as: Component = "div", className, gap, fraction = "1/2", align, style, ...props }, ref) => {
    const customStyle = {
      ...style,
      ...resolveResponsiveProps("--erb-split-gap", gap, (v) => `var(--erb-space-${v})`),
      ...resolveResponsiveProps("--erb-split-align", align)
    };
    return /* @__PURE__ */ jsx10(
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
import { forwardRef as forwardRef11 } from "react";
import { jsx as jsx11 } from "react/jsx-runtime";
var Section = forwardRef11(
  ({ as: Component = "section", className, ...props }, ref) => {
    return /* @__PURE__ */ jsx11(
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
import { forwardRef as forwardRef12 } from "react";
import { jsx as jsx12 } from "react/jsx-runtime";
var ScrollArea = forwardRef12(
  ({ as: Component = "div", className, maxHeight, style, ...props }, ref) => {
    return /* @__PURE__ */ jsx12(
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
import { forwardRef as forwardRef13 } from "react";
import { jsx as jsx13 } from "react/jsx-runtime";
var Button = forwardRef13(
  ({ className, size = "md", variant = "solid", ...props }, ref) => {
    return /* @__PURE__ */ jsx13(
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
import { forwardRef as forwardRef14 } from "react";
import { jsx as jsx14 } from "react/jsx-runtime";
var Card = forwardRef14(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx14("div", { ref, className: cn("erb-card", className), ...props })
);
Card.displayName = "Card";
var CardHeader = forwardRef14(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx14("div", { ref, className: cn("erb-card-header", className), ...props })
);
CardHeader.displayName = "CardHeader";
var CardTitle = forwardRef14(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx14("h3", { ref, className: cn("erb-card-title", className), ...props })
);
CardTitle.displayName = "CardTitle";
var CardDescription = forwardRef14(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx14("p", { ref, className: cn("erb-card-description", className), ...props })
);
CardDescription.displayName = "CardDescription";
var CardBody = forwardRef14(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx14("div", { ref, className: cn("erb-card-body", className), ...props })
);
CardBody.displayName = "CardBody";
var CardFooter = forwardRef14(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx14("div", { ref, className: cn("erb-card-footer", className), ...props })
);
CardFooter.displayName = "CardFooter";

// src/input/Input.tsx
import { forwardRef as forwardRef15, useId } from "react";
import { jsx as jsx15, jsxs } from "react/jsx-runtime";
var Input = forwardRef15(
  ({ className, size = "md", label, error, id, disabled, ...props }, ref) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;
    const errorId = `${inputId}-error`;
    return /* @__PURE__ */ jsxs("div", { className: "erb-input-wrapper", children: [
      label && /* @__PURE__ */ jsx15("label", { htmlFor: inputId, className: "erb-label", children: label }),
      /* @__PURE__ */ jsx15(
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
      error && /* @__PURE__ */ jsx15("span", { id: errorId, className: "erb-error-message", children: error })
    ] });
  }
);
Input.displayName = "Input";

// src/alert/Alert.tsx
import { forwardRef as forwardRef16 } from "react";
import { jsx as jsx16 } from "react/jsx-runtime";
var Alert = forwardRef16(
  ({ className, intent = "info", children, ...props }, ref) => /* @__PURE__ */ jsx16(
    "div",
    {
      ref,
      role: "alert",
      className: cn("erb-alert", className),
      "data-intent": intent,
      ...props,
      children: /* @__PURE__ */ jsx16("div", { className: "erb-alert-content", children })
    }
  )
);
Alert.displayName = "Alert";
var AlertTitle = forwardRef16(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx16("h5", { ref, className: cn("erb-alert-title", className), ...props })
);
AlertTitle.displayName = "AlertTitle";
var AlertDescription = forwardRef16(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx16("p", { ref, className: cn("erb-alert-description", className), ...props })
);
AlertDescription.displayName = "AlertDescription";

// src/modal/Modal.tsx
import { forwardRef as forwardRef17, createContext, useContext, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { jsx as jsx17 } from "react/jsx-runtime";
var ModalContext = createContext(void 0);
function useModal() {
  const context = useContext(ModalContext);
  if (!context) throw new Error("useModal must be used within a Modal");
  return context;
}
function Modal({ open = false, onOpenChange, children }) {
  const [isOpen, setIsOpen] = useState(open);
  useEffect(() => {
    if (open !== void 0) setIsOpen(open);
  }, [open]);
  const handleOpenChange = (newOpen) => {
    setIsOpen(newOpen);
    onOpenChange?.(newOpen);
  };
  return /* @__PURE__ */ jsx17(ModalContext.Provider, { value: { open: isOpen, onOpenChange: handleOpenChange }, children });
}
function useMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
}
var ModalOverlay = forwardRef17(
  ({ className, ...props }, ref) => {
    const { open, onOpenChange } = useModal();
    const mounted = useMounted();
    if (!open || !mounted) return null;
    return createPortal(
      /* @__PURE__ */ jsx17(
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
var ModalContent = forwardRef17(
  ({ className, children, ...props }, ref) => {
    const { open } = useModal();
    const mounted = useMounted();
    if (!open || !mounted) return null;
    return createPortal(
      /* @__PURE__ */ jsx17(
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
var ModalHeader = forwardRef17(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx17("div", { ref, className: cn("erb-modal-header", className), ...props })
);
ModalHeader.displayName = "ModalHeader";
var ModalTitle = forwardRef17(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx17("h2", { ref, className: cn("erb-modal-title", className), ...props })
);
ModalTitle.displayName = "ModalTitle";
var ModalDescription = forwardRef17(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx17("p", { ref, className: cn("erb-modal-description", className), ...props })
);
ModalDescription.displayName = "ModalDescription";
var ModalBody = forwardRef17(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx17("div", { ref, className: cn("erb-modal-body", className), ...props })
);
ModalBody.displayName = "ModalBody";
var ModalFooter = forwardRef17(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx17("div", { ref, className: cn("erb-modal-footer", className), ...props })
);
ModalFooter.displayName = "ModalFooter";

// src/panel/Panel.tsx
import { forwardRef as forwardRef18, useState as useState2, useEffect as useEffect2 } from "react";
import { createPortal as createPortal2 } from "react-dom";
import { jsx as jsx18 } from "react/jsx-runtime";
function useMounted2() {
  const [mounted, setMounted] = useState2(false);
  useEffect2(() => setMounted(true), []);
  return mounted;
}
var Panel = forwardRef18(
  ({ className, open = true, position = "right", children, ...props }, ref) => {
    const mounted = useMounted2();
    if (!open || !mounted) return null;
    return createPortal2(
      /* @__PURE__ */ jsx18(
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
var PanelOverlay = forwardRef18(
  ({ className, open = true, onClose, ...props }, ref) => {
    const mounted = useMounted2();
    if (!open || !mounted) return null;
    return createPortal2(
      /* @__PURE__ */ jsx18(
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
var PanelHeader = forwardRef18(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx18("div", { ref, className: cn("erb-panel-header", className), ...props })
);
PanelHeader.displayName = "PanelHeader";
var PanelTitle = forwardRef18(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx18("h2", { ref, className: cn("erb-panel-title", className), ...props })
);
PanelTitle.displayName = "PanelTitle";
var PanelBody = forwardRef18(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx18("div", { ref, className: cn("erb-panel-body", className), ...props })
);
PanelBody.displayName = "PanelBody";
var PanelFooter = forwardRef18(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx18("div", { ref, className: cn("erb-panel-footer", className), ...props })
);
PanelFooter.displayName = "PanelFooter";

// src/menu/Menu.tsx
import { forwardRef as forwardRef19, useState as useState3, cloneElement, isValidElement } from "react";
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
  FloatingFocusManager
} from "@floating-ui/react";
import { Fragment, jsx as jsx19, jsxs as jsxs2 } from "react/jsx-runtime";
function Menu({ trigger, children, placement = "bottom-start", open: controlledOpen, onOpenChange, className }) {
  const [uncontrolledOpen, setUncontrolledOpen] = useState3(false);
  const open = controlledOpen !== void 0 ? controlledOpen : uncontrolledOpen;
  const setOpen = (open2) => {
    setUncontrolledOpen(open2);
    onOpenChange?.(open2);
  };
  const { refs, floatingStyles, context } = useFloating({
    open,
    onOpenChange: setOpen,
    placement,
    whileElementsMounted: autoUpdate,
    middleware: [offset(4), flip(), shift()]
  });
  const click = useClick(context);
  const dismiss = useDismiss(context);
  const role = useRole(context);
  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    dismiss,
    role
  ]);
  return /* @__PURE__ */ jsxs2(Fragment, { children: [
    isValidElement(trigger) && cloneElement(trigger, {
      ref: refs.setReference,
      ...getReferenceProps(trigger.props || {})
    }),
    open && /* @__PURE__ */ jsx19(FloatingPortal, { children: /* @__PURE__ */ jsx19(FloatingFocusManager, { context, modal: false, children: /* @__PURE__ */ jsx19(
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
var MenuItem = forwardRef19(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx19(
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
var MenuSeparator = forwardRef19(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx19(
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
import { forwardRef as forwardRef20, createContext as createContext2, useContext as useContext2, useState as useState4 } from "react";
import { jsx as jsx20 } from "react/jsx-runtime";
var TabsContext = createContext2(void 0);
function useTabs() {
  const context = useContext2(TabsContext);
  if (!context) throw new Error("useTabs must be used within Tabs");
  return context;
}
var Tabs = forwardRef20(
  ({ className, value: controlledValue, defaultValue, onValueChange, children, ...props }, ref) => {
    const [uncontrolledValue, setUncontrolledValue] = useState4(defaultValue || "");
    const value = controlledValue !== void 0 ? controlledValue : uncontrolledValue;
    const handleValueChange = (newValue) => {
      setUncontrolledValue(newValue);
      onValueChange?.(newValue);
    };
    return /* @__PURE__ */ jsx20(TabsContext.Provider, { value: { value, onValueChange: handleValueChange }, children: /* @__PURE__ */ jsx20("div", { ref, className: cn("erb-tabs", className), ...props, children }) });
  }
);
Tabs.displayName = "Tabs";
var TabsList = forwardRef20(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx20("div", { ref, role: "tablist", className: cn("erb-tabs-list", className), ...props })
);
TabsList.displayName = "TabsList";
var Tab = forwardRef20(
  ({ className, value, ...props }, ref) => {
    const { value: selectedValue, onValueChange } = useTabs();
    const isActive = selectedValue === value;
    const state = isActive ? "active" : "inactive";
    return /* @__PURE__ */ jsx20(
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
var TabsPanel = forwardRef20(
  ({ className, value, ...props }, ref) => {
    const { value: selectedValue } = useTabs();
    const isActive = selectedValue === value;
    const state = isActive ? "active" : "inactive";
    if (!isActive) return null;
    return /* @__PURE__ */ jsx20(
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
import { forwardRef as forwardRef21 } from "react";
import { jsx as jsx21 } from "react/jsx-runtime";
var Header = forwardRef21(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx21("header", { ref, className: cn("erb-header", className), ...props })
);
Header.displayName = "Header";

// src/footer/Footer.tsx
import { forwardRef as forwardRef22 } from "react";
import { jsx as jsx22 } from "react/jsx-runtime";
var Footer = forwardRef22(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx22("footer", { ref, className: cn("erb-footer", className), ...props })
);
Footer.displayName = "Footer";

// src/textarea/Textarea.tsx
import { forwardRef as forwardRef23, useId as useId2 } from "react";
import { jsx as jsx23, jsxs as jsxs3 } from "react/jsx-runtime";
var Textarea = forwardRef23(
  ({ className, label, error, id, disabled, ...props }, ref) => {
    const generatedId = useId2();
    const textareaId = id ?? generatedId;
    const errorId = `${textareaId}-error`;
    return /* @__PURE__ */ jsxs3("div", { className: "erb-input-wrapper", children: [
      label && /* @__PURE__ */ jsx23("label", { htmlFor: textareaId, className: "erb-label", children: label }),
      /* @__PURE__ */ jsx23(
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
      error && /* @__PURE__ */ jsx23("span", { id: errorId, className: "erb-error-message", children: error })
    ] });
  }
);
Textarea.displayName = "Textarea";

// src/checkbox/Checkbox.tsx
import { forwardRef as forwardRef24, useId as useId3 } from "react";

// src/checkbox-group/CheckboxGroupContext.ts
import { createContext as createContext3, useContext as useContext3 } from "react";
var CheckboxGroupContext = createContext3({});
var useCheckboxGroup = () => useContext3(CheckboxGroupContext);

// src/checkbox/Checkbox.tsx
import { jsx as jsx24, jsxs as jsxs4 } from "react/jsx-runtime";
var Checkbox = forwardRef24(
  ({ className, size, label, id, disabled, name, ...props }, ref) => {
    const generatedId = useId3();
    const inputId = id ?? generatedId;
    const group = useCheckboxGroup();
    const finalSize = size ?? group.size ?? "md";
    const finalDisabled = disabled ?? group.disabled;
    const finalName = name ?? group.name;
    return /* @__PURE__ */ jsxs4("div", { className: cn("erb-checkbox-wrapper", className), children: [
      /* @__PURE__ */ jsx24(
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
      label && /* @__PURE__ */ jsx24("label", { htmlFor: inputId, className: "erb-checkbox-label", children: label })
    ] });
  }
);
Checkbox.displayName = "Checkbox";

// src/checkbox-group/CheckboxGroup.tsx
import { forwardRef as forwardRef25 } from "react";
import { jsx as jsx25, jsxs as jsxs5 } from "react/jsx-runtime";
var CheckboxGroup = forwardRef25(
  ({ className, legend, children, orientation = "vertical", size, name, disabled, ...props }, ref) => {
    const Wrapper = orientation === "horizontal" ? Inline : Stack;
    return /* @__PURE__ */ jsxs5(
      "fieldset",
      {
        ref,
        className: cn("erb-checkbox-group", className),
        disabled,
        ...props,
        children: [
          legend && /* @__PURE__ */ jsx25("legend", { className: "erb-checkbox-group-legend", children: legend }),
          /* @__PURE__ */ jsx25(CheckboxGroupContext.Provider, { value: { name, size, disabled }, children: /* @__PURE__ */ jsx25(Wrapper, { children }) })
        ]
      }
    );
  }
);
CheckboxGroup.displayName = "CheckboxGroup";

// src/radio/Radio.tsx
import { forwardRef as forwardRef26, useId as useId4 } from "react";

// src/radio-group/RadioGroupContext.ts
import { createContext as createContext4, useContext as useContext4 } from "react";
var RadioGroupContext = createContext4({});
var useRadioGroup = () => useContext4(RadioGroupContext);

// src/radio/Radio.tsx
import { jsx as jsx26, jsxs as jsxs6 } from "react/jsx-runtime";
var Radio = forwardRef26(
  ({ className, size, label, id, disabled, name, ...props }, ref) => {
    const generatedId = useId4();
    const inputId = id ?? generatedId;
    const group = useRadioGroup();
    const finalSize = size ?? group.size ?? "md";
    const finalDisabled = disabled ?? group.disabled;
    const finalName = name ?? group.name;
    return /* @__PURE__ */ jsxs6("div", { className: cn("erb-radio-wrapper", className), children: [
      /* @__PURE__ */ jsx26(
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
      label && /* @__PURE__ */ jsx26("label", { htmlFor: inputId, className: "erb-radio-label", children: label })
    ] });
  }
);
Radio.displayName = "Radio";

// src/radio-group/RadioGroup.tsx
import { forwardRef as forwardRef27 } from "react";
import { jsx as jsx27, jsxs as jsxs7 } from "react/jsx-runtime";
var RadioGroup = forwardRef27(
  ({ className, legend, children, orientation = "vertical", size, name, disabled, ...props }, ref) => {
    const Wrapper = orientation === "horizontal" ? Inline : Stack;
    return /* @__PURE__ */ jsxs7(
      "fieldset",
      {
        ref,
        className: cn("erb-radio-group", className),
        disabled,
        ...props,
        children: [
          legend && /* @__PURE__ */ jsx27("legend", { className: "erb-radio-group-legend", children: legend }),
          /* @__PURE__ */ jsx27(RadioGroupContext.Provider, { value: { name, size, disabled }, children: /* @__PURE__ */ jsx27(Wrapper, { children }) })
        ]
      }
    );
  }
);
RadioGroup.displayName = "RadioGroup";

// src/switch/Switch.tsx
import { forwardRef as forwardRef28, useId as useId5 } from "react";
import { jsx as jsx28, jsxs as jsxs8 } from "react/jsx-runtime";
var Switch = forwardRef28(
  ({ className, size = "md", label, id, disabled, ...props }, ref) => {
    const generatedId = useId5();
    const inputId = id ?? generatedId;
    return /* @__PURE__ */ jsxs8("div", { className: cn("erb-switch-wrapper", className), children: [
      /* @__PURE__ */ jsx28(
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
      label && /* @__PURE__ */ jsx28("label", { htmlFor: inputId, className: "erb-switch-label", children: label })
    ] });
  }
);
Switch.displayName = "Switch";

// src/select/Select.tsx
import { forwardRef as forwardRef29, useId as useId6 } from "react";
import { jsx as jsx29, jsxs as jsxs9 } from "react/jsx-runtime";
var Select = forwardRef29(
  ({ className, size = "md", label, error, id, disabled, children, ...props }, ref) => {
    const generatedId = useId6();
    const selectId = id ?? generatedId;
    const errorId = `${selectId}-error`;
    return /* @__PURE__ */ jsxs9("div", { className: "erb-input-wrapper", children: [
      label && /* @__PURE__ */ jsx29("label", { htmlFor: selectId, className: "erb-label", children: label }),
      /* @__PURE__ */ jsx29(
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
      error && /* @__PURE__ */ jsx29("span", { id: errorId, className: "erb-error-message", children: error })
    ] });
  }
);
Select.displayName = "Select";

// src/number-input/NumberInput.tsx
import { forwardRef as forwardRef30, useId as useId7, useRef } from "react";
import { jsx as jsx30, jsxs as jsxs10 } from "react/jsx-runtime";
var ChevronUp = () => /* @__PURE__ */ jsx30("svg", { width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsx30("polyline", { points: "18 15 12 9 6 15" }) });
var ChevronDown = () => /* @__PURE__ */ jsx30("svg", { width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsx30("polyline", { points: "6 9 12 15 18 9" }) });
var NumberInput = forwardRef30(
  ({ className, size = "md", label, error, id, disabled, ...props }, ref) => {
    const generatedId = useId7();
    const inputId = id ?? generatedId;
    const errorId = `${inputId}-error`;
    const internalRef = useRef(null);
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
    return /* @__PURE__ */ jsxs10("div", { className: "erb-input-wrapper", children: [
      label && /* @__PURE__ */ jsx30("label", { htmlFor: inputId, className: "erb-label", children: label }),
      /* @__PURE__ */ jsxs10("div", { className: "erb-number-input-wrapper", children: [
        /* @__PURE__ */ jsx30(
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
        /* @__PURE__ */ jsxs10("div", { className: "erb-number-input-stepper", children: [
          /* @__PURE__ */ jsx30(
            "button",
            {
              type: "button",
              className: "erb-number-input-stepper-btn",
              onClick: handleStepUp,
              disabled,
              tabIndex: -1,
              "aria-hidden": "true",
              children: /* @__PURE__ */ jsx30(ChevronUp, {})
            }
          ),
          /* @__PURE__ */ jsx30(
            "button",
            {
              type: "button",
              className: "erb-number-input-stepper-btn",
              onClick: handleStepDown,
              disabled,
              tabIndex: -1,
              "aria-hidden": "true",
              children: /* @__PURE__ */ jsx30(ChevronDown, {})
            }
          )
        ] })
      ] }),
      error && /* @__PURE__ */ jsx30("span", { id: errorId, className: "erb-error-message", children: error })
    ] });
  }
);
NumberInput.displayName = "NumberInput";

// src/search-input/SearchInput.tsx
import { forwardRef as forwardRef31, useId as useId8, useRef as useRef2, useState as useState5 } from "react";
import { jsx as jsx31, jsxs as jsxs11 } from "react/jsx-runtime";
var SearchIcon = () => /* @__PURE__ */ jsxs11("svg", { width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ jsx31("circle", { cx: "11", cy: "11", r: "8" }),
  /* @__PURE__ */ jsx31("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" })
] });
var XIcon = () => /* @__PURE__ */ jsxs11("svg", { width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ jsx31("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
  /* @__PURE__ */ jsx31("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
] });
var SearchInput = forwardRef31(
  ({ className, size = "md", label, error, id, disabled, onClear, onChange, ...props }, ref) => {
    const generatedId = useId8();
    const inputId = id ?? generatedId;
    const errorId = `${inputId}-error`;
    const internalRef = useRef2(null);
    const [hasValue, setHasValue] = useState5(
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
    return /* @__PURE__ */ jsxs11("div", { className: "erb-input-wrapper", children: [
      label && /* @__PURE__ */ jsx31("label", { htmlFor: inputId, className: "erb-label", children: label }),
      /* @__PURE__ */ jsxs11("div", { className: "erb-search-input-wrapper", children: [
        /* @__PURE__ */ jsx31("div", { className: "erb-search-input-icon", children: /* @__PURE__ */ jsx31(SearchIcon, {}) }),
        /* @__PURE__ */ jsx31(
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
        hasValue && /* @__PURE__ */ jsx31(
          "button",
          {
            type: "button",
            className: "erb-search-input-clear-btn",
            onClick: handleClear,
            disabled,
            tabIndex: -1,
            "aria-label": "Clear search",
            children: /* @__PURE__ */ jsx31(XIcon, {})
          }
        )
      ] }),
      error && /* @__PURE__ */ jsx31("span", { id: errorId, className: "erb-error-message", children: error })
    ] });
  }
);
SearchInput.displayName = "SearchInput";

// src/layer/LayerManager.ts
import { useEffect as useEffect3 } from "react";
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
  useEffect3(() => {
    if (isOpen && layerElement) {
      LayerManager.register(id, layerElement, onClose);
      return () => LayerManager.unregister(id);
    }
  }, [isOpen, onClose, layerElement, id]);
}

// src/layer/Portal.tsx
import { useEffect as useEffect4, useState as useState6 } from "react";
import { createPortal as createPortal3 } from "react-dom";
function Portal({ children, container }) {
  const [mounted, setMounted] = useState6(false);
  useEffect4(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  const target = container || document.body;
  return createPortal3(children, target);
}

// src/layer/FocusTrap.tsx
import React, { useEffect as useEffect5, useRef as useRef3 } from "react";
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
  const containerRef = useRef3(null);
  const previousFocusRef = useRef3(null);
  useEffect5(() => {
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
  useEffect5(() => {
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
  return React.cloneElement(children, {
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
import { useLayoutEffect } from "react";
var scrollLockCount = 0;
var originalStyle = null;
var originalPadding = null;
var getScrollbarWidth = () => {
  return window.innerWidth - document.documentElement.clientWidth;
};
var useScrollLock = (lock) => {
  useLayoutEffect(() => {
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
import { useEffect as useEffect6, useState as useState7 } from "react";
function useLayerTransition(isOpen, duration = 200) {
  const [shouldRender, setShouldRender] = useState7(isOpen);
  const [state, setState] = useState7(isOpen ? "open" : "closed");
  useEffect6(() => {
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
import React2 from "react";
import { jsx as jsx32 } from "react/jsx-runtime";
var Badge = React2.forwardRef(
  ({ className = "", variant = "solid", color = "primary", size = "md", shape = "rounded", children, ...props }, ref) => {
    const classNames = [
      "erb-badge",
      `erb-badge--variant-${variant}`,
      `erb-badge--color-${color}`,
      `erb-badge--size-${size}`,
      `erb-badge--shape-${shape}`,
      className
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ jsx32("span", { ref, className: classNames, ...props, children });
  }
);
Badge.displayName = "Badge";

// src/tag/Tag.tsx
import React3 from "react";
import { jsx as jsx33, jsxs as jsxs12 } from "react/jsx-runtime";
var Tag = React3.forwardRef(
  ({ className = "", variant = "solid", color = "primary", size = "md", closable, onClose, children, ...props }, ref) => {
    const classNames = [
      "erb-tag",
      `erb-tag--variant-${variant}`,
      `erb-tag--color-${color}`,
      `erb-tag--size-${size}`,
      className
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ jsxs12("span", { ref, className: classNames, ...props, children: [
      children,
      closable && /* @__PURE__ */ jsx33("button", { type: "button", className: "erb-tag__close", "aria-label": "Close", onClick: onClose, children: "\xD7" })
    ] });
  }
);
Tag.displayName = "Tag";

// src/spinner/Spinner.tsx
import React4 from "react";
import { jsx as jsx34 } from "react/jsx-runtime";
var Spinner = React4.forwardRef(
  ({ size, className = "", style, ...props }, ref) => {
    return /* @__PURE__ */ jsx34(
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
import React5 from "react";
import { jsx as jsx35 } from "react/jsx-runtime";
var Skeleton = React5.forwardRef(
  ({ variant = "rect", width, height, className = "", style, ...props }, ref) => {
    return /* @__PURE__ */ jsx35(
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
import { forwardRef as forwardRef33 } from "react";
import { clsx as clsx3 } from "clsx";

// src/label/Label.tsx
import { forwardRef as forwardRef32 } from "react";
import { clsx as clsx2 } from "clsx";
import { jsx as jsx36 } from "react/jsx-runtime";
var Label = forwardRef32(
  ({ children, className, disabled, required, ...props }, ref) => {
    return /* @__PURE__ */ jsx36(
      "label",
      {
        ref,
        className: clsx2(
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
import { jsx as jsx37, jsxs as jsxs13 } from "react/jsx-runtime";
var Field = forwardRef33(
  ({ children, className, label, hint, error, horizontal, required, disabled, ...props }, ref) => {
    return /* @__PURE__ */ jsxs13(
      "div",
      {
        ref,
        className: clsx3(
          "erb-field",
          {
            "erb-field--horizontal": horizontal
          },
          className
        ),
        ...props,
        children: [
          label && /* @__PURE__ */ jsx37(Label, { required: !!required, disabled: !!disabled, children: label }),
          /* @__PURE__ */ jsxs13("div", { className: "erb-field__content", children: [
            children,
            error ? /* @__PURE__ */ jsx37("div", { className: "erb-field__error", children: error }) : hint ? /* @__PURE__ */ jsx37("div", { className: "erb-field__hint", children: hint }) : null
          ] })
        ]
      }
    );
  }
);
Field.displayName = "Field";

// src/icon-button/IconButton.tsx
import { forwardRef as forwardRef34 } from "react";
import { jsx as jsx38 } from "react/jsx-runtime";
var IconButton = forwardRef34(
  ({ className, size = "md", variant = "solid", "aria-label": ariaLabel, ...props }, ref) => {
    return /* @__PURE__ */ jsx38(
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
import { forwardRef as forwardRef35 } from "react";
import { jsx as jsx39 } from "react/jsx-runtime";
var ButtonGroup = forwardRef35(
  ({ className, orientation = "horizontal", ...props }, ref) => {
    return /* @__PURE__ */ jsx39(
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
import { forwardRef as forwardRef36 } from "react";
import { jsx as jsx40 } from "react/jsx-runtime";
var Avatar = forwardRef36(
  ({ className, src, name, size = "md", ...props }, ref) => {
    return /* @__PURE__ */ jsx40(
      "div",
      {
        ref,
        className: cn("erb-avatar", className),
        "data-size": size,
        role: "img",
        "aria-label": name,
        ...props,
        children: src ? /* @__PURE__ */ jsx40("img", { src, alt: name, className: "erb-avatar__image" }) : /* @__PURE__ */ jsx40("span", { className: "erb-avatar__initials", children: name ? name.charAt(0).toUpperCase() : "?" })
      }
    );
  }
);
Avatar.displayName = "Avatar";

// src/avatar-group/AvatarGroup.tsx
import { forwardRef as forwardRef37 } from "react";
import { jsx as jsx41 } from "react/jsx-runtime";
var AvatarGroup = forwardRef37(
  ({ className, max, children, ...props }, ref) => {
    return /* @__PURE__ */ jsx41(
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
import { forwardRef as forwardRef38 } from "react";
import { jsx as jsx42 } from "react/jsx-runtime";
var Divider = forwardRef38(
  ({ className, orientation = "horizontal", ...props }, ref) => {
    return /* @__PURE__ */ jsx42(
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
import { forwardRef as forwardRef39 } from "react";
import { jsx as jsx43 } from "react/jsx-runtime";
var Kbd = forwardRef39(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsx43(
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
import { forwardRef as forwardRef40 } from "react";
import { jsx as jsx44 } from "react/jsx-runtime";
var Code = forwardRef40(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsx44(
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
import { forwardRef as forwardRef41 } from "react";
import { jsx as jsx45 } from "react/jsx-runtime";
var Callout = forwardRef41(
  ({ className, intent = "neutral", children, ...props }, ref) => /* @__PURE__ */ jsx45(
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
import { forwardRef as forwardRef42 } from "react";
import { jsx as jsx46 } from "react/jsx-runtime";
var Heading = forwardRef42(
  ({ className, level = 2, ...props }, ref) => {
    const Component = `h${level}`;
    return /* @__PURE__ */ jsx46(
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
import { forwardRef as forwardRef43 } from "react";
import { jsx as jsx47 } from "react/jsx-runtime";
var Text = forwardRef43(
  ({ className, size = "md", muted = false, ...props }, ref) => {
    return /* @__PURE__ */ jsx47(
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
import { forwardRef as forwardRef44 } from "react";
import { jsx as jsx48 } from "react/jsx-runtime";
var Prose = forwardRef44(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsx48(
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
import { forwardRef as forwardRef45 } from "react";
import { jsx as jsx49 } from "react/jsx-runtime";
var AlertDialog = Modal;
var AlertDialogOverlay = forwardRef45(
  ({ className, onClick, ...props }, ref) => /* @__PURE__ */ jsx49(
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
var AlertDialogContent = forwardRef45(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx49(
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
var AlertDialogHeader = forwardRef45(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx49(ModalHeader, { ref, className: cn("erb-alert-dialog-header", className), ...props })
);
AlertDialogHeader.displayName = "AlertDialogHeader";
var AlertDialogTitle = forwardRef45(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx49(ModalTitle, { ref, className: cn("erb-alert-dialog-title", className), ...props })
);
AlertDialogTitle.displayName = "AlertDialogTitle";
var AlertDialogDescription = forwardRef45(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx49(ModalDescription, { ref, className: cn("erb-alert-dialog-description", className), ...props })
);
AlertDialogDescription.displayName = "AlertDialogDescription";
var AlertDialogBody = forwardRef45(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx49(ModalBody, { ref, className: cn("erb-alert-dialog-body", className), ...props })
);
AlertDialogBody.displayName = "AlertDialogBody";
var AlertDialogFooter = forwardRef45(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx49(ModalFooter, { ref, className: cn("erb-alert-dialog-footer", className), ...props })
);
AlertDialogFooter.displayName = "AlertDialogFooter";

// src/drawer/Drawer.tsx
import { forwardRef as forwardRef46 } from "react";
import { jsx as jsx50 } from "react/jsx-runtime";
var Drawer = Modal;
var DrawerOverlay = forwardRef46(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx50(ModalOverlay, { ref, className: cn("erb-drawer-overlay", className), ...props })
);
DrawerOverlay.displayName = "DrawerOverlay";
var DrawerContent = forwardRef46(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx50(
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
var DrawerHeader = forwardRef46(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx50(ModalHeader, { ref, className: cn("erb-drawer-header", className), ...props })
);
DrawerHeader.displayName = "DrawerHeader";
var DrawerTitle = forwardRef46(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx50(ModalTitle, { ref, className: cn("erb-drawer-title", className), ...props })
);
DrawerTitle.displayName = "DrawerTitle";
var DrawerDescription = forwardRef46(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx50(ModalDescription, { ref, className: cn("erb-drawer-description", className), ...props })
);
DrawerDescription.displayName = "DrawerDescription";
var DrawerBody = forwardRef46(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx50(ModalBody, { ref, className: cn("erb-drawer-body", className), ...props })
);
DrawerBody.displayName = "DrawerBody";
var DrawerFooter = forwardRef46(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx50(ModalFooter, { ref, className: cn("erb-drawer-footer", className), ...props })
);
DrawerFooter.displayName = "DrawerFooter";

// src/popover/Popover.tsx
import { useState as useState8, cloneElement as cloneElement2, isValidElement as isValidElement2 } from "react";
import {
  useFloating as useFloating2,
  autoUpdate as autoUpdate2,
  offset as offset2,
  flip as flip2,
  shift as shift2,
  useClick as useClick2,
  useDismiss as useDismiss2,
  useRole as useRole2,
  useInteractions as useInteractions2,
  FloatingPortal as FloatingPortal2,
  FloatingFocusManager as FloatingFocusManager2
} from "@floating-ui/react";
import { Fragment as Fragment2, jsx as jsx51, jsxs as jsxs14 } from "react/jsx-runtime";
function Popover({ trigger, children, placement = "bottom", open: controlledOpen, onOpenChange, className }) {
  const [uncontrolledOpen, setUncontrolledOpen] = useState8(false);
  const open = controlledOpen !== void 0 ? controlledOpen : uncontrolledOpen;
  const setOpen = (open2) => {
    setUncontrolledOpen(open2);
    onOpenChange?.(open2);
  };
  const { refs, floatingStyles, context } = useFloating2({
    open,
    onOpenChange: setOpen,
    placement,
    whileElementsMounted: autoUpdate2,
    middleware: [offset2(4), flip2(), shift2()]
  });
  const click = useClick2(context);
  const dismiss = useDismiss2(context);
  const role = useRole2(context);
  const { getReferenceProps, getFloatingProps } = useInteractions2([
    click,
    dismiss,
    role
  ]);
  return /* @__PURE__ */ jsxs14(Fragment2, { children: [
    isValidElement2(trigger) && cloneElement2(trigger, {
      ref: refs.setReference,
      ...getReferenceProps(trigger.props || {})
    }),
    open && /* @__PURE__ */ jsx51(FloatingPortal2, { children: /* @__PURE__ */ jsx51(FloatingFocusManager2, { context, modal: false, children: /* @__PURE__ */ jsx51(
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
import { useState as useState9, cloneElement as cloneElement3, isValidElement as isValidElement3 } from "react";
import {
  useFloating as useFloating3,
  autoUpdate as autoUpdate3,
  offset as offset3,
  flip as flip3,
  shift as shift3,
  useHover,
  useFocus,
  useDismiss as useDismiss3,
  useRole as useRole3,
  useInteractions as useInteractions3,
  FloatingPortal as FloatingPortal3
} from "@floating-ui/react";
import { Fragment as Fragment3, jsx as jsx52, jsxs as jsxs15 } from "react/jsx-runtime";
function Tooltip({ trigger, content, placement = "top", open: controlledOpen, onOpenChange, className }) {
  const [uncontrolledOpen, setUncontrolledOpen] = useState9(false);
  const open = controlledOpen !== void 0 ? controlledOpen : uncontrolledOpen;
  const setOpen = (open2) => {
    setUncontrolledOpen(open2);
    onOpenChange?.(open2);
  };
  const { refs, floatingStyles, context } = useFloating3({
    open,
    onOpenChange: setOpen,
    placement,
    whileElementsMounted: autoUpdate3,
    middleware: [offset3(4), flip3(), shift3()]
  });
  const hover = useHover(context, { move: false });
  const focus = useFocus(context);
  const dismiss = useDismiss3(context);
  const role = useRole3(context, { role: "tooltip" });
  const { getReferenceProps, getFloatingProps } = useInteractions3([
    hover,
    focus,
    dismiss,
    role
  ]);
  return /* @__PURE__ */ jsxs15(Fragment3, { children: [
    isValidElement3(trigger) && cloneElement3(trigger, {
      ref: refs.setReference,
      ...getReferenceProps(trigger.props || {})
    }),
    open && /* @__PURE__ */ jsx52(FloatingPortal3, { children: /* @__PURE__ */ jsx52(
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
import { jsx as jsx53 } from "react/jsx-runtime";
var Sidebar = ({ children, className = "", ...props }) => /* @__PURE__ */ jsx53("div", { className: `erb-sidebar ${className}`, ...props, children });

// src/AppShell/AppShell.tsx
import { jsx as jsx54 } from "react/jsx-runtime";
var AppShell = ({ children, className = "", ...props }) => /* @__PURE__ */ jsx54("div", { className: `erb-app-shell ${className}`, ...props, children });

// src/MobileNav/MobileNav.tsx
import { jsx as jsx55 } from "react/jsx-runtime";
var MobileNav = ({ children, className = "", ...props }) => /* @__PURE__ */ jsx55("div", { className: `erb-mobile-nav ${className}`, ...props, children });

// src/BottomNav/BottomNav.tsx
import { jsx as jsx56 } from "react/jsx-runtime";
var BottomNav = ({ children, className = "", ...props }) => /* @__PURE__ */ jsx56("div", { className: `erb-bottom-nav ${className}`, ...props, children });

// src/breadcrumb/Breadcrumb.tsx
import React8 from "react";
import { jsx as jsx57, jsxs as jsxs16 } from "react/jsx-runtime";
var Breadcrumb = ({ children, ariaLabel = "Breadcrumb" }) => /* @__PURE__ */ jsx57("nav", { "aria-label": ariaLabel, className: "erb-breadcrumb", children: /* @__PURE__ */ jsx57("ol", { className: "erb-breadcrumb__list", children: React8.Children.map(children, (child, i) => /* @__PURE__ */ jsxs16("li", { className: "erb-breadcrumb__item", children: [
  child,
  i < React8.Children.count(children) - 1 && /* @__PURE__ */ jsx57("span", { className: "erb-breadcrumb__separator", "aria-hidden": "true", children: "/" })
] })) }) });

// src/pagination/Pagination.tsx
import { jsx as jsx58 } from "react/jsx-runtime";
var Pagination = ({ currentPage, totalPages, onPageChange }) => /* @__PURE__ */ jsx58("nav", { "aria-label": "Pagination", children: /* @__PURE__ */ jsx58("ul", { className: "erb-pagination", children: Array.from({ length: totalPages }).map((_, i) => /* @__PURE__ */ jsx58("li", { className: "erb-pagination__item", children: /* @__PURE__ */ jsx58("button", { "aria-current": currentPage === i + 1 ? "page" : void 0, onClick: () => onPageChange(i + 1), children: i + 1 }) }, i)) }) });

// src/stepper/Stepper.tsx
import { jsx as jsx59, jsxs as jsxs17 } from "react/jsx-runtime";
var Stepper = ({ currentStep, steps }) => /* @__PURE__ */ jsx59("ol", { className: "erb-stepper", children: steps.map((step, i) => /* @__PURE__ */ jsxs17("li", { className: "erb-stepper__step", "aria-current": currentStep === i ? "step" : void 0, children: [
  /* @__PURE__ */ jsx59("span", { children: i + 1 }),
  " ",
  /* @__PURE__ */ jsx59("span", { children: step })
] }, i)) });

// src/accordion/Accordion.tsx
import { useState as useState10 } from "react";
import { jsx as jsx60, jsxs as jsxs18 } from "react/jsx-runtime";
var Accordion = ({ title, children, defaultExpanded = false }) => {
  const [expanded, setExpanded] = useState10(defaultExpanded);
  return /* @__PURE__ */ jsxs18("div", { className: "erb-accordion", children: [
    /* @__PURE__ */ jsx60("h3", { className: "erb-accordion__header", children: /* @__PURE__ */ jsx60("button", { "aria-expanded": expanded, className: "erb-accordion__button", onClick: () => setExpanded(!expanded), children: title }) }),
    /* @__PURE__ */ jsx60("div", { className: "erb-accordion__panel", hidden: !expanded, children })
  ] });
};

// src/skip-link/SkipLink.tsx
import React10 from "react";
import { jsx as jsx61 } from "react/jsx-runtime";
var SkipLink = React10.forwardRef(({ href, children, className = "", ...props }, ref) => /* @__PURE__ */ jsx61("a", { ref, href, className: `erb-skip-link ${className}`, ...props, children }));
SkipLink.displayName = "SkipLink";

// src/combobox/Combobox.tsx
import { forwardRef as forwardRef47, useState as useState11, useRef as useRef4, useEffect as useEffect7, useId as useId9 } from "react";
import { jsx as jsx62, jsxs as jsxs19 } from "react/jsx-runtime";
var Combobox = forwardRef47(
  ({ className, options, value = "", onChange, label, error, id, disabled, placeholder, ...props }, ref) => {
    const generatedId = useId9();
    const comboboxId = id ?? generatedId;
    const errorId = `${comboboxId}-error`;
    const listboxId = `${comboboxId}-listbox`;
    const [isOpen, setIsOpen] = useState11(false);
    const [inputValue, setInputValue] = useState11("");
    const [activeIndex, setActiveIndex] = useState11(-1);
    const wrapperRef = useRef4(null);
    const inputRef = useRef4(null);
    useEffect7(() => {
      const selectedOption = options.find((opt) => opt.value === value);
      setInputValue(selectedOption ? selectedOption.label : "");
    }, [value, options]);
    const filteredOptions = options.filter(
      (opt) => opt.label.toLowerCase().includes(inputValue.toLowerCase())
    );
    useEffect7(() => {
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
    return /* @__PURE__ */ jsxs19("div", { className: "erb-combobox-wrapper", ref: wrapperRef, children: [
      label && /* @__PURE__ */ jsx62("label", { htmlFor: comboboxId, className: "erb-label", children: label }),
      /* @__PURE__ */ jsx62("div", { className: "erb-combobox", children: /* @__PURE__ */ jsx62(
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
      /* @__PURE__ */ jsx62(
        "ul",
        {
          id: listboxId,
          className: "erb-combobox-listbox",
          "data-open": isOpen && filteredOptions.length > 0,
          role: "listbox",
          children: filteredOptions.map((opt, index) => /* @__PURE__ */ jsx62(
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
      error && /* @__PURE__ */ jsx62("span", { id: errorId, className: "erb-error-message", children: error })
    ] });
  }
);
Combobox.displayName = "Combobox";

// src/multi-select/MultiSelect.tsx
import { forwardRef as forwardRef48, useState as useState12, useRef as useRef5, useEffect as useEffect8, useId as useId10 } from "react";
import { jsx as jsx63, jsxs as jsxs20 } from "react/jsx-runtime";
var MultiSelect = forwardRef48(
  ({ className, options, value = [], onChange, label, error, id, disabled, placeholder, ...props }, ref) => {
    const generatedId = useId10();
    const selectId = id ?? generatedId;
    const errorId = `${selectId}-error`;
    const listboxId = `${selectId}-listbox`;
    const [isOpen, setIsOpen] = useState12(false);
    const [inputValue, setInputValue] = useState12("");
    const [activeIndex, setActiveIndex] = useState12(-1);
    const wrapperRef = useRef5(null);
    const inputRef = useRef5(null);
    const selectedOptions = options.filter((opt) => value.includes(opt.value));
    const unselectedOptions = options.filter((opt) => !value.includes(opt.value));
    const filteredOptions = unselectedOptions.filter(
      (opt) => opt.label.toLowerCase().includes(inputValue.toLowerCase())
    );
    useEffect8(() => {
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
    return /* @__PURE__ */ jsxs20("div", { className: "erb-multi-select-wrapper", ref: wrapperRef, children: [
      label && /* @__PURE__ */ jsx63("label", { htmlFor: selectId, className: "erb-label", children: label }),
      /* @__PURE__ */ jsxs20(
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
            selectedOptions.map((opt) => /* @__PURE__ */ jsxs20("span", { className: "erb-multi-select-tag", children: [
              opt.label,
              /* @__PURE__ */ jsx63(
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
            /* @__PURE__ */ jsx63(
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
      /* @__PURE__ */ jsx63(
        "ul",
        {
          id: listboxId,
          className: "erb-multi-select-listbox",
          "data-open": isOpen && filteredOptions.length > 0,
          role: "listbox",
          "aria-multiselectable": "true",
          children: filteredOptions.map((opt, index) => /* @__PURE__ */ jsx63(
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
      error && /* @__PURE__ */ jsx63("span", { id: errorId, className: "erb-error-message", children: error })
    ] });
  }
);
MultiSelect.displayName = "MultiSelect";

// src/slider/Slider.tsx
import React13, { useRef as useRef6, useState as useState13, useCallback } from "react";
import { jsx as jsx64, jsxs as jsxs21 } from "react/jsx-runtime";
var Slider = React13.forwardRef(
  ({ min = 0, max = 100, step = 1, value, defaultValue, onChange, disabled = false, className = "", ...props }, ref) => {
    const [internalValue, setInternalValue] = useState13(defaultValue ?? min);
    const containerRef = useRef6(null);
    const isControlled = value !== void 0;
    const currentValue = isControlled ? value : internalValue;
    const clamp = (val) => Math.min(Math.max(val, min), max);
    const updateValue = useCallback((newValue) => {
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
    return /* @__PURE__ */ jsxs21(
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
          /* @__PURE__ */ jsx64("div", { className: "erb-slider-track" }),
          /* @__PURE__ */ jsx64("div", { className: "erb-slider-fill", style: { width: `${percentage}%`, left: 0 } }),
          /* @__PURE__ */ jsx64(
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
import React14, { useRef as useRef7, useState as useState14, useCallback as useCallback2 } from "react";
import { jsx as jsx65, jsxs as jsxs22 } from "react/jsx-runtime";
var RangeSlider = React14.forwardRef(
  ({ min = 0, max = 100, step = 1, value, defaultValue, onChange, disabled = false, className = "", ...props }, ref) => {
    const [internalValue, setInternalValue] = useState14(defaultValue ?? [min, max]);
    const containerRef = useRef7(null);
    const isControlled = value !== void 0;
    const currentValue = isControlled ? value : internalValue;
    const [activeThumb, setActiveThumb] = useState14(null);
    const clamp = (val) => Math.min(Math.max(val, min), max);
    const updateValue = useCallback2((index, newValue) => {
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
    return /* @__PURE__ */ jsxs22(
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
          /* @__PURE__ */ jsx65("div", { className: "erb-slider-track" }),
          /* @__PURE__ */ jsx65("div", { className: "erb-slider-fill", style: { left: `${p0}%`, width: `${p1 - p0}%` } }),
          /* @__PURE__ */ jsx65(
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
          /* @__PURE__ */ jsx65(
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
import React15 from "react";
import { jsx as jsx66 } from "react/jsx-runtime";
var DatePicker = React15.forwardRef(
  ({ className = "", size = "md", ...props }, ref) => {
    return /* @__PURE__ */ jsx66(
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
import React16 from "react";
import { jsx as jsx67, jsxs as jsxs23 } from "react/jsx-runtime";
var DateRangePicker = React16.forwardRef(
  ({ className = "", size = "md", startDate, endDate, onStartDateChange, onEndDateChange, ...props }, ref) => {
    return /* @__PURE__ */ jsxs23("div", { ref, className: `erb-daterangepicker ${className}`, "data-size": size, ...props, children: [
      /* @__PURE__ */ jsx67(
        "input",
        {
          type: "date",
          className: "erb-daterangepicker-start",
          value: startDate || "",
          onChange: (e) => onStartDateChange?.(e.target.value)
        }
      ),
      /* @__PURE__ */ jsx67("span", { className: "erb-daterangepicker-separator", children: "-" }),
      /* @__PURE__ */ jsx67(
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
import React17 from "react";
import { jsx as jsx68 } from "react/jsx-runtime";
var TimePicker = React17.forwardRef(
  ({ className = "", size = "md", ...props }, ref) => {
    return /* @__PURE__ */ jsx68(
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
import { jsx as jsx69 } from "react/jsx-runtime";
var ColorPicker = ({
  value = "#000000",
  onChange,
  className = "",
  ...props
}) => {
  const handleChange = (e) => {
    onChange?.(e.target.value);
  };
  return /* @__PURE__ */ jsx69("div", { className: `erb-color-picker ${className}`.trim(), children: /* @__PURE__ */ jsx69(
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
import { useState as useState15, useRef as useRef8 } from "react";
import { jsx as jsx70, jsxs as jsxs24 } from "react/jsx-runtime";
var FileUpload = ({
  onFileSelect,
  className = "",
  children,
  ...props
}) => {
  const [isDragActive, setIsDragActive] = useState15(false);
  const fileInputRef = useRef8(null);
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
  return /* @__PURE__ */ jsxs24(
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
        /* @__PURE__ */ jsx70(
          "input",
          {
            type: "file",
            ref: fileInputRef,
            className: "erb-file-upload-input",
            onChange: handleChange,
            ...props
          }
        ),
        children || /* @__PURE__ */ jsx70("span", { children: "Drag & Drop files here or click to browse" })
      ]
    }
  );
};

// src/pin-input/PinInput.tsx
import { useRef as useRef9, forwardRef as forwardRef49 } from "react";
import { jsx as jsx71 } from "react/jsx-runtime";
var PinInput = forwardRef49(({ length = 4, value = "", onChange, disabled = false }, ref) => {
  const inputsRef = useRef9([]);
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
  return /* @__PURE__ */ jsx71("div", { className: "erb-pin-input", ref, children: Array.from({ length }).map((_, index) => /* @__PURE__ */ jsx71(
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
import { useState as useState16, forwardRef as forwardRef50 } from "react";
import { jsx as jsx72, jsxs as jsxs25 } from "react/jsx-runtime";
var TagsInput = forwardRef50(({ tags = [], onChange, disabled = false, placeholder }, ref) => {
  const [inputValue, setInputValue] = useState16("");
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
  return /* @__PURE__ */ jsxs25("div", { className: `erb-tags-input ${disabled ? "erb-tags-input--disabled" : ""}`, ref, children: [
    tags.map((tag) => /* @__PURE__ */ jsxs25("span", { className: "erb-tags-input__tag", children: [
      tag,
      !disabled && /* @__PURE__ */ jsx72(
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
    /* @__PURE__ */ jsx72(
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
import { useState as useState17, forwardRef as forwardRef51 } from "react";
import { jsx as jsx73 } from "react/jsx-runtime";
var Rating = forwardRef51(({ max = 5, value = 0, onChange, disabled = false }, ref) => {
  const [hoverValue, setHoverValue] = useState17(null);
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
  return /* @__PURE__ */ jsx73(
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
        return /* @__PURE__ */ jsx73(
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
import React20 from "react";
import { jsx as jsx74 } from "react/jsx-runtime";
var Table = React20.forwardRef((props, ref) => {
  const { className = "", ...rest } = props;
  return /* @__PURE__ */ jsx74("table", { ref, className: `erb-table ${className}`, ...rest });
});
Table.displayName = "Table";
var TableHead = React20.forwardRef((props, ref) => /* @__PURE__ */ jsx74("thead", { ref, ...props }));
TableHead.displayName = "TableHead";
var TableBody = React20.forwardRef((props, ref) => /* @__PURE__ */ jsx74("tbody", { ref, ...props }));
TableBody.displayName = "TableBody";
var TableRow = React20.forwardRef((props, ref) => /* @__PURE__ */ jsx74("tr", { ref, ...props }));
TableRow.displayName = "TableRow";
var TableCell = React20.forwardRef((props, ref) => /* @__PURE__ */ jsx74("td", { ref, ...props }));
TableCell.displayName = "TableCell";
var TableHeaderCell = React20.forwardRef((props, ref) => /* @__PURE__ */ jsx74("th", { ref, ...props }));
TableHeaderCell.displayName = "TableHeaderCell";

// src/List/List.tsx
import React21 from "react";
import { jsx as jsx75 } from "react/jsx-runtime";
var List = React21.forwardRef((props, ref) => {
  const { as: Component = "ul", className = "", ...rest } = props;
  const listClass = Component === "ol" ? "erb-list--ordered" : "erb-list--unordered";
  return React21.createElement(Component, { ref, className: `erb-list ${listClass} ${className}`.trim(), ...rest });
});
List.displayName = "List";
var ListItem = React21.forwardRef((props, ref) => {
  const { className = "", ...rest } = props;
  return /* @__PURE__ */ jsx75("li", { ref, className: `erb-list-item ${className}`.trim(), ...rest });
});
ListItem.displayName = "ListItem";

// src/DescriptionList/DescriptionList.tsx
import React22 from "react";
import { jsx as jsx76 } from "react/jsx-runtime";
var DescriptionList = React22.forwardRef((props, ref) => {
  const { className = "", ...rest } = props;
  return /* @__PURE__ */ jsx76("dl", { ref, className: `erb-description-list ${className}`.trim(), ...rest });
});
DescriptionList.displayName = "DescriptionList";
var DescriptionTerm = React22.forwardRef((props, ref) => {
  const { className = "", ...rest } = props;
  return /* @__PURE__ */ jsx76("dt", { ref, className: `erb-description-list-term ${className}`.trim(), ...rest });
});
DescriptionTerm.displayName = "DescriptionTerm";
var DescriptionDetails = React22.forwardRef((props, ref) => {
  const { className = "", ...rest } = props;
  return /* @__PURE__ */ jsx76("dd", { ref, className: `erb-description-list-details ${className}`.trim(), ...rest });
});
DescriptionDetails.displayName = "DescriptionDetails";

// src/Stat/Stat.tsx
import React23 from "react";
import { jsx as jsx77, jsxs as jsxs26 } from "react/jsx-runtime";
var Stat = React23.forwardRef((props, ref) => {
  const { label, value, helpText, className = "", ...rest } = props;
  return /* @__PURE__ */ jsxs26("div", { ref, className: `erb-stat ${className}`.trim(), ...rest, children: [
    /* @__PURE__ */ jsx77("div", { className: "erb-stat-label", children: label }),
    /* @__PURE__ */ jsx77("div", { className: "erb-stat-value", children: value }),
    helpText && /* @__PURE__ */ jsx77("div", { className: "erb-stat-help-text", children: helpText })
  ] });
});
Stat.displayName = "Stat";

// src/Timeline/Timeline.tsx
import { jsx as jsx78, jsxs as jsxs27 } from "react/jsx-runtime";
var TimelineItem = ({ title, description, isLast }) => /* @__PURE__ */ jsxs27("li", { className: "erb-timeline-item", children: [
  /* @__PURE__ */ jsxs27("div", { className: "erb-timeline-indicator", children: [
    /* @__PURE__ */ jsx78("div", { className: "erb-timeline-dot" }),
    !isLast && /* @__PURE__ */ jsx78("div", { className: "erb-timeline-line" })
  ] }),
  /* @__PURE__ */ jsxs27("div", { className: "erb-timeline-content", children: [
    /* @__PURE__ */ jsx78("div", { className: "erb-timeline-title", children: title }),
    description && /* @__PURE__ */ jsx78("div", { className: "erb-timeline-description", children: description })
  ] })
] });
var Timeline = ({ children, className = "" }) => /* @__PURE__ */ jsx78("ul", { className: `erb-timeline ${className}`, children });

// src/EmptyState/EmptyState.tsx
import { jsx as jsx79, jsxs as jsxs28 } from "react/jsx-runtime";
var EmptyState = ({ title, description, icon, children, className = "" }) => /* @__PURE__ */ jsxs28("div", { className: `erb-empty-state ${className}`, children: [
  icon && /* @__PURE__ */ jsx79("div", { className: "erb-empty-state-icon", children: icon }),
  /* @__PURE__ */ jsx79("div", { className: "erb-empty-state-title", children: title }),
  description && /* @__PURE__ */ jsx79("div", { className: "erb-empty-state-description", children: description }),
  children && /* @__PURE__ */ jsx79("div", { className: "erb-empty-state-actions", children })
] });

// src/ErrorState/ErrorState.tsx
import { jsx as jsx80, jsxs as jsxs29 } from "react/jsx-runtime";
var ErrorState = ({ title, description, className = "", onRetry }) => /* @__PURE__ */ jsxs29("div", { className: `erb-error-state ${className}`, children: [
  /* @__PURE__ */ jsx80("div", { className: "erb-error-state-title", children: title }),
  description && /* @__PURE__ */ jsx80("div", { className: "erb-error-state-description", children: description }),
  onRetry && /* @__PURE__ */ jsx80("button", { className: "erb-error-state-retry", onClick: onRetry, children: "Retry" })
] });

// src/Toast/Toast.tsx
import { createContext as createContext5, useContext as useContext5, useState as useState18, useCallback as useCallback3 } from "react";
import { jsx as jsx81, jsxs as jsxs30 } from "react/jsx-runtime";
var Toast = ({ message, onClose }) => /* @__PURE__ */ jsxs30("div", { className: "erb-toast", children: [
  /* @__PURE__ */ jsx81("div", { className: "erb-toast-message", children: message }),
  /* @__PURE__ */ jsx81("button", { className: "erb-toast-close", onClick: onClose, children: "\xD7" })
] });
var ToastContext = createContext5(void 0);
var ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState18([]);
  const addToast = useCallback3((message) => {
    const id = Math.random().toString(36).substring(7);
    setToasts((prev) => [...prev, { id, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3e3);
  }, []);
  const removeToast = useCallback3((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);
  return /* @__PURE__ */ jsxs30(ToastContext.Provider, { value: { addToast }, children: [
    children,
    /* @__PURE__ */ jsx81("div", { className: "erb-toast-container", children: toasts.map((toast) => /* @__PURE__ */ jsx81(Toast, { id: toast.id, message: toast.message, onClose: () => removeToast(toast.id) }, toast.id)) })
  ] });
};
var useToast = () => {
  const context = useContext5(ToastContext);
  if (!context) throw new Error("useToast must be used within a ToastProvider");
  return context;
};

// src/banner/banner.tsx
import React25 from "react";
import { jsx as jsx82 } from "react/jsx-runtime";
var Banner = React25.forwardRef(({ variant = "info", className = "", children, ...props }, ref) => {
  return /* @__PURE__ */ jsx82("div", { ref, className: `erb-banner erb-banner--${variant} ${className}`, role: "alert", ...props, children });
});
Banner.displayName = "Banner";

// src/progress/progress.tsx
import React26 from "react";
import { jsx as jsx83 } from "react/jsx-runtime";
var Progress = React26.forwardRef(({ value, max = 100, className = "", ...props }, ref) => {
  const percentage = Math.min(100, Math.max(0, value / max * 100));
  return /* @__PURE__ */ jsx83("div", { ref, className: `erb-progress ${className}`, role: "progressbar", "aria-valuenow": value, "aria-valuemin": 0, "aria-valuemax": max, ...props, children: /* @__PURE__ */ jsx83("div", { className: "erb-progress__bar", style: { width: `${percentage}%` } }) });
});
Progress.displayName = "Progress";

// src/loading-overlay/loading-overlay.tsx
import React27 from "react";
import { jsx as jsx84 } from "react/jsx-runtime";
var LoadingOverlay = React27.forwardRef(({ active = true, className = "", ...props }, ref) => {
  if (!active) return null;
  return /* @__PURE__ */ jsx84("div", { ref, className: `erb-loading-overlay ${className}`, ...props, children: /* @__PURE__ */ jsx84("div", { className: "erb-loading-overlay__spinner", "aria-label": "Loading" }) });
});
LoadingOverlay.displayName = "LoadingOverlay";

// src/image/image.tsx
import React28, { useState as useState19 } from "react";
import { jsx as jsx85 } from "react/jsx-runtime";
var Image = React28.forwardRef(({ lazy = false, fallbackText = "Image not available", src, alt, className = "", ...props }, ref) => {
  const [error, setError] = useState19(false);
  if (error || !src) {
    return /* @__PURE__ */ jsx85("div", { className: `erb-image-wrapper erb-image--fallback ${className}`, style: { width: props.width || "100%", height: props.height || "100px" }, children: fallbackText });
  }
  return /* @__PURE__ */ jsx85("div", { className: `erb-image-wrapper ${className}`, children: /* @__PURE__ */ jsx85("img", { ref, src, alt, className: "erb-image", loading: lazy ? "lazy" : "eager", onError: () => setError(true), ...props }) });
});
Image.displayName = "Image";

// src/gallery/Gallery.tsx
import { jsx as jsx86 } from "react/jsx-runtime";
var Gallery = ({ images, onImageClick }) => {
  return /* @__PURE__ */ jsx86("div", { className: "erb-gallery", children: images.map((img, idx) => /* @__PURE__ */ jsx86("div", { className: "erb-gallery-item", onClick: () => onImageClick?.(idx), children: /* @__PURE__ */ jsx86("img", { src: img.src, alt: img.alt, className: "erb-gallery-img" }) }, idx)) });
};

// src/lightbox/Lightbox.tsx
import { useEffect as useEffect9 } from "react";
import { jsx as jsx87, jsxs as jsxs31 } from "react/jsx-runtime";
var Lightbox = ({ isOpen, onClose, imageSrc, imageAlt }) => {
  useEffect9(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);
  if (!isOpen || !imageSrc) return null;
  return /* @__PURE__ */ jsx87("div", { className: "erb-lightbox", onClick: onClose, role: "dialog", "aria-modal": "true", children: /* @__PURE__ */ jsxs31("div", { className: "erb-lightbox-content", onClick: (e) => e.stopPropagation(), children: [
    /* @__PURE__ */ jsx87("button", { className: "erb-lightbox-close", onClick: onClose, "aria-label": "Close", children: "\xD7" }),
    /* @__PURE__ */ jsx87("img", { src: imageSrc, alt: imageAlt, className: "erb-lightbox-img" })
  ] }) });
};

// src/carousel/Carousel.tsx
import { useState as useState20 } from "react";
import { jsx as jsx88, jsxs as jsxs32 } from "react/jsx-runtime";
var Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState20(0);
  if (!images || images.length === 0) return null;
  const next = () => setCurrentIndex((i) => (i + 1) % images.length);
  const prev = () => setCurrentIndex((i) => (i - 1 + images.length) % images.length);
  return /* @__PURE__ */ jsxs32("div", { className: "erb-carousel", children: [
    /* @__PURE__ */ jsx88(
      "div",
      {
        className: "erb-carousel-track",
        style: { transform: `translateX(-${currentIndex * 100}%)` },
        children: images.map((img, i) => /* @__PURE__ */ jsx88("div", { className: "erb-carousel-item", children: /* @__PURE__ */ jsx88("img", { src: img.src, alt: img.alt, className: "erb-gallery-img", style: { width: "100%", display: "block" } }) }, i))
      }
    ),
    /* @__PURE__ */ jsxs32("div", { className: "erb-carousel-controls", children: [
      /* @__PURE__ */ jsx88("button", { className: "erb-carousel-btn", onClick: prev, "aria-label": "Previous", children: "<" }),
      /* @__PURE__ */ jsx88("button", { className: "erb-carousel-btn", onClick: next, "aria-label": "Next", children: ">" })
    ] })
  ] });
};

// src/Hero/Hero.tsx
import { jsx as jsx89 } from "react/jsx-runtime";
var Hero = ({ className = "", children, ...props }) => {
  return /* @__PURE__ */ jsx89("div", { className: `erb-hero ${className}`, ...props, children });
};

// src/FeatureGrid/FeatureGrid.tsx
import { jsx as jsx90 } from "react/jsx-runtime";
var FeatureGrid = ({ className = "", children, ...props }) => {
  return /* @__PURE__ */ jsx90("div", { className: `erb-featuregrid ${className}`, ...props, children });
};

// src/CTA/CTA.tsx
import { jsx as jsx91 } from "react/jsx-runtime";
var CTA = ({ className = "", children, ...props }) => {
  return /* @__PURE__ */ jsx91("div", { className: `erb-cta ${className}`, ...props, children });
};

// src/Testimonial/Testimonial.tsx
import { jsx as jsx92 } from "react/jsx-runtime";
var Testimonial = ({ className = "", children, ...props }) => {
  return /* @__PURE__ */ jsx92("div", { className: `erb-testimonial ${className}`, ...props, children });
};

// src/LogoCloud/LogoCloud.tsx
import { jsx as jsx93 } from "react/jsx-runtime";
var LogoCloud = ({ className = "", children, ...props }) => {
  return /* @__PURE__ */ jsx93("div", { className: `erb-logocloud ${className}`, ...props, children });
};

// src/FAQ/FAQ.tsx
import { forwardRef as forwardRef52 } from "react";
import { jsx as jsx94 } from "react/jsx-runtime";
var FAQ = forwardRef52(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsx94(
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
import { forwardRef as forwardRef53 } from "react";
import { jsx as jsx95 } from "react/jsx-runtime";
var CommandPalette = forwardRef53(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsx95(
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
export {
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
};
//# sourceMappingURL=index.mjs.map