import { Route, Routes } from "react-router-dom";
import ProtectedRoutes from "../ProtectedRoute/ProtectedRoutes";
import AdminDashboard from "../Admin/AdminDashboard";

import DashboardAdmin from "../Admin/DashboardAdmin";
import Agentdetails from "../Admin/Agentdetails";
import Users from "../Admin/users";
import AdminTrips from "../Admin/AdminTrips";
import AdminTripDetails from "../Admin/AdminTripDetails";
import AdminProfile from "../Admin/AdminProfile";
import AdminIssues from "../Admin/AdminIssues";
import AdminDailyUpdates from "../Admin/AdminDailyUpdates";
import AdminBookings from "../Admin/AdminBookings";

 function AdminRoutes() {
  return (
    <Routes>
    <Route
      path="/"
      element={
        <ProtectedRoutes role="admin">
          <AdminDashboard />
        </ProtectedRoutes>
      }
    >
      <Route index element={<DashboardAdmin />} />
      <Route path="agents" element={<Agentdetails />} />
      <Route path="users" element={<Users />} />
      <Route path="trip" element={<AdminTrips />} />
      <Route path="detailsoftrips" element={<AdminTripDetails />} />
      <Route path="profile" element={<AdminProfile />} />
      <Route path="issues" element={<AdminIssues />} />
      <Route path="dailyupdates" element={<AdminDailyUpdates />} />
      <Route path="bookings" element={<AdminBookings />} />
    </Route>
    </Routes>
  );
}
export default AdminRoutes;