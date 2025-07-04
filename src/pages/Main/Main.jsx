import './Main.css'
import FactsSection from './components/FactsSection/FactsSection'
import Footer from '/src/global-components/Footer/Footer'
import HeroSection from './components/HeroSection/HeroSection'
import NavBar from '/src/global-components/NavBar/NavBar'
import ProjectsSection from './components/ProjectsSection/ProjectsSection'
import ReviewsSection from './components/ReviewsSection/ReviewsSection'
import ServicesSection from './components/ServicesSection/ServicesSection'
import '/src/i18n'

export default function Main() {
    return <>
          <div className="overlay"></div>
          <div className="background"></div>
          <div className="content">
            <NavBar img="/src/assets/Logo.svg" colorText="white"/>
            <HeroSection/>
            <FactsSection/>
            <ProjectsSection/>
            <ServicesSection/>
            <ReviewsSection/>
            <Footer/>
          </div>
        </>
}