import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import s from './ProjectComponent.module.css';
import { useTranslation } from 'react-i18next';
import useCheckWidth from '/src/hooks/useCheckWidth';

export default function ProjectComponent({ project }) {
  const { t } = useTranslation('projects')
  const [isVisible, setIsVisible] = useState(false)
  const isMobile = useCheckWidth(500)

  const handleClick = () => {
    setIsVisible(prev => !prev)
  }

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className={s['carousel-container']}>
      {(isVisible || isMobile) && (
        <div className={s['text-block']}>
          <div className={s['text-wrap']}>
            {(isVisible && !isMobile) && (
              <span className={s['close-btn']} onClick={handleClick}>Закрыть</span>
            )}
              <div className={s['text-row']}>
              <span className={s['text-label']}>{t("cardTitles.projects")}</span>
              <span className={s['text-value']}>{t(`projects.${project.id}.projectName`)}</span>
            </div>
            <div className={s['text-row']}>
              <span className={s['text-label']}>{t("cardTitles.place")}</span>
              <span className={s['text-value']}>{t(`projects.${project.id}.place`)}</span>
            </div>
            <div className={s['text-row']}>
              <span className={s['text-label']}>{t("cardTitles.customer")}</span>
              <span className={s['text-value']}>{t(`projects.${project.id}.customer`)}</span>
            </div>
            <div className={s['text-row']}>
              <span className={s['text-label']}>{t("cardTitles.square")}</span>
              <span className={s['text-value']}>{t(`projects.${project.id}.square`)}</span>
            </div>
            <div className={s['text-row']}>
              <span className={s['text-label']}>{t("cardTitles.period")}</span>
              <span className={s['text-value']}>{t(`projects.${project.id}.period`)}</span>
            </div>
            <div className={s['text-row']}>
              <span className={s['text-label']}>{t("cardTitles.features")}</span>
              <span className={s['text-value']}>{t(`projects.${project.id}.features`)}</span>
            </div>
        </div>
        
    </div>
      )}
        
        {!isVisible && (
          <div className={s['btn-more']} onClick={handleClick}>Подробнее</div>
        )}
      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={1}
        spaceBetween={5}
        loop={true}
        
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        {project.project.images.map((src, i) => (
          <SwiperSlide key={i}>
            <div className={s['wrap']}>
              <img src={src} alt={`Slide ${i}`} className={s['slide-img']}/>
            </div>
          </SwiperSlide>
        ))}

        <div ref={prevRef} className={`swiper-button-prev`} >
        </div>
        <div ref={nextRef} className={` swiper-button-next`}>
        </div>
      </Swiper>
    </div>
  );
}
