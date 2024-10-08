import React from 'react'
import Banner from './components/Banner/Banner';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import OurMenu from './components/OurMenu/OurMenu';
import Newsletter from './components/Newsletter/Newsletter';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Hero/>
      <OurMenu/>
      <Testimonials/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default App