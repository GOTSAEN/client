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
      <div className='static'>
          <div className='gradient blur-2xl rotate-45 overflow-hidden'></div>
          <div className='gradient-2 blur-2xl rotate-45 overflow-hidden'></div>
          <div className='sticky top-0  bg-background/50 z-10 '>
            <Header />
            <HorizontalMenuBar />
          </div>
        </div>
        <section className='w-full flex justify-center'>
          <main className='max-w-[1400px] w-full'>
            <Outlet />
          </main>
        </section>
      </DarkModeProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default App
