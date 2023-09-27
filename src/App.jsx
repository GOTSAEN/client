import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './Layout/Header'
import { DarkModeProvider } from './context/DarkModeContext'
import HorizontalMenuBar from './Layout/HorizontalMenuBar'
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <DarkModeProvider>
        <div className='gradient blur-3xl rotate-45 z-0'></div>
        <div className='gradient-2 blur-3xl rotate-45 z-0'></div>
        <div className='sticky top-0  bg-background/50'>
          <Header />
          <HorizontalMenuBar />
        </div>

        <main className='max-w-[1400px] grow mx-auto z-10'>
          <Outlet />
        </main>
      </DarkModeProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default App
