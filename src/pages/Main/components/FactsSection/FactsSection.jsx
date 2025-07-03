import useCheckWidth from '../../../../hooks/useCheckWidth'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'
import './FactsSection.css'

const mobileCards = [
  {
    img: '/src/assets/images/building_windows.jpg',
    icon: '/src/assets/icons/CalendarIcon.svg',
    text: '75% Лояльных клиентов 120+ проектов Общей площадью 2 млн м²'
  },
  {
    img: '/src/assets/images/mega.jpg',
    icon: '/src/assets/icons/PeoplesIcon.svg',
    text: 'Одна из первых компаний в Казахстане, внедрившая технологии BIM, LEED и BREEAM'
  },
  {
    img: '/src/assets/images/hero_section.jpg',
    icon: '/src/assets/icons/HandshakeIcon.svg',
    text: 'CHAPMAN TAILOR · JTI AECOM · CALLISONRTKL'
  },
]

export default function FactsSection() {
  const isTablet = useCheckWidth(1024)

    return (
      <>
      {isTablet ? (
        <div className="facts-section">
          <div className="facts-section__block image-left">
            <img
              src="/src/assets/images/building_windows.jpg"
              alt=""
              className="facts-section__image"
            />
            <div className="facts-section__text-icon text-left">
              <img
                src="/src/assets/icons/CalendarIcon.svg"
                alt="Icon"
                className="facts-section__icon"
              />
              <p className="facts-section__text">
                75% Лояльных клиентов 120+ проектов Общей площадью 2 млн м²
              </p>
            </div>
          </div>
          <div className="facts-section__block image-center">
            <img src="/src/assets/images/mega.jpg" alt="" className="facts-section__image" />
            <div className="facts-section__text-icon text-center">
              <img
                src="/src/assets/icons/PeoplesIcon.svg"
                alt="Icon"
                className="facts-section__icon"
              />
              <p className="facts-section__text">
                Одна из первых компаний в Казахстане, внедрившая технологии BIM,
                LEED и BREEAM
              </p>
            </div>
          </div>
          <div className="facts-section__block image-right">
            <img
              src="/src/assets/images/hero_section.jpg"
              alt=""
              className="facts-section__image"
            />
            <div className="facts-section__text-icon text-right">
              <img
                src="/src/assets/icons/HandshakeIcon.svg"
                alt="Icon"
                className="facts-section__icon"
              />
              <p className="facts-section__text">
                CHAPMAN TAILOR · JTI AECOM · CALLISONRTKL
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
                        {/* <SwiperSlide style={{ width: 600 }}>
                          <div className="facts-card__container_mobile">
                            <img
                              src="/src/assets/images/mega.jpg"
                              alt="Icon"
                              className="facts-section__image_mobile"
                            />
                            <div className="facts-section__text-icon_mobile">
                              <img
                                src="/src/assets/icons/PeoplesIcon.svg"
                                alt="Icon"
                                className="facts-section__icon_mobile"
                              />
                              <p className="facts-section__text_mobile">
                              Одна из первых компаний в Казахстане, внедрившая технологии BIM,
                              LEED и BREEAM
                              </p>
                            </div>
                          </div>
                        
                        </SwiperSlide>
                        <SwiperSlide style={{ width: 600 }}>
                        <div className="facts-card__container_mobile">
                          <img
                            src="/src/assets/images/hero_section.jpg"
                            alt="Icon"
                            className="facts-section__image_mobile"
                          />
                          <div className="facts-section__text-icon_mobile">
                              <img
                                src="/src/assets/icons/HandshakeIcon.svg"
                                alt="Icon"
                                className="facts-section__icon_mobile"
                              />
                              <p className="facts-section__text_mobile">
                              CHAPMAN TAILOR · JTI AECOM · CALLISONRTKL
                              </p>
                            </div>
                          </div>
                        </SwiperSlide> */}
                    </Swiper>
                </div>
      )}
        
      </>
        
    )
}