import { createContext, useEffect } from "react";
import { useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const login = ({ name, mail }) => {
    setUser({ name, mail });
    setIsAuthenticated(true);
    window.localStorage.setItem("userData", JSON.stringify({ name, mail }));
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    window.localStorage.removeItem("userData");
  };

  useEffect(() => {
    const storedUser = window.localStorage.getItem("userData");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, login, logout, isLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
}

/* function miFuncion (mensaje) {

}

const miFuncion = (mensaje) => {

}
miFuncion ("Hola") */
