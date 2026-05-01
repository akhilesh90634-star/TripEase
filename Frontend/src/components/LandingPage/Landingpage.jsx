// import React, { useState, useEffect } from 'react'
// import HeroSection from './HeroSection'
// import PopularPackages from './PopularPackages'
// import Navbar from './Navbar'
// import Reviews from './Reviews'
// import Footer from './Footer'
// import SplashScreen from './SplashScreen'

// function Landingpage() {
//   const [filteredPackages, setFilteredPackages] = useState([]);

//   return (
//     <div style={{ position: "relative" }}>
//       <div
//         style={{
//           position: "absolute",
//           width: "100%",
//           zIndex: 1000,
//           // marginTop:"0px"
//         }}
//       >
//         <Navbar />
//       </div>

//       <div style={{ paddingTop: "90px" }}>
//         <HeroSection setFilteredPackages={setFilteredPackages} />
//         <PopularPackages packages={filteredPackages} />
//         <Reviews />
//         <Footer />
//       </div>
//     </div>
//   );
// }

// export default Landingpage;


import React, { useState } from 'react';
import HeroSection from './HeroSection';
import PopularPackages from './PopularPackages';
import Navbar from './Navbar';
import Reviews from './Reviews';
import Footer from './Footer';

function Landingpage() {
  const [filteredPackages, setFilteredPackages] = useState([]);

  return (
    <div>
      <Navbar />

      <HeroSection setFilteredPackages={setFilteredPackages} />
      <PopularPackages packages={filteredPackages} />
      <Reviews />
      <Footer />
    </div>
  );
}

export default Landingpage;