import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Landingpage from "./components/LandingPage/Landingpage";
import Login from "./components/Auth/Login";
import CustomerDashboard from "./components/Customer/CustomerDashboard";
import AdminDashboard from "./components/Admin/AdminDashboard";
import AgentDashboard from "./components/Agent/AgentDashboard";
import ProtectedRoutes from "./components/ProtectedRoute/ProtectedRoutes";
import Register from "./components/Auth/Register";
import Mycart from "./components/Customer/Mycart/mycart";

import Dashboard from "./components/Agent/AgentLayout/Dashboard";
import Itinerary from "./components/Agent/AgentLayout/Itinerary";
import Profile from "./components/Agent/AgentLayout/Profile";
import Bookings from "./components/Agent/AgentLayout/Bookings";
import Issues from "./components/Agent/AgentLayout/Issues";
import DailyUpdates from "./components/Agent/AgentLayout/DailyUpdates";
import Trip from "./components/Agent/AgentLayout/Trip";
import PackageDetails from "./components/Agent/AgentLayout/PackageDetails";
import Settings from "./components/Agent/AgentLayout/Settings";

import TripDetails from "./components/Customer/Tripdetails/TripDetails";

import DashboardAdmin from "./components/Admin/DashboardAdmin";
import Schedule from "./components/Admin/Schedules";
import Hotels from "./components/Admin/Hotels";
import Discounts from "./components/Admin/Discounts";
import Coupons from "./components/Admin/Coupons";
import AdminTrips from "./components/Admin/AdminTrips";
import AdminTripDetails from "./components/Admin/AdminTripDetails";
import AdminProfile from "./components/Admin/AdminProfile";
import AdminIssues from "./components/Admin/AdminIssues";
import AdminDailyUpdates from "./components/Admin/AdminDailyUpdates";
import AdminBookings from "./components/Admin/AdminBookings";
import Agentdetails from "./components/Admin/Agentdetails";
import Users from "./components/Admin/users";
import Packages from "./components/Admin/Packages";

import CustomerCouponsPage from "./components/Customer/CustomerCouponsPage";
import SplashScreen from "./components/LandingPage/SplashScreen";
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
        <Route path="/verify-otp" element={<Verifyotp />} />
         <Route path="/destinations" element={<Destinations/>} />


        <Route path="/tripdetails" element={<TripDetails />} />
        <Route path="/mycart" element={<Mycart />} />
        <Route path="/packagedetails" element={<PackageDetails />} />

        {/* ADMIN */}
        <Route
          path="/admin"
          element={
            <ProtectedRoutes role="admin">
              <AdminDashboard />
            </ProtectedRoutes>
          }
        >
          <Route index element={<DashboardAdmin />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="hotels" element={<Hotels />} />
          <Route path="agents" element={<Agentdetails />} />
          <Route path="users" element={<Users />} />
          <Route path="coupons" element={<Coupons />} />
          <Route path="discount" element={<Discounts />} />
          <Route path="trip" element={<AdminTrips />} />
          <Route path="detailsoftrips" element={<AdminTripDetails />} />
          <Route path="profile" element={<AdminProfile />} />
          <Route path="issues" element={<AdminIssues />} />
          <Route path="dailyupdates" element={<AdminDailyUpdates />} />
          <Route path="bookings" element={<AdminBookings />} />
          <Route path="packages" element={<Packages />} />
        </Route>

        {/* CUSTOMER */}
        <Route
          path="/customer"
          element={
            <ProtectedRoutes role="user">
              <CustomerDashboard />
            </ProtectedRoutes>
          }
        >
          <Route index element={<h2>Welcome Customer</h2>} />
          <Route path="tripdetails" element={<TripDetails />} />
          <Route path="mycart" element={<Mycart />} />
          <Route path="coupons" element={<CustomerCouponsPage />} />
        </Route>

        {/* AGENT */}
        <Route
          path="/agent"
          element={
            <ProtectedRoutes role="agent">
              <AgentDashboard />
            </ProtectedRoutes>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="schedule" element={<Itinerary />} />
          <Route path="profile" element={<Profile />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="issues" element={<Issues />} />
          <Route path="dailyupdates" element={<DailyUpdates />} />
          <Route path="packagedetails" element={<PackageDetails />} />
          <Route path="trips" element={<Trip />} />
          <Route path="settings" element={<Settings />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;