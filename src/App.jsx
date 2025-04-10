// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import './App.css';
// import { AppRoutes } from './Routes';
// import { Toaster } from './components/ui/toaster';
// import { AppContextProvider } from './context/AppContextProvider';

import { Route, Routes } from "react-router-dom";
import { Auth } from "./pages/Auth/Auth";
import { SignupCard } from "./components/organisms/Auth/SignupCard";
import { CodeCard } from "./components/organisms/Auth/CodeCard";
import { SigninCard } from "./components/organisms/Auth/SigninCard";

function App() {
  return (
    //   <QueryClientProvider client={QueryClient}>
    //   <AppContextProvider>
    //     <AppRoutes />

    //   </AppContextProvider>

    //   <Toaster />
    // </QueryClientProvider>
    <Routes>
      <Route path="/auth/signup" element={<Auth> <SignupCard /> </Auth>} />
      <Route path="/auth/code" element={<Auth><CodeCard />  </Auth>} />
      <Route path="/auth/signin" element={<Auth> <SigninCard /> </Auth>} />
    </Routes>
  );
}

export default App;
