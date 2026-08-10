import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const navigate = useNavigate();

  const [token, setToken] = useState(
    localStorage.getItem("clarifai_token")
  );

  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("clarifai_token")
  );

  function login(accessToken) {
    localStorage.setItem("clarifai_token", accessToken);

    setToken(accessToken);
    setIsAuthenticated(true);

    navigate("/");
  }

  function logout() {
    localStorage.removeItem("clarifai_token");

    setToken(null);
    setIsAuthenticated(false);

    navigate("/");
  }

  return (
    <AuthContext.Provider
      value={{
        token,
        isAuthenticated,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}