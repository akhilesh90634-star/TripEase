// import React from "react";
// import { Box } from "@mui/material";
// import CustomerSidebar from "./CustomerSidebar";
// import CustomerNavbar from "./CustomerNavbar";
// import { Outlet } from "react-router-dom";

// function CustomerDashboard() {
//   return (
//     <Box sx={{ display: "flex" }}>
      
//       {/* <CustomerSidebar /> */}
//       <CustomerNavbar />
//       <Box sx={{ flex: 1, p: 2 }}>
//         <Outlet />  
//       </Box>

//     </Box>
//   );
// }

// export default CustomerDashboard;

import React from "react";
import { Box } from "@mui/material";
import CustomerNavbar from "./CustomerNavbar";
import { Outlet } from "react-router-dom";

function CustomerDashboard() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      
      {/* TOP NAVBAR */}
      <CustomerNavbar />

      {/* PAGE CONTENT */}
      <Box sx={{ flex: 1, p: 2 }}>
        <Outlet />
      </Box>

    </Box>
  );
}

export default CustomerDashboard;