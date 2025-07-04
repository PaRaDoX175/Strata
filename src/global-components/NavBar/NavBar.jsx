import { useState } from 'react'
import './NavBar.css'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'


export default function NavBar({ img, colorText }) {
  const [languageMenu, setLanguageMenu] = useState(false)
  const {t, i18n} = useTranslation('main')

  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        <img src={img} alt="Logo" className="nav-bar__logo" />

        <div className={`dot-grid ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu}>
          {Array.from({ length: 9 }).map((_, i) => (
            <span key={i} className={`dot dot-${i}`} />
          ))}
        </div>

        <div className={`nav-bar__right-side ${isMenuOpen ? "display-none" : ""}`}>
          <div className="nav-bar__pages-container">
            {/* {t("NavBar", { returnObjects: true }).map((value, index) => (
              <Link to={'/'}>
                
              </Link>
              <div key={index} className="nav-bar__page">{t(value)}</div>
            ))} */}

              <Link to={"/"}>
              
                <div className="nav-bar__page" style={{ color: `${colorText}` }}>{t("NavBar.Main")}</div>
              </Link>
                <div className="nav-bar__page" style={{ color: `${colorText}` }}>{t("NavBar.AboutUs")}</div>
            
            <div className="nav-bar__page" style={{ color: `${colorText}` }}>{t("NavBar.Services")}</div>
            <div className="nav-bar__page" style={{ color: `${colorText}` }}>{t("NavBar.Projects")}</div>
            <Link to={'/contacts'}>
              <div className="nav-bar__page" style={{ color: `${colorText}` }}>{t("NavBar.Contacts")}</div>
            </Link>

            <div className="language-container">
              <div className="lang-switch" onClick={handleChangeMenu}>
                <div className="slider" style={{ color: `${colorText}` }}>
                  <div className="slide__text--1">Қазақша</div>
                  <div className="slide__text--2">English</div>
                  <div className="slide__text--3">Русский</div>
                </div>
              </div>

              {languageMenu && (
                <div className="language-menu" style={{ backgroundColor: `${colorText}` }}>
                  <p className="selected" onClick={() => changeLanguage("ru")}>Рус</p>
                  <p onClick={() => changeLanguage("kz")}>Қаз</p>
                  <p onClick={() => changeLanguage("en")}>Eng</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className={`nav-bar__right-side ${isMenuOpen ? "active" : "display-none"}`}>
          <div className="nav-bar__pages-container">
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
                  <p className="selected" onClick={() => changeLanguage("ru")}>Рус</p>
                  <p onClick={() => changeLanguage("kz")}>Қаз</p>
                  <p onClick={() => changeLanguage("en")}>Eng</p>
                </div>
              )}
            </div>
            
            <img src="/src/assets/Logo.svg" alt="Logo" className="nav-bar__logo_mobile" />

            <Link to={"/"}>
                <div className="nav-bar__page">{t("NavBar.Main")}</div>
              </Link>
              <Link to={"/contacts"}>
                <div className="nav-bar__page">{t("NavBar.AboutUs")}</div>
              </Link>
            <div className="nav-bar__page">{t("NavBar.Services")}</div>
            <div className="nav-bar__page">{t("NavBar.Projects")}</div>
            <Link to={'/contacts'}>
              <div className="nav-bar__page">{t("NavBar.Contacts")}</div>
            </Link>

            
          </div>
        </div>
      </div>
    </div>
    </>
      
    )
}