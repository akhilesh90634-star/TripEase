import React from "react";
import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

function ProtectedRoutes({ children, role }) {
  const token = localStorage.getItem("accessToken");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  try {
    const decoded = jwtDecode(token);
    const currentTime = Date.now() / 1000;

    if (decoded.exp < currentTime) {
      localStorage.removeItem("accessToken");
      return <Navigate to="/login" replace />;
    }

    
    if (role && decoded.role !== role) {
      return <Navigate to="/" replace />;
    }

    return children;

  } catch {
    localStorage.removeItem("accessToken");
    return <Navigate to="/login" replace />;
  }
}

export default ProtectedRoutes;