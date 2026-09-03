import { ToastProvider, useToast, Button } from '@glowing-sea-studio/erebus-react'
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
      <div style={{ minHeight: '100vh', backgroundColor: 'var(--erb-color-bg-canvas-subtle)', padding: '3rem', fontFamily: 'var(--erb-font-sans)' }}>
        <DemoContent />
      </div>
    </ToastProvider>
  )
}

export default App
