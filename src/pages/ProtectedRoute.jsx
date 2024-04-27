import { Navigate, useLocation, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useContext(AuthContext);

  const location = useLocation();

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to={"/login"} state={location} />
  );
}

export default ProtectedRoute;
