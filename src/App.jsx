import { Route, Routes } from "react-router-dom";
import { Auth } from "./pages/Auth/Auth";
import { NotFound } from "./pages/NotFound/NoteFound";
import { SignupContainer } from "./components/organisms/Auth/SignupContainer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "./components/ui/toaster";
import { CodeContainer } from "@/components/organisms/Auth/CodeContainer";
import { ForgetPassword } from "@/components/organisms/Auth/ForgetPassword";
import { ResetPasswordCard } from "@/components/organisms/Auth/ResetPasswordCard";
import { SigninContainer } from "./components/organisms/Auth/SigninContainer";


const queryClient = new QueryClient();
function App() {
  return (
   <QueryClientProvider client={queryClient}>  

    <Routes>
      <Route path="/auth/signup" element={<Auth> <SignupContainer /> </Auth>} />
      <Route path="/auth/code" element={<Auth><CodeContainer />  </Auth>} />
      <Route path="/auth/signin" element={<Auth> <SigninContainer /> </Auth>} />
      <Route path="/home" element={<Auth> <h1>home</h1> </Auth>} />
      <Route path="/auth/forget" element={<Auth><ForgetPassword /></Auth>} />
      <Route path="/auth/reset/:token" element={<Auth><ResetPasswordCard /></Auth>} />


      <Route path="/*" element={<NotFound />} />
    </Routes>
    <Toaster />
    </QueryClientProvider>
  );
}

export default App;
