import { Route, Routes } from "react-router-dom";
import { Auth } from "./pages/Auth/Auth";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/auth/signup" element={<Auth></Auth>} />
    </Routes>
  );
};
