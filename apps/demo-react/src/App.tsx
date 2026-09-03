import { ToastProvider, useToast, Button, AppShell, Header, Footer, Sidebar } from '@glowing-sea-studio/erebus-react'
import { KitchenSink } from './KitchenSink'
import '@glowing-sea-studio/erebus-tokens/dist/css/variables.css'
import '@glowing-sea-studio/erebus-core/src/components/index.css'

function DemoContent() {
  const { addToast } = useToast();

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--erb-color-neutral-fg)', marginBottom: '0.5rem' }}>Erebus React Demo</h1>
        <p style={{ color: 'var(--erb-color-fg-muted)', fontSize: '1.125rem' }}>Aperçu de l'ensemble des composants du Design System</p>
      </div>
      <KitchenSink />
      <div style={{ padding: '1rem', border: '1px solid var(--erb-color-border-default)', borderRadius: '8px' }}>
        <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Toasts</h2>
        <Button variant="solid" color="primary" onClick={() => addToast('Hello depuis React !')}>
          Afficher un Toast
        </Button>
      </div>
    </div>
  );
}

function App() {
  return (
    <ToastProvider>
      <AppShell style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: 'var(--erb-color-bg-canvas-subtle)', fontFamily: 'var(--erb-font-sans)' }}>
        <Header style={{ padding: '1rem', borderBottom: '1px solid var(--erb-color-border-default)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontWeight: 'bold', fontSize: '1.5rem', color: 'var(--erb-color-neutral-fg)' }}>Erebus React</div>
          <nav>
            <a href="#" style={{ color: 'var(--erb-color-fg-muted)', textDecoration: 'none', marginRight: '1rem' }}>Docs</a>
            <a href="#" style={{ color: 'var(--erb-color-fg-muted)', textDecoration: 'none' }}>GitHub</a>
          </nav>
        </Header>
        <div style={{ display: 'flex', flex: 1 }}>
          <Sidebar style={{ width: '250px', borderRight: '1px solid var(--erb-color-border-default)', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ fontWeight: 'bold', color: 'var(--erb-color-neutral-fg)' }}>Components</div>
            <a href="#" style={{ color: 'var(--erb-color-primary-base)', textDecoration: 'none' }}>Kitchen Sink</a>
            <a href="#" style={{ color: 'var(--erb-color-fg-muted)', textDecoration: 'none' }}>Buttons</a>
            <a href="#" style={{ color: 'var(--erb-color-fg-muted)', textDecoration: 'none' }}>Forms</a>
          </Sidebar>
          <main style={{ flex: 1, padding: '3rem', overflowY: 'auto' }}>
            <DemoContent />
          </main>
        </div>
        <Footer style={{ padding: '2rem', borderTop: '1px solid var(--erb-color-border-default)', textAlign: 'center', color: 'var(--erb-color-fg-muted)' }}>
          <p>© {new Date().getFullYear()} Glowing Sea Studio. All rights reserved.</p>
        </Footer>
      </AppShell>
    </ToastProvider>
  )
}

export default App
