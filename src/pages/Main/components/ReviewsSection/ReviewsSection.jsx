import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules';
import { useRef } from 'react';
import btn1 from "/src/assets/icons/left_arrow.svg"
import btn2 from "/src/assets/icons/right_arrow.svg"
import s from './ReviewsSection.module.css'
import 'swiper/css'
import 'swiper/css/navigation';
import { useTranslation } from 'react-i18next';

// const reviewsArr = [
//     {
//         review: "НАО «Университет Нархоз» подтверждает, что ТОО «KZSTRATA» в период 24.07.2020 – 08.04.2021 разработало эскизную и рабочую документацию по реконструкции здания университета (Алматы, ул. Жандосова 55). Работы выполнены качественно и в срок, с соблюдением казахстанского законодательства и международных стандартов. Отмечаем высокий профессионализм и рекомендуем компанию как надёжного проектировщика",
//         name: "К.А.Аменова",
//         position: 'Проректор по административной работ'
//     },
//     {
//         review: "НАО «Университет Нархоз» подтверждает, что ТОО «KZSTRATA» в период 24.07.2020 – 08.04.2021 разработало эскизную и рабочую документацию по реконструкции здания университета (Алматы, ул. Жандосова 55). Работы выполнены качественно и в срок, с соблюдением казахстанского законодательства и международных стандартов. Отмечаем высокий профессионализм и рекомендуем компанию как надёжного проектировщика",
//         name: "К.А.Аменова",
//         position: 'Проректор по административной работ'
//     },
//     {
//         review: "НАО «Университет Нархоз» подтверждает, что ТОО «KZSTRATA» в период 24.07.2020 – 08.04.2021 разработало эскизную и рабочую документацию по реконструкции здания университета (Алматы, ул. Жандосова 55). Работы выполнены качественно и в срок, с соблюдением казахстанского законодательства и международных стандартов. Отмечаем высокий профессионализм и рекомендуем компанию как надёжного проектировщика",
//         name: "К.А.Аменова",
//         position: 'Проректор по административной работ'
//     },
//     {
//         review: "НАО «Университет Нархоз» подтверждает, что ТОО «KZSTRATA» в период 24.07.2020 – 08.04.2021 разработало эскизную и рабочую документацию по реконструкции здания университета (Алматы, ул. Жандосова 55). Работы выполнены качественно и в срок, с соблюдением казахстанского законодательства и международных стандартов. Отмечаем высокий профессионализм и рекомендуем компанию как надёжного проектировщика",
//         name: "К.А.Аменова",
//         position: 'Проректор по административной работ'
//     }
// ]

export default function ReviewsSection() {
    const { t } = useTranslation('main')

    const rightButton = useRef(null)
    const leftButton = useRef(null)
    return (
        <div className={s['reviews-container']}>
            <div className={s['blue-layer']}>
                <h2 className={s['reviews__title']}>{t('reviewsSection.title')}</h2>
                <div className={s['reviews__reviews-carousel']}>
                    <Swiper className={s['reviews-swiper']} modules={[Navigation]} 
                    spaceBetween={50} 
                    centeredSlides={true}
                    slidesPerView='auto'
                    onInit={(swiper) => {
                        swiper.params.navigation.prevEl = leftButton.current;
                        swiper.params.navigation.nextEl = rightButton.current;
                        swiper.navigation.init();
                        swiper.navigation.update();
                    }}
                    loop 
                    >
                        {t('reviewsSection.reviews', { returnObjects: true }).map((value) => (
                        <SwiperSlide key={value.id}>
                            <div className={s['review-content__wrapper']}>
                                <p>{value.review}</p>
                                <strong className={s['review-position']}>{value.name}</strong>
                                <p className={s['review-position']}>{value.position}</p>
                            </div>
                        </SwiperSlide>
                        ))}
                        <div ref={leftButton} className={s['left-button']}>
                            <img src={btn1} alt="" />
                        </div>
                        <div ref={rightButton} className={s['right-button']}>
                            <img src={btn2} alt="" />
                        </div>
                    </Swiper>
                </div>
                </div>
        </div>
    )
}