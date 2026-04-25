import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landingpage from "./components/LandingPage/Landingpage";
import Login from "./components/Auth/Login";
import CustomerDashboard from "./components/Customer/CustomerDashboard";
import AdminDashboard from "./components/Admin/AdminDashboard";
import AgentDashboard from "./components/Agent/AgentDashboard";
import ProtectedRoutes from "./components/ProtectedRoute/ProtectedRoutes";
import Verifyotp from "./components/Auth/Verifyotp";
import Register from "./components/Auth/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verify-otp" element={<Verifyotp />} />
         
        {/* ADMIN */}
        <Route
          path="/admin"
          element={
            <ProtectedRoutes role="admin">
              <AdminDashboard />
            </ProtectedRoutes>
          }
        />
      {/* Akhilesh is working on development on Admindashboard after deveopment Akhilesh will delete below route*/}
        <Route path="/ad" element={< AdminDashboard />} />

        {/* CUSTOMER */}
        <Route
          path="/customer"
          element={
            <ProtectedRoutes role="user">
              <CustomerDashboard />
            </ProtectedRoutes>
          }
        />

        {/* AGENT */}
        <Route
          path="/agent"
          element={
            <ProtectedRoutes role="agent">
              <AgentDashboard />
            </ProtectedRoutes>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
