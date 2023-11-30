import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './Layout/Header';
import { DarkModeProvider } from './context/DarkModeContext';
import HorizontalMenuBar from './Layout/HorizontalMenuBar';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { AuthProvider } from './context/AuthContext';
import AlertToast from './components/ui/toast';
import { ToastProvider } from './context/ToastContext';
import { CookiesProvider } from 'react-cookie';
import Footer from './Layout/Footer';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <DarkModeProvider>
        <CookiesProvider>
          <AuthProvider>
            <ToastProvider>
              <div className="gradient blur-3xl rotate-45 z-0"></div>
              <div className="gradient-2 blur-3xl rotate-45 z-0"></div>
              <div className="sticky top-0 z-20 bg-background">
                <Header />
                <HorizontalMenuBar />
              </div>
              <main className="relative main w-full max-w-[1400px] z-10 mx-auto p-2">
                <Outlet />
                <AlertToast />
              </main>
              <Footer />
            </ToastProvider>
          </AuthProvider>
        </CookiesProvider>
      </DarkModeProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
