import { createContext, useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import determineUserRole from "../utils/determineUserRole";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [userRole, setUserRole] = useState(null);

  const navigate = useNavigate();

  const login = ({ name, mail }) => {
    setUser({ name, mail });
    const role = determineUserRole({ mail });
    console.log(role);
    setUserRole(role);
    setIsAuthenticated(true);
    window.localStorage.setItem(
      "userData",
      JSON.stringify({ name, mail, userRole })
    );
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    window.localStorage.removeItem("userData");
    navigate("/");
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
      value={{ user, isAuthenticated, login, logout, isLoading, userRole }}
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
