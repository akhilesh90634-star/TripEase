// import React from "react";
// import { Navigate } from "react-router-dom";
// import { jwtDecode } from "jwt-decode";

// function ProtectedRoutes({ children, role }) {

//   const token = localStorage.getItem("accessToken");

//   if (!token) {
//     return <Navigate to="/login" replace />;
//   }

//   try {
//     const decoded = jwtDecode(token);

//     // role check
//     if (role && decoded.role !== role) {

//       if (decoded.role === "admin") {
//         return <Navigate to="/admin" replace />;
//       }

//       if (decoded.role === "agent") {
//         return <Navigate to="/agent" replace />;
//       }

//       if (decoded.role === "user") {
//         return <Navigate to="/customer" replace />;
//       }

//       return <Navigate to="/login" replace />;
//     }

//   } catch (err) {
//     localStorage.removeItem("accessToken");
//     return <Navigate to="/login" replace />;
//   }

//   return children;
// }

// export default ProtectedRoutes;

import React from "react";
import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

function ProtectedRoutes({ children, role }) {

  const token = localStorage.getItem("accessToken"); // ✅ KEEP THIS

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  try {
    const decoded = jwtDecode(token);

    // role check
    if (role && decoded.role !== role) {

      if (decoded.role === "admin") {
        return <Navigate to="/admin" replace />;
      }

      if (decoded.role === "agent") {
        return <Navigate to="/agent" replace />;
      }

      if (decoded.role === "user") {
        return <Navigate to="/customer" replace />;
      }

      return <Navigate to="/login" replace />;
    }

  } catch (err) {
    localStorage.removeItem("accessToken"); // ✅ FIXED
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoutes;