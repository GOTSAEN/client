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
        <div className='sticky top-0  bg-background '>
          <Header />
          <HorizontalMenuBar />
        </div>
        <section className='w-full min-h-full px-auto flex justify-center'>
          <main className='max-w-[1400px] w-full h-full'>
            <Outlet />
          </main>
        </section>
      </DarkModeProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default App
