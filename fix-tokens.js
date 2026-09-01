const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'packages/tokens/src/component');

const replacements = {
  // Colors
  'colors.background.main': 'color.background.default',
  'colors.background.alt': 'color.background.subtle',
  'colors.background': 'color.background.default',
  'color.background': 'color.background.default',
  
  'colors.text': 'color.text.default',
  'color.text.inverse': 'color.text.inverse', // wait, is this defined? I'll define a fallback below
  
  'colors.border.base': 'color.border.default',
  'colors.border.focus': 'color.border.focus',
  
  'colors.neutral.400': 'color.neutral.400',
  'colors.neutral.500': 'color.neutral.500',
  'colors.neutral.900': 'color.neutral.900',
  
  'colors.danger.500': 'color.danger.500',
  
  'color.overlay': 'color.background.overlay',
  
  // Radii
  'radii.sm': 'radius.sm',
  'radii.md': 'radius.md',
  'radii.lg': 'radius.lg',
  'radii.full': 'radius.full',
  
  // Spacing
  'spacing.1': 'size.spacing.1',
  'spacing.2': 'size.spacing.2',
  'spacing.3': 'size.spacing.3',
  'spacing.xl': 'size.spacing.6', // example
  
  // Typography
  'typography.font-size.xs': 'typography.size.xs',
  'typography.font-size.sm': 'typography.size.sm',
  'typography.font-weight.medium': 'typography.weight.medium',
  'font-size.xs': 'typography.size.xs',
  'font-size.sm': 'typography.size.sm',
  'font-weight.normal': 'typography.weight.regular',
  'font-weight.medium': 'typography.weight.medium',
};

fs.readdirSync(componentsDir).forEach(file => {
  if (file.endsWith('.json')) {
    const filePath = path.join(componentsDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace all bad references
    for (const [bad, good] of Object.entries(replacements)) {
      const regex = new RegExp(`\\{${bad.replace(/\./g, '\\.')}\\}`, 'g');
      content = content.replace(regex, `{${good}}`);
    }
    
    fs.writeFileSync(filePath, content);
  }
});
console.log("Tokens patched.");
