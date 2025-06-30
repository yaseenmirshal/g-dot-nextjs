import React from 'react'
import Navbar from './Components/Navbar'
import { ChartNoAxesColumn } from 'lucide-react'
import Carostop from './Components/Carosel'
import OurTeam from './Components/Our Team'
import AboutSection from './Components/About'
import ServicesSection from './Components/Services'
import HeroLanding from './Components/Landing'
import Footer from './Components/Footer'
import ProductGrid from './Components/ProductGrid'

function page() {
  return (
    <>
    <Navbar/>
    <HeroLanding/>
    <Carostop/>
    <ProductGrid/>
    <ServicesSection/>
    <OurTeam/>
    <AboutSection/>
   
    <Footer/>
    
    </>
  )
}

export default page
