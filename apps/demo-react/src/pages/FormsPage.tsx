import { ComponentPreview } from '../docs/ComponentPreview';
import FormsExample from '../examples/FormsExample';
import formsExampleCode from '../examples/FormsExample.tsx?raw';

export function FormsPage() {
  return (
    <div>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem', color: 'var(--erb-color-neutral-fg)' }}>Form Controls</h1>
      <p style={{ color: 'var(--erb-color-fg-muted)', marginBottom: '2rem', fontSize: '1.125rem' }}>
        Inputs, Textareas, Checkboxes, Radios, Switches, and Sliders.
      </p>
      
      <ComponentPreview 
        title="Basic Usage" 
        description="A showcase of standard form controls."
        code={formsExampleCode}
      >
        <FormsExample />
      </ComponentPreview>
    </div>
  );
}
