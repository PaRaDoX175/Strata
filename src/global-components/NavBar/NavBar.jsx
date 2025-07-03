import { useState } from 'react'
import './NavBar.css'
import { useTranslation } from 'react-i18next'


export default function NavBar() {
  const [languageMenu, setLanguageMenu] = useState(false)
  const {t, i18n} = useTranslation('main')

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang)
  }

  const handleChangeMenu = () => {
      setLanguageMenu(!languageMenu)
  }

  return (
    <div className="nav-wrapper">
      <div className="nav-bar">
        <img src="/src/assets/Logo.svg" alt="" className="nav-bar__logo" />
        <div className="nav-bar__right-side">
          <div className="nav-bar__pages-container">
            {t("NavBar", {returnObjects: true}).map((value, index) => (
              <div key={index} className="nav-bar__page">{t(value)}</div>
            ))}
            {/* <div className="nav-bar__page">О нас</div>
            <div className="nav-bar__page">Главная</div>
            <div className="nav-bar__page">Услуги</div>
            <div className="nav-bar__page">Проекты</div>
            <div className="nav-bar__page">Контакты</div> */}
            <div className="language-container">
              <div className="lang-switch">
                <div className="content__lang" onClick={handleChangeMenu}>
                    <div className="slider">
                        <div className="slide__text--1">
                            Қазақша
                        </div>
                        <div className="slide__text--2">
                            English
                        </div>
                        <div className="slide__text--3">
                            Русский
                        </div>
                    </div>
              </div>


    </div>


    {languageMenu &&
        <div className="language-menu">
            <p className="selected" onClick={() => changeLanguage('ru')}>Рус</p>
            <p>Қаз</p>
            <p onClick={() => changeLanguage('en')}>Eng</p>
        </div>}
</div>
          </div>
        </div>
      </div>
    </div>    
    )
}