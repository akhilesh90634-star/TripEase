import React from 'react'
import HeroSection from './HeroSection'
import PopularPackages from './PopularPackages'
import Navbar from './Navbar'
import { Box, Button, Chip, Container, Stack, TextField, Typography } from '@mui/material'


function Landingpage() {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <PopularPackages/>
    </div>
  )
}

export default Landingpage