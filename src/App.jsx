
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import { AppRoutes } from './Routes';
import { Toaster } from './components/ui/toaster';
import { AppContextProvider } from './context/AppContextProvider';

function App() {
  return (
    <QueryClientProvider client={QueryClient}>
    <AppContextProvider>
      <AppRoutes />
     
    </AppContextProvider>

    <Toaster />
  </QueryClientProvider>
  )
}

export default App
