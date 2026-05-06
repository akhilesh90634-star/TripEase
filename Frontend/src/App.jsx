import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Landingpage from "./components/LandingPage/Landingpage";
import SplashScreen from "./components/LandingPage/SplashScreen";

import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";

import AgentRoutes from "./components/Routes/AgentRoutes";
import CustomerRoutes from "./components/Routes/CustomerRoutes";
import AdminRoutes from "./components/Routes/AdminRoutes";

import Destinations from "./components/Destination/Destinations";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const visited = sessionStorage.getItem("visited");

    if (!visited) {
      const timer = setTimeout(() => {
        sessionStorage.setItem("visited", "true");
        setLoading(false);
      }, 2000);

      return () => clearTimeout(timer);
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <BrowserRouter>
      <Routes>

        {/* PUBLIC */}
        <Route path="/" element={<Landingpage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/destinations" element={<Destinations/>}/>

        {/* ROLE BASED */}
        <Route path="/admin/*" element={<AdminRoutes />} />
        <Route path="/agent/*" element={<AgentRoutes />} />
        <Route path="/customer/*" element={<CustomerRoutes />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;