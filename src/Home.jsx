import React from 'react'
import HeroSection from './components/HeroSection'
import ServiceSection from './components/ServiceSection'
import AboutUsSection from './components/About'
import Testimonials from './components/Testimonial'
import Service from './components/Service'
import Contact from './components/Contact'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutUsSection />
      <ServiceSection />
      <Service />
      <Testimonials />
      <Contact />
    </div>
  )
}

export default Home
