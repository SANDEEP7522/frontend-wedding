import { Route, Routes } from "react-router-dom";
import { Auth } from "@/pages/Auth/Auth";
import { SignupContainer } from "@/components/organisms/Auth/SignupContainer";
import { CodeContainer } from "@/components/organisms/Auth/CodeContainer";
import { SigninContainer } from "@/components/organisms/Auth/SigninContainer";
import { ForgetPassword } from "@/components/organisms/Auth/ForgetPassword";
import { ResetPasswordCard } from "@/components/organisms/Auth/ResetPasswordCard";
import { NotFound } from "./pages/NotFound/NoteFound";
import { ProtectedRoute } from "./components/molecules/ProtectedRoute/ProtectedRoute";
import { Home } from "./pages/Home/Home";
import WeddingCategories from "./pages/WeddingCategories/WeddingCategories";

export const AppRoutes = () => {
  return (
  <Routes>
        <Route path="/auth/signup" element={<Auth> <SignupContainer /> </Auth>} />
        <Route path="/auth/code" element={<Auth><CodeContainer />  </Auth>} />
        <Route path="/auth/signin" element={<Auth> <SigninContainer /> </Auth>} />
        <Route path="/home" element={<ProtectedRoute><Auth><Home /></Auth></ProtectedRoute>} />
        <Route path="/auth/forget" element={<Auth><ForgetPassword /></Auth>} />
        <Route path="/auth/reset/:token" element={<Auth><ResetPasswordCard /></Auth>} />
        <Route path="/auth/wedding-categories" element={<ProtectedRoute><Auth></Auth><WeddingCategories /><Auth /></ProtectedRoute>} />
  
  
        <Route path="/*" element={<NotFound />} />
      </Routes>
  );
};
