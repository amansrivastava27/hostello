import React from 'react'
import Navbar from './components/navbar'
import HeroSection from './components/herosection'
import VerifiedHostels from './components/verhostels'
import FeedbackSection from './components/feedbacks'
import Footer from './components/footer'

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <VerifiedHostels />
      <FeedbackSection />
      <Footer />

    </div>
  )
}

export default Home
