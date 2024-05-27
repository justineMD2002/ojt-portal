import React from "react";
import { useAuth } from "../UserManagement/AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element: Element }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn === true ? <Element /> : <Navigate to="/" replace />;
};

export default ProtectedRoute;
