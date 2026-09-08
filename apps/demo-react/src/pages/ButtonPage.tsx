import { ComponentPreview } from '../docs/ComponentPreview';
import ButtonExample from '../examples/ButtonExample';
import buttonExampleCode from '../examples/ButtonExample.tsx?raw';

export function ButtonPage() {
  return (
    <div>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem', color: 'var(--erb-color-neutral-fg)' }}>Buttons & Badges</h1>
      <p style={{ color: 'var(--erb-color-fg-muted)', marginBottom: '2rem', fontSize: '1.125rem' }}>
        Buttons are used to trigger actions. Badges and tags are used for labelling.
      </p>
      
      <ComponentPreview 
        title="Basic Usage" 
        description="A showcase of standard buttons, badges, and tags."
        code={buttonExampleCode}
      >
        <ButtonExample />
      </ComponentPreview>
    </div>
  );
}
