import { Button, Card, CardHeader, CardTitle, CardDescription, CardBody, CardFooter, ToastProvider, useToast } from '@glowing-sea-studio/erebus-react'
import '@glowing-sea-studio/erebus-tokens/dist/css/variables.css'
import '@glowing-sea-studio/erebus-core/src/components/index.css'

function DemoContent() {
  const { addToast } = useToast();

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--erb-color-neutral-fg)', marginBottom: '0.5rem' }}>Erebus React Demo</h1>
        <p style={{ color: 'var(--erb-color-fg-muted)', fontSize: '1.125rem' }}>Bienvenue dans la démo du Design System avec React !</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Composant interactif</CardTitle>
          <CardDescription>Essaie de cliquer sur le bouton ci-dessous pour voir le toast s'afficher.</CardDescription>
        </CardHeader>
        <CardBody>
          <p style={{ color: 'var(--erb-color-fg-default)' }}>Ce composant utilise les composants du Design System Erebus.</p>
        </CardBody>
        <CardFooter>
          <Button variant="solid" color="primary" onClick={() => addToast('Hello depuis React ! Le design system fonctionne à merveille.')}>
            Afficher un Toast
          </Button>
          <Button variant="outline" color="neutral" style={{ marginLeft: '1rem' }} onClick={() => addToast('Action secondaire effectuée.')}>
            Autre action
          </Button>
        </CardFooter>
      </Card>
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
