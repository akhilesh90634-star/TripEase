import React from 'react'
import HeroSection from './HeroSection'
import PopularPackages from './PopularPackages'
import AppBar from './AppBar'

function Landingpage() {
  return (
    <div>
        <AppBar/>
        <HeroSection/>
        <PopularPackages/>
    </div>
  )
}

export default Landingpage