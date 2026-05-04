import { Route, Routes } from "react-router-dom";
import ProtectedRoutes from "../ProtectedRoute/ProtectedRoutes";
import AgentDashboard from "../Agent/AgentDashboard";

import Dashboard from "../Agent/AgentLayout/Dashboard";
import Itinerary from "../Agent/AgentLayout/Itinerary";
import Profile from "../Agent/AgentLayout/Profile";
import ClientDetails from "../Agent/AgentLayout/Client Details";
import Issues from "../Agent/AgentLayout/Issues";
import DailyUpdates from "../Agent/AgentLayout/DailyUpdates";
import PackageDetails from "../Agent/AgentLayout/PackageDetails";

function AgentRoutes() {
  return (
    <Routes>
    <Route
      path="/"
      element={
        <ProtectedRoutes role="agent">
          <AgentDashboard />
        </ProtectedRoutes>
      }
    >
      <Route index element={<Dashboard />} />
      <Route path="schedule" element={<Itinerary />} />
      <Route path="profile" element={<Profile />} />
      <Route path="clients" element={<ClientDetails />} />
      <Route path="issues" element={<Issues />} />
      <Route path="dailyupdates" element={<DailyUpdates />} />
      <Route path="packagedetails" element={<PackageDetails />} />
    </Route>
    </Routes>
  );
}
export default AgentRoutes;