import './App.css'
import FactsSection from './pages/Main/components/FactsSection/FactsSection'
import Footer from './global-components/Footer/Footer'
import HeroSection from './pages/Main/components/HeroSection/HeroSection'
import NavBar from './global-components/NavBar/NavBar'
import ProjectsSection from './pages/Main/components/ProjectsSection/ProjectsSection'
import ReviewsSection from './pages/Main/components/ReviewsSection/ReviewsSection'
import ServicesSection from './pages/Main/components/ServicesSection/ServicesSection'
import './i18n'

function App() {

  return (
    <>
      <div className="overlay"></div>
      <div className="background"></div>
      <div className="content">
        <NavBar />
        <HeroSection/>
        <FactsSection/>
        <ProjectsSection/>
        <ServicesSection/>
        <ReviewsSection/>
        <Footer/>
      </div>
    </>
  )
}

export default App
