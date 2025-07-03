import { useTranslation } from 'react-i18next'
import './HeroSection.css'
import useCheckWidth from '../../../../hooks/useCheckWidth'

export default function HeroSection() {
  const isMobile =  useCheckWidth(440)

  const { t } = useTranslation('main')

    return (
      <>
      {isMobile ? (
        <div className="hero-section">
          <div className="hero-section__image-container">
            <img
              src="/src/assets/images/hero_section.jpg"
              alt="Image"
              className="hero-section__image"
            />
            <div className="hero-section__overlay-text">
              {t("HeroSection.MainText", { returnObjects: true }).map((value, index) => (
                <h1 key={index}>{t(value)}</h1>
              ))}
              <p>{t("HeroSection.Text")}</p>
            </div>
          </div>
        </div>
            ) :
          (
            <div className="hero-section__mobile">
              <div className="hero-section__image-container_mobile">
            <img
              src="/src/assets/images/grid-1.jpg"
              alt="Image"
              className="hero-section__image_mobile"
            />
            <div className="hero-section__overlay-text_mobile">
              <p>{t("HeroSectionMobile.Text")}</p>
              <h1>{t("HeroSectionMobile.MainText")}</h1>
            </div>
          </div>
            </div>
          )}
    </>
      
      
      
    )
}