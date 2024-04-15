import { createContext } from "react";

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  return <AuthContext.Provider>{children}</AuthContext.Provider>;
};
/* function miFuncion (mensaje) {

}

const miFuncion = (mensaje) => {

}
miFuncion ("Hola") */
