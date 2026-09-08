import { ComponentPreview } from '../docs/ComponentPreview';
import LayoutNavigationExample from '../examples/LayoutNavigationExample';
import layoutNavigationExampleCode from '../examples/LayoutNavigationExample.tsx?raw';

export function LayoutNavigationPage() {
  return (
    <div>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem', color: 'var(--erb-color-neutral-fg)' }}>Layout & Navigation</h1>
      <p style={{ color: 'var(--erb-color-fg-muted)', marginBottom: '2rem', fontSize: '1.125rem' }}>
        Components used for page layout and navigation.
      </p>

      <ComponentPreview
        title="Layout & Navigation Components"
        description="A showcase of breadcrumbs and cards."
        code={layoutNavigationExampleCode}
      >
        <LayoutNavigationExample />
      </ComponentPreview>
    </div>
  );
}
