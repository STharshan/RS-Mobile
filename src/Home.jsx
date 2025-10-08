import React from 'react'
import HeroSection from './components/HeroSection'
import ServiceSection from './components/ServiceSection'
import AboutUsSection from './components/About'
import Testimonials from './components/Testimonial'
import Service from './components/Service'
import Contact from './components/Contact'
import FindUs from './components/Findus'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutUsSection />
      <ServiceSection />
      <Service />
      <Testimonials />
      <Contact />
      <FindUs />
    </div>
  )
}

export default Home
