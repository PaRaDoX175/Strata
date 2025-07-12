import useCheckWidth from '../../../../hooks/useCheckWidth'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'
import './FactsSection.css'
import img1 from '/src/assets/images/building_windows.jpg'
import img2 from '/src/assets/images/mega.jpg'
import img3 from '/src/assets/images/hero_section.jpg'
import icon1 from '/src/assets/icons/CalendarIcon.svg'
import icon2 from '/src/assets/icons/PeoplesIcon.svg'
import icon3 from '/src/assets/icons/HandshakeIcon.svg'
import { useTranslation } from 'react-i18next'

export default function FactsSection() {
  const isTablet = useCheckWidth(1024)
  const { t } = useTranslation('main')

  const mobileCards = [
    {
      img: img1,
      icon: '/src/assets/icons/CalendarIcon.svg',
      text: t('factsSection.left')
    },
    {
      img: img2,
      icon: '/src/assets/icons/PeoplesIcon.svg',
      text: t('factsSection.center')
    },
    {
      img: img3,
      icon: '/src/assets/icons/HandshakeIcon.svg',
      text: t('factsSection.right')
    },
  ]

    return (
      <>
      {isTablet ? (
        <div className="facts-section">
          <div className="facts-section__block image-left">
            <img
              src={img1}
              alt=""
              className="facts-section__image"
            />
            <div className="facts-section__text-icon text-left">
              <img
                src={icon1}
                alt="Icon"
                className="facts-section__icon"
              />
              <p className="facts-section__text">
                {t('factsSection.left')}
              </p>
            </div>
          </div>
          <div className="facts-section__block image-center">
            <img src={img2} alt="" className="facts-section__image" />
            <div className="facts-section__text-icon text-center">
              <img
                src={icon2}
                alt="Icon"
                className="facts-section__icon"
              />
              <p className="facts-section__text">
                {t('factsSection.center')}
              </p>
            </div>
          </div>
          <div className="facts-section__block image-right">
            <img
              src={img3}
              alt=""
              className="facts-section__image"
            />
            <div className="facts-section__text-icon text-right">
              <img
                src={icon3}
                alt="Icon"
                className="facts-section__icon"
              />
              <p className="facts-section__text">
                {t('factsSection.right')}
              </p>
            </div>
          </div>
      </div>
      ) : (
        <div className="facts-container_mobile">
                    <Swiper 
                    modules={[FreeMode]}
                    freeMode={true}
                    slidesPerView='auto'
                    spaceBetween={0}
                    >
                      {mobileCards.map((value, index) => (
                        <SwiperSlide key={index} style={{ maxWidth: 600 }}>
                          <div className="facts-card__container_mobile">
                            <img
                              src={value.img}
                              alt="Icon"
                              className="facts-section__image_mobile"
                            />
                            <div className="facts-section__text-icon_mobile">
                              <img
                                src={value.icon}
                                alt="Icon"
                                className="facts-section__icon_mobile"
                              />
                              <p className="facts-section__text_mobile">
                                {value.text}
                              </p>
                            </div>
                          </div>
                        
                        </SwiperSlide>
                      ))}
                    </Swiper>
                </div>
      )}
        
      </>
        
    )
}