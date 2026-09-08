import { ComponentPreview } from '../docs/ComponentPreview';
import AdvancedComponentsExample from '../examples/AdvancedComponentsExample';
import advancedComponentsExampleCode from '../examples/AdvancedComponentsExample.tsx?raw';

export function AdvancedComponentsPage() {
  return (
    <div>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem', color: 'var(--erb-color-neutral-fg)' }}>Advanced Components</h1>
      <p style={{ color: 'var(--erb-color-fg-muted)', marginBottom: '2rem', fontSize: '1.125rem' }}>
        Complex and highly structured components.
      </p>

      <ComponentPreview
        title="Advanced Components"
        description="A showcase of tabs, accordion, modals, carousels, marketing blocks, and data display components."
        code={advancedComponentsExampleCode}
      >
        <AdvancedComponentsExample />
      </ComponentPreview>
    </div>
  );
}
