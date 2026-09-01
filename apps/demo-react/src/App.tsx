import { Button } from '@glowing-sea-studio/erebus-react'
import '@glowing-sea-studio/erebus-tokens/dist/css/variables.css'
import '@glowing-sea-studio/erebus-core/src/components/index.css'

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Erebus React Demo</h1>
      <Button variant="solid" color="primary">Click me</Button>
    </div>
  )
}

export default App
