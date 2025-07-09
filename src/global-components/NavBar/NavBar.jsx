import { useState } from 'react'
import './NavBar.css'
import useCheckWidth from '/src/hooks/useCheckWidth';
import { useTranslation } from 'react-i18next'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'


export default function NavBar({ img, colorText }) {
  const navigate = useNavigate()
  const location = useLocation()
  const [languageMenu, setLanguageMenu] = useState(false)
  const isMobile = useCheckWidth(768);
  const {t, i18n} = useTranslation('main')
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const handleClick = () => {
    if (location.pathname === '/') scrollTo('services')
    else {
      navigate('/#services')
    } 
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }


  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang)
  }

  const handleChangeMenu = () => {
      setLanguageMenu(!languageMenu)
  }

  return (
    <>
      <div className="nav-wrapper">
      <div className="nav-bar">
        <Link to={'/'}>
          <img src={img} alt="Logo" className="nav-bar__logo" />
        </Link>

        <div className={`dot-grid ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu}>
          {Array.from({ length: 9 }).map((_, i) => (
            <span key={i} className={`dot dot-${i}`} />
          ))}
        </div>

        <div className={`nav-bar__right-side ${isMenuOpen ? "display-none" : ""}`}>
          <div className="nav-bar__pages-container">
              <NavLink to={"/"} className={({ isActive }) => isActive ? 'activeLink' : ''}>
              
                <div className="nav-bar__page" style={{ color: `${colorText}` }}>{t("NavBar.Main")}</div>
              </NavLink>

              <NavLink to={'/about-us'} className={({ isActive }) => isActive ? 'activeLink' : ''}>
                <div className="nav-bar__page" style={{ color: `${colorText}` }}>{t("NavBar.AboutUs")}</div>
              </NavLink>
            
            <div onClick={handleClick} className="nav-bar__page" style={{ color: `${colorText}` }}>{t("NavBar.Services")}</div>
            <NavLink to={'/projects'} className={({ isActive }) => isActive ? 'activeLink' : ''}>
              <div className="nav-bar__page" style={{ color: `${colorText}` }}>{t("NavBar.Projects")}</div>
            </NavLink>
            <NavLink to={'/contacts'} className={({ isActive }) => isActive ? 'activeLinkContacts' : ''}>
              <div className="nav-bar__page" style={{ color: `${colorText}` }}>{t("NavBar.Contacts")}</div>
            </NavLink>

            <div className="language-container">
              <div className="lang-switch" onClick={handleChangeMenu}>
                <div className="slider" style={{ color: `${colorText}` }}>
                  <div className="slide__text--1">Қазақша</div>
                  <div className="slide__text--2">English</div>
                  <div className="slide__text--3">Русский</div>
                </div>
              </div>

              {languageMenu && (
                <div className="language-menu">
                  <p className="selected" onClick={() => {changeLanguage("ru")
                    handleChangeMenu()
                  }}>Рус</p>
                  <p onClick={() => {changeLanguage("kz")
                    handleChangeMenu()
                  }}>Қаз</p>
                  <p onClick={() => {changeLanguage("en")
                    handleChangeMenu()
                  }}>Eng</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className={`nav-bar__right-side ${isMenuOpen ? "active" : "display-none"}`}>
          <div className={`nav-bar__pages-container`}>

          {isMenuOpen && !isMobile && 
            <div className="lang-wrapper">
            <div className="language-container">
              <div className="lang-switch" onClick={handleChangeMenu}>
                <div className="slider">
                  <div className="slide__text--1">Қазақша</div>
                  <div className="slide__text--2">English</div>
                  <div className="slide__text--3">Русский</div>
                </div>
              </div>              
            </div>
            {languageMenu && (
              <div className="language-menu">
                <p className="selected" onClick={() => {changeLanguage("ru")
                  handleChangeMenu()
                }}>Рус</p>
                <p onClick={() => {changeLanguage("kz")
                  handleChangeMenu()
                }}>Қаз</p>
                <p onClick={() => {changeLanguage("en")
                  handleChangeMenu()
                }}>Eng</p>
              </div>
            )}
          </div>
          }
            
            
            {isMenuOpen && !isMobile && 
            
            <Link to={'/'}>
              <img src="/src/assets/Logo.svg" alt="Logo" className="nav-bar__logo_mobile" />
            </Link>
              
            }

            <NavLink to={"/"} className={({ isActive }) => isActive ? 'activeLink' : ''}>
                <div className="nav-bar__page">{t("NavBar.Main")}</div>
              </NavLink>
              <NavLink to={"/about-us"} className={({ isActive }) => isActive ? 'activeLink' : ''}>
                <div className="nav-bar__page">{t("NavBar.AboutUs")}</div>
              </NavLink>
            <div onClick={handleClick} className="nav-bar__page">{t("NavBar.Services")}</div>
            <NavLink to={'/projects'} className={({ isActive }) => isActive ? 'activeLink' : ''}>
              <div className="nav-bar__page">{t("NavBar.Projects")}</div>
            </NavLink>
            <NavLink to={'/contacts'} className={({ isActive }) => isActive ? 'activeLink' : ''}>
              <div className="nav-bar__page">{t("NavBar.Contacts")}</div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
    </>
      
    )
}