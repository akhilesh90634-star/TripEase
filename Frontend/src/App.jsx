import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landingpage from "./components/LandingPage/Landingpage";
import Login from "./components/Auth/Login";
import CustomerDashboard from "./components/Customer/CustomerDashboard";
import AdminDashboard from "./components/Admin/AdminDashboard";
import AgentDashboard from "./components/Agent/AgentDashboard";
import ProtectedRoutes from "./components/ProtectedRoute/ProtectedRoutes";
import Verifyotp from "./components/Auth/Verifyotp";
import Register from "./components/Auth/Register";
import Mycart from "./components/Mycart/mycart";
import Dashboard from "./components/Agent/AgentLayout/Dashboard";
import Itinerary from "./components/Agent/AgentLayout/Itinerary";
import Profile from "./components/Agent/AgentLayout/Profile";
import Bookings from "./components/Agent/AgentLayout/Bookings";
import Issues from "./components/Agent/AgentLayout/Issues";
import DailyUpdates from "./components/Agent/AgentLayout/DailyUpdates";
import Trip from "./components/Agent/AgentLayout/Trip";
import PackageDetails from "./components/Agent/AgentLayout/PackageDetails";
import TripDetails from "./components/Tripdetails/TripDetails";
import Settings from "./components/Agent/AgentLayout/Settings";

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


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
         <Route path="/tripdetails" element={<TripDetails />} />
         <Route path="/mycart" element={<Mycart/>} />
        <Route path="/verify-otp" element={<Verifyotp />} />
        <Route path="/packagedetails" element={<PackageDetails/>} />

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
            <Route path="Discount" element={<Discounts />} />
            <Route path="trip" element={<AdminTrips />} />
            <Route path="detailsoftrips" element={<AdminTripDetails/>} />
            <Route path="profile" element={<AdminProfile/>} />
            <Route path="issues" element={<AdminIssues/>} />
            <Route path="dailyupdates" element={<AdminDailyUpdates/>} />
            <Route path="bookings" element={<AdminBookings/>} />
             <Route path="packages" element={<Packages/>} />
          </Route>

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
        >
         <Route index element={< Dashboard />} />
         <Route path="schedule" element={< Itinerary />} />
         <Route path="profile" element={< Profile />} />
         <Route path="bookings" element={< Bookings />} />
         <Route path="issues" element={< Issues />} />
         <Route path="dailyupdates" element={< DailyUpdates />} />
         <Route path="packagedetails" element={< PackageDetails />} />
         <Route path="trips" element={< Trip />} />
         <Route path="settings" element={< Settings />} />
          

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
