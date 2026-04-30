import React, { useState, useEffect } from 'react'
import HeroSection from './HeroSection'
import PopularPackages from './PopularPackages'
import Navbar from './Navbar'
import Reviews from './Reviews'
import Footer from './Footer'
import SplashScreen from './SplashScreen'

function Landingpage() {
  const [filteredPackages, setFilteredPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5500); 

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          position: "absolute",
          width: "100%",
          zIndex: 1000
        }}
      >
        <Navbar />
      </div>

      <div style={{ paddingTop: "90px" }}>
        <HeroSection setFilteredPackages={setFilteredPackages} />
        <PopularPackages packages={filteredPackages} />
        <Reviews />
        <Footer />
      </div>
    </div>
  );
}

export default Landingpage;