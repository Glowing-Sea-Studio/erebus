import { ReactNode } from 'react';
import { Tabs, TabsList, Tab, TabsPanel } from '@glowing-sea-studio/erebus-react';

interface ComponentPreviewProps {
  title: string;
  description?: string;
  children: ReactNode;
  code: string;
}

export function ComponentPreview({ title, description, children, code }: ComponentPreviewProps) {
  return (
    <div style={{ marginBottom: '3rem' }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem', color: 'var(--erb-color-neutral-fg)' }}>{title}</h2>
      {description && <p style={{ color: 'var(--erb-color-fg-muted)', marginBottom: '1.5rem' }}>{description}</p>}
      
      <div style={{ border: '1px solid var(--erb-color-border-default)', borderRadius: '8px', overflow: 'hidden' }}>
        <Tabs defaultValue="preview">
          <div style={{ padding: '0 1rem', backgroundColor: 'var(--erb-color-bg-subtle)' }}>
            <TabsList>
              <Tab value="preview">Preview</Tab>
              <Tab value="code">Code (TSX)</Tab>
            </TabsList>
          </div>
          
          <TabsPanel value="preview" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', backgroundColor: 'var(--erb-color-bg-base)' }}>
            {children}
          </TabsPanel>
          
          <TabsPanel value="code" style={{ padding: 0, margin: 0 }}>
            <pre style={{ margin: 0, padding: '1.5rem', backgroundColor: '#1e1e1e', color: '#d4d4d4', overflowX: 'auto', fontSize: '0.875rem', fontFamily: 'monospace' }}>
              <code>{code.trim()}</code>
            </pre>
          </TabsPanel>
        </Tabs>
      </div>
    </div>
  );
}
