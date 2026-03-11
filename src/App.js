import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import Navbar from './Component/NavBar'
import HeroSection from './Component/HeroSection'
import TransparencySection from './Component/TransparencySection'
import VolunteerSection from './Component/VolunteerSection'
import ContactSection from './Component/ContactSection'
import GalleryCarousel from './Component/GalleryCarousel'
import Footer from './Component/Footer'
import AboutUs from './Component/AboutUs'
import AboutPage from './AboutUsPage'
import PlantationDrives from './PlantationDrives'
import PlantationGallery from './GalleryPage'
import ContactVolunteer from './ContactPage'
import TeamPage from './TeamPage'


const Home = () => <div>
  <HeroSection/>
  <AboutUs />
  <TransparencySection/>
  <VolunteerSection />
  <ContactSection/>
  <GalleryCarousel/>
</div>

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/plantation-drives" element={<PlantationDrives />} />
        <Route path="/gallery" element={<PlantationGallery/>} />
        <Route path="/contact" element={<ContactVolunteer />} />
        <Route path="/team" element={<TeamPage />} />


      </Routes>
  <Footer/>

    </Router>
  )
}

export default App