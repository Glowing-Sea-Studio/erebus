import os

tokens_dir = "packages/tokens/src/component"
css_dir = "packages/core/src/components"

tokens = {
    "textarea.json": """{
  "textarea": {
    "bg": { "$value": "{color.bg.canvas}" },
    "border": { "$value": "{color.border.default}" },
    "text": { "$value": "{color.fg.default}" },
    "radius": { "$value": "{radius.md}" },
    "focus-ring": { "$value": "{color.border.focus}" },
    "disabled": {
      "bg": { "$value": "{color.bg.muted}" },
      "text": { "$value": "{color.fg.disabled}" }
    }
  }
}""",
    "checkbox.json": """{
  "checkbox": {
    "size": {
      "sm": { "$value": "1rem" },
      "md": { "$value": "1.25rem" },
      "lg": { "$value": "1.5rem" }
    },
    "bg": { "$value": "{color.bg.canvas}" },
    "border": { "$value": "{color.border.default}" },
    "radius": { "$value": "{radius.sm}" },
    "checked": {
      "bg": { "$value": "{color.accent.bg}" },
      "border": { "$value": "{color.accent.bg}" },
      "icon": { "$value": "{color.fg.on-accent}" }
    },
    "focus-ring": { "$value": "{color.border.focus}" },
    "disabled": {
      "bg": { "$value": "{color.bg.muted}" },
      "border": { "$value": "{color.border.muted}" }
    }
  }
}""",
    "radio.json": """{
  "radio": {
    "size": {
      "sm": { "$value": "1rem" },
      "md": { "$value": "1.25rem" },
      "lg": { "$value": "1.5rem" }
    },
    "bg": { "$value": "{color.bg.canvas}" },
    "border": { "$value": "{color.border.default}" },
    "checked": {
      "bg": { "$value": "{color.accent.bg}" },
      "border": { "$value": "{color.accent.bg}" },
      "icon": { "$value": "{color.fg.on-accent}" }
    },
    "focus-ring": { "$value": "{color.border.focus}" },
    "disabled": {
      "bg": { "$value": "{color.bg.muted}" },
      "border": { "$value": "{color.border.muted}" }
    }
  }
}""",
    "switch.json": """{
  "switch": {
    "width": {
      "sm": { "$value": "1.75rem" },
      "md": { "$value": "2.25rem" },
      "lg": { "$value": "2.75rem" }
    },
    "height": {
      "sm": { "$value": "1rem" },
      "md": { "$value": "1.25rem" },
      "lg": { "$value": "1.5rem" }
    },
    "thumb-size": {
      "sm": { "$value": "0.75rem" },
      "md": { "$value": "1rem" },
      "lg": { "$value": "1.25rem" }
    },
    "bg": { "$value": "{color.bg.muted}" },
    "checked": {
      "bg": { "$value": "{color.accent.bg}" }
    },
    "thumb-bg": { "$value": "{color.bg.canvas}" },
    "focus-ring": { "$value": "{color.border.focus}" },
    "disabled": {
      "bg": { "$value": "{color.bg.muted}" }
    }
  }
}"""
}

for filepath, content in tokens.items():
    with open(os.path.join(tokens_dir, filepath), "w") as f:
        f.write(content)
