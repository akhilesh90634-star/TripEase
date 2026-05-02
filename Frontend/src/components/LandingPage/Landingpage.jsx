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