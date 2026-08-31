import os

tokens_dir = "packages/tokens/src/component"
css_dir = "packages/core/src/components"

tokens = {
    "select.json": """{
  "select": {
    "height": {
      "sm": { "$value": "{input.height.sm}" },
      "md": { "$value": "{input.height.md}" },
      "lg": { "$value": "{input.height.lg}" }
    },
    "px": {
      "sm": { "$value": "{input.px.sm}" },
      "md": { "$value": "{input.px.md}" },
      "lg": { "$value": "{input.px.lg}" }
    },
    "radius": { "$value": "{radius.md}" },
    "bg": { "$value": "{color.bg.canvas}" },
    "border": { "$value": "{color.border.default}" },
    "text": { "$value": "{color.fg.default}" },
    "focus-ring": { "$value": "{color.border.focus}" },
    "disabled": {
      "bg": { "$value": "{color.bg.muted}" },
      "text": { "$value": "{color.fg.disabled}" }
    }
  }
}""",
    "number-input.json": """{
  "number-input": {
    "height": {
      "sm": { "$value": "{input.height.sm}" },
      "md": { "$value": "{input.height.md}" },
      "lg": { "$value": "{input.height.lg}" }
    },
    "px": {
      "sm": { "$value": "{input.px.sm}" },
      "md": { "$value": "{input.px.md}" },
      "lg": { "$value": "{input.px.lg}" }
    },
    "radius": { "$value": "{radius.md}" },
    "bg": { "$value": "{color.bg.canvas}" },
    "border": { "$value": "{color.border.default}" },
    "text": { "$value": "{color.fg.default}" },
    "focus-ring": { "$value": "{color.border.focus}" },
    "disabled": {
      "bg": { "$value": "{color.bg.muted}" },
      "text": { "$value": "{color.fg.disabled}" }
    }
  }
}""",
    "search-input.json": """{
  "search-input": {
    "height": {
      "sm": { "$value": "{input.height.sm}" },
      "md": { "$value": "{input.height.md}" },
      "lg": { "$value": "{input.height.lg}" }
    },
    "px": {
      "sm": { "$value": "{input.px.sm}" },
      "md": { "$value": "{input.px.md}" },
      "lg": { "$value": "{input.px.lg}" }
    },
    "radius": { "$value": "{radius.md}" },
    "bg": { "$value": "{color.bg.canvas}" },
    "border": { "$value": "{color.border.default}" },
    "text": { "$value": "{color.fg.default}" },
    "focus-ring": { "$value": "{color.border.focus}" },
    "disabled": {
      "bg": { "$value": "{color.bg.muted}" },
      "text": { "$value": "{color.fg.disabled}" }
    }
  }
}"""
}

css = {
    "select.css": """
.erb-select {
  appearance: none;
  display: block;
  width: 100%;
  background-color: var(--erb-select-bg);
  border: 1px solid var(--erb-select-border);
  color: var(--erb-select-text);
  border-radius: var(--erb-select-radius);
  font-family: inherit;
  font-size: 1rem;
  line-height: 1.5;
  transition: border-color 0.2s, box-shadow 0.2s;
  padding-inline-start: var(--erb-select-px-md);
  padding-inline-end: calc(var(--erb-select-px-md) + 1.5rem);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 1em;
}

.erb-select[data-size="sm"] { height: var(--erb-select-height-sm); padding-inline-start: var(--erb-select-px-sm); }
.erb-select[data-size="md"] { height: var(--erb-select-height-md); padding-inline-start: var(--erb-select-px-md); }
.erb-select[data-size="lg"] { height: var(--erb-select-height-lg); padding-inline-start: var(--erb-select-px-lg); }

.erb-select:focus {
  outline: none;
  border-color: var(--erb-select-focus-ring);
  box-shadow: 0 0 0 2px var(--erb-select-focus-ring);
}

.erb-select:disabled {
  background-color: var(--erb-select-disabled-bg);
  color: var(--erb-select-disabled-text);
  cursor: not-allowed;
}

.erb-select[aria-invalid="true"] {
  border-color: var(--erb-color-danger-main);
}
""",
    "number-input.css": """
.erb-number-input-wrapper {
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
}

.erb-number-input {
  display: block;
  width: 100%;
  background-color: var(--erb-number-input-bg);
  border: 1px solid var(--erb-number-input-border);
  color: var(--erb-number-input-text);
  border-radius: var(--erb-number-input-radius);
  font-family: inherit;
  font-size: 1rem;
  line-height: 1.5;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.erb-number-input[data-size="sm"] { height: var(--erb-number-input-height-sm); padding-inline-start: var(--erb-number-input-px-sm); padding-inline-end: calc(var(--erb-number-input-px-sm) + 2rem); }
.erb-number-input[data-size="md"] { height: var(--erb-number-input-height-md); padding-inline-start: var(--erb-number-input-px-md); padding-inline-end: calc(var(--erb-number-input-px-md) + 2.5rem); }
.erb-number-input[data-size="lg"] { height: var(--erb-number-input-height-lg); padding-inline-start: var(--erb-number-input-px-lg); padding-inline-end: calc(var(--erb-number-input-px-lg) + 3rem); }

.erb-number-input:focus {
  outline: none;
  border-color: var(--erb-number-input-focus-ring);
  box-shadow: 0 0 0 2px var(--erb-number-input-focus-ring);
}

.erb-number-input:disabled {
  background-color: var(--erb-number-input-disabled-bg);
  color: var(--erb-number-input-disabled-text);
  cursor: not-allowed;
}

.erb-number-input[aria-invalid="true"] {
  border-color: var(--erb-color-danger-main);
}

.erb-number-input-stepper {
  position: absolute;
  inset-inline-end: 0;
  display: flex;
  flex-direction: column;
  height: 100%;
  border-inline-start: 1px solid var(--erb-number-input-border);
}

.erb-number-input-stepper-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  background: transparent;
  border: none;
  cursor: pointer;
  color: var(--erb-color-fg-muted);
  padding: 0 0.5rem;
}

.erb-number-input-stepper-btn:hover {
  background: var(--erb-color-bg-surface-raised);
}

.erb-number-input-stepper-btn:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
""",
    "search-input.css": """
.erb-search-input-wrapper {
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
}

.erb-search-input-icon {
  position: absolute;
  inset-inline-start: 0.75rem;
  color: var(--erb-color-fg-muted);
  display: flex;
  align-items: center;
  pointer-events: none;
}

.erb-search-input {
  display: block;
  width: 100%;
  background-color: var(--erb-search-input-bg);
  border: 1px solid var(--erb-search-input-border);
  color: var(--erb-search-input-text);
  border-radius: var(--erb-search-input-radius);
  font-family: inherit;
  font-size: 1rem;
  line-height: 1.5;
  transition: border-color 0.2s, box-shadow 0.2s;
  padding-inline-start: 2.5rem;
  padding-inline-end: 2.5rem;
}

.erb-search-input[data-size="sm"] { height: var(--erb-search-input-height-sm); }
.erb-search-input[data-size="md"] { height: var(--erb-search-input-height-md); }
.erb-search-input[data-size="lg"] { height: var(--erb-search-input-height-lg); }

.erb-search-input:focus {
  outline: none;
  border-color: var(--erb-search-input-focus-ring);
  box-shadow: 0 0 0 2px var(--erb-search-input-focus-ring);
}

.erb-search-input:disabled {
  background-color: var(--erb-search-input-disabled-bg);
  color: var(--erb-search-input-disabled-text);
  cursor: not-allowed;
}

.erb-search-input-clear-btn {
  position: absolute;
  inset-inline-end: 0.75rem;
  display: flex;
  align-items: center;
  background: transparent;
  border: none;
  cursor: pointer;
  color: var(--erb-color-fg-muted);
  padding: 0;
}

.erb-search-input-clear-btn:hover {
  color: var(--erb-color-fg-default);
}
"""
}

for filepath, content in tokens.items():
    with open(os.path.join(tokens_dir, filepath), "w") as f:
        f.write(content)

for filepath, content in css.items():
    with open(os.path.join(css_dir, filepath), "w") as f:
        f.write(content)

index_css_path = os.path.join(css_dir, "index.css")
with open(index_css_path, "a") as f:
    f.write("@import './select.css';\n")
    f.write("@import './number-input.css';\n")
    f.write("@import './search-input.css';\n")
