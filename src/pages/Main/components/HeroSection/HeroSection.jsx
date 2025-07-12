import { useTranslation } from 'react-i18next'
import './HeroSection.css'
import img1 from '/src/assets/images/hero_section.jpg'
import img2 from "/src/assets/images/grid-1.jpg"
import useCheckWidth from '../../../../hooks/useCheckWidth'

export default function HeroSection() {
  const isMobile =  useCheckWidth(441)

  const { t } = useTranslation('main')

    return (
      <>
      {isMobile ? (
        <div className="hero-section">
          <div className="hero-section__image-container">
            <img
              src={img1}
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
            <div style={{ paddingTop: 80 }} className="hero-section__mobile">
              <div className="hero-section__image-container_mobile">
            <img
              src={img2}
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