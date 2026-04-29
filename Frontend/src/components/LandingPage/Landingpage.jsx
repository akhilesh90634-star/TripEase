// import React from 'react'
// import HeroSection from './HeroSection'
// import PopularPackages from './PopularPackages'
// import Navbar from './Navbar'
// import { Box, Button, Chip, Container, Stack, TextField, Typography } from '@mui/material'

// function Landingpage() {
//   return (
//     <div style={{ position: "relative" }}>
//       <div
//         style={{
//           position: "fixed",
//         }}
//       >
//         <Navbar />
//       </div>
      
//       {/* Main Content with padding to avoid navbar overlap */}
//       <div style={{ paddingTop: "90px" }}>
//         <HeroSection/>
//         <PopularPackages/>
//       </div>
//     </div>
//   )
// }

// export default Landingpage


import React, { useState } from 'react'
import HeroSection from './HeroSection'
import PopularPackages from './PopularPackages'
import Navbar from './Navbar'
import { Box, Button, Chip, Container, Stack, TextField, Typography } from '@mui/material'
import Reviews from './Reviews'
import Footer from './Footer'

function Landingpage() {

  const [filteredPackages, setFilteredPackages] = useState([]);

  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          position: "fixed",
          width: "100%",
          zIndex: 1000
        }}
      >
        <Navbar />
      </div>
      
      {/* Main Content with padding to avoid navbar overlap */}
      <div style={{ paddingTop: "90px" }}>
        
        <HeroSection setFilteredPackages={setFilteredPackages} />
        <PopularPackages packages={filteredPackages} />
        <Reviews/>
        <Footer/>

      </div>
    </div>
  )
}

export default Landingpage