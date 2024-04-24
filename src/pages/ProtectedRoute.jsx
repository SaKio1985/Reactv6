import { Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useContext(AuthContext);

  const location = useLocation();

  return isAuthenticated ? (
    children
  ) : (
    <Navigate to={"/login"} state={location} />
  );
}

export default ProtectedRoute;