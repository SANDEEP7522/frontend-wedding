import { useEffect, useState } from "react";
import { createContext } from "react";

// Create a new context for authentication
const AuthContext = createContext();

// AuthContextProvider will wrap your app and provide auth state
export const AuthContextProvider = ({ children }) => {

  // Initialize auth state with null user and token
  const [auth, setAuth] = useState({
    user: null,
    token: null
  });

  // When the component mounts, check localStorage for existing user and token
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));  // Get user object from localStorage
    const token = localStorage.getItem("token");             // Get token from localStorage

    // If both user and token exist, update the auth state
    if (user && token) {
      setAuth({
        user,
        token
      });
    }
  }, []);

  // Provide the auth state and updater function to all child components
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
