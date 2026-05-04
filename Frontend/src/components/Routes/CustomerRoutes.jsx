import { Route, Routes } from "react-router-dom";
import ProtectedRoutes from "../ProtectedRoute/ProtectedRoutes";
import CustomerDashboard from "../Customer/CustomerDashboard";

import TripDetails from "../Customer/Tripdetails/TripDetails";
import Mycart from "../Customer/Mycart/mycart";
import CustomerCouponsPage from "../Customer/CustomerCouponsPage";

function CustomerRoutes() {
  return (
    <Routes>

    
    <Route
      path="/"
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
    </Routes>
  );
}
export default CustomerRoutes;