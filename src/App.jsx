import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/common/Header'
import { DarkModeProvider } from './context/DarkModeContext'
function App() {
  return (
    <DarkModeProvider>
      <Header />
      <Outlet />
    </DarkModeProvider>
  )
}

export default App
