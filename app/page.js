import React from 'react'
import Navbar from './Components/Navbar'
import { ChartNoAxesColumn } from 'lucide-react'
import Carostop from './Components/Carosel'
import OurTeam from './Components/Our Team'
import AboutSection from './Components/About'
import ServicesSection from './Components/Services'
import HeroLanding from './Components/Landing'
import Footer from './Components/Footer'

function page() {
  return (
    <>
    <Navbar/>
    <HeroLanding/>
    <Carostop/>
    <OurTeam/>
    <AboutSection/>
    <ServicesSection/>
    <Footer/>
    
    </>
  )
}

export default page
