import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules';
import { useRef } from 'react';
import './ReviewsSection.css'
import 'swiper/css'
import 'swiper/css/navigation';

const reviewsArr = [
    {
        review: "НАО «Университет Нархоз» подтверждает, что ТОО «KZSTRATA» в период 24.07.2020 – 08.04.2021 разработало эскизную и рабочую документацию по реконструкции здания университета (Алматы, ул. Жандосова 55). Работы выполнены качественно и в срок, с соблюдением казахстанского законодательства и международных стандартов. Отмечаем высокий профессионализм и рекомендуем компанию как надёжного проектировщика",
        name: "К.А.Аменова",
        position: 'Проректор по административной работ'
    },
    {
        review: "НАО «Университет Нархоз» подтверждает, что ТОО «KZSTRATA» в период 24.07.2020 – 08.04.2021 разработало эскизную и рабочую документацию по реконструкции здания университета (Алматы, ул. Жандосова 55). Работы выполнены качественно и в срок, с соблюдением казахстанского законодательства и международных стандартов. Отмечаем высокий профессионализм и рекомендуем компанию как надёжного проектировщика",
        name: "К.А.Аменова",
        position: 'Проректор по административной работ'
    },
    {
        review: "НАО «Университет Нархоз» подтверждает, что ТОО «KZSTRATA» в период 24.07.2020 – 08.04.2021 разработало эскизную и рабочую документацию по реконструкции здания университета (Алматы, ул. Жандосова 55). Работы выполнены качественно и в срок, с соблюдением казахстанского законодательства и международных стандартов. Отмечаем высокий профессионализм и рекомендуем компанию как надёжного проектировщика",
        name: "К.А.Аменова",
        position: 'Проректор по административной работ'
    },
    {
        review: "НАО «Университет Нархоз» подтверждает, что ТОО «KZSTRATA» в период 24.07.2020 – 08.04.2021 разработало эскизную и рабочую документацию по реконструкции здания университета (Алматы, ул. Жандосова 55). Работы выполнены качественно и в срок, с соблюдением казахстанского законодательства и международных стандартов. Отмечаем высокий профессионализм и рекомендуем компанию как надёжного проектировщика",
        name: "К.А.Аменова",
        position: 'Проректор по административной работ'
    }
]

export default function ReviewsSection() {
    const rightButton = useRef(null)
    const leftButton = useRef(null)
    return (
        <div className="reviews-container">
            <div className="blue-layer">
                <h2 className="reviews__title">Что говорят наши клиенты</h2>
                <div className="reviews__reviews-carousel">
                    <Swiper modules={[Navigation]} 
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
                        {reviewsArr.map((value, index) => (
                        <SwiperSlide key={index}>
                            <div>
                                <p>{value.review}</p>
                                <strong className='review-position'>{value.name}</strong>
                                <p className='review-position'>{value.position}</p>
                            </div>
                        </SwiperSlide>
                        ))}
                        <div ref={leftButton} className='left-button'>
                            <img src="/src/assets/icons/left_arrow.svg" alt="" />
                        </div>
                        <div ref={rightButton} className='right-button'>
                            <img src="/src/assets/icons/right_arrow.svg" alt="" />
                        </div>
                    </Swiper>
                </div>
                </div>
        </div>
    )
}