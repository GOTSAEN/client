import './App.css'
import Hello from '@components/Hello'
import { Accordion } from './components/ui/accordion'
import { Button } from '@components/ui/button'
function App() {
  return (
    <div className='App'>
      <Hello />
      <Accordion />
      <Button>Test</Button>
    </div>
  )
}

export default App
