import { Route, Routes } from "react-router-dom";
import { Auth } from "./pages/Auth/Auth";
import { SigninCard } from "./components/organisms/Auth/SigninCard";
import { NotFound } from "./pages/NotFound/NoteFound";
import { SignupContainer } from "./components/organisms/Auth/SignupContainer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "./components/ui/toaster";
import { CodeContainer } from "@/components/organisms/Auth/CodeContainer";


const queryClient = new QueryClient();
function App() {
  return (
   <QueryClientProvider client={queryClient}>  

    <Routes>
      <Route path="/auth/signup" element={<Auth> <SignupContainer /> </Auth>} />
      <Route path="/auth/code" element={<Auth><CodeContainer />  </Auth>} />
      <Route path="/auth/signin" element={<Auth> <SigninCard /> </Auth>} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
    <Toaster />
    </QueryClientProvider>
  );
}

export default App;
