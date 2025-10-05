import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const ProtectedRoute = ({ children, isProtected }) => {
  const { token } = useContext(AuthContext);

  if (!isProtected) {
    return children;
  }

  // if no token -> redirect to login
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
