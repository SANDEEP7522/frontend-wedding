// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import './App.css';
// import { AppRoutes } from './Routes';
// import { Toaster } from './components/ui/toaster';
// import { AppContextProvider } from './context/AppContextProvider';

import { Route, Routes } from "react-router-dom";
import { Auth } from "./pages/Auth/Auth";

function App() {
  return (
    //   <QueryClientProvider client={QueryClient}>
    //   <AppContextProvider>
    //     <AppRoutes />

    //   </AppContextProvider>

    //   <Toaster />
    // </QueryClientProvider>
    <Routes>
      <Route path="/auth" element={<Auth />} />
    </Routes>
  );
}

export default App;
