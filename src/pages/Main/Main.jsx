import './Main.css'
import FactsSection from './components/FactsSection/FactsSection'
import Footer from '/src/global-components/Footer/Footer'
import HeroSection from './components/HeroSection/HeroSection'
import NavBar from '/src/global-components/NavBar/NavBar'
import ProjectsSection from './components/ProjectsSection/ProjectsSection'
import ReviewsSection from './components/ReviewsSection/ReviewsSection'
import {  useLocation } from 'react-router-dom'
import { useEffect } from 'react';
import logo from "/src/assets/Logo.svg"
import ServicesSection from './components/ServicesSection/ServicesSection'
import '/src/i18n'
import ScrollToTop from '/src/ScrollToTop.jsx'

export default function Main() {
  const location = useLocation()

  useEffect(() => {
    const hash = location.hash
    if (hash) {
      const id = hash.replace("#", "")
      const el = document.getElementById(id)
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" })
        }, 100)
      }
    }
  }, [location])

    return <>
          <ScrollToTop/>
          <div className="background"></div>
          <div className="content">
            <NavBar img={logo} colorText="white"/>
            <HeroSection/>
            <FactsSection/>
            <ProjectsSection/>
            <ServicesSection id='services'/>
            <ReviewsSection/>
            <Footer/>
          </div>
        </>
}