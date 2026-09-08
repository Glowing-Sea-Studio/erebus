import { KitchenSink } from '../KitchenSink';

export function OverviewPage() {
  return (
    <div>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem', color: 'var(--erb-color-neutral-fg)' }}>Overview</h1>
      <p style={{ color: 'var(--erb-color-fg-muted)', marginBottom: '2rem', fontSize: '1.125rem' }}>
        A complete kitchen sink of all components available in Erebus React.
      </p>
      
      <div style={{ padding: '2rem', border: '1px solid var(--erb-color-border-default)', borderRadius: '8px', backgroundColor: 'var(--erb-color-bg-base)' }}>
        <KitchenSink />
      </div>
    </div>
  );
}
