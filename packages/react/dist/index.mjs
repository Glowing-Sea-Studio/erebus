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
export {
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
};
//# sourceMappingURL=index.mjs.map