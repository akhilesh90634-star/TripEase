import React from "react";
import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

function ProtectedRoute({ children, role }) {

  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  try {
    const decoded = jwtDecode(token);

    if (role && decoded.role !== role) {
      if (decoded.role === "admin") {
        return <Navigate to="/admin" replace />;
      }
      if (decoded.role === "customer") {
        return <Navigate to="/customer" replace />;
      }
      if (decoded.role === "agent") {
        return <Navigate to="/agent" replace />;
      }
      return <Navigate to="/login" replace />;
    }
  } 

  catch (err) {
    localStorage.removeItem("token");
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;