import './ServicesSection.css'
import img1 from "/src/assets/icons/concept.avif";
import img2 from "/src/assets/icons/detailed1.avif"
import img3 from "/src/assets/icons/bim1.avif"
import img4 from "/src/assets/icons/drone1.avif"
import img5 from "/src/assets/icons/valueblack.avif"
import img6 from "/src/assets/icons/due1.avif"


const cardArr = [ 
    {
        img: img1,
        serviceName: "Концептуальное проектирование"
    },
    {
        img: img2,
        serviceName: "Эскизное и рабочее проектирование"
    },
    {
        img: img3,
        serviceName: "BIM проектирование"
    },
    {
        img: img4,
        serviceName: "Аэросъемка и цифровые модели"
    },
    {
        img: img5,
        serviceName: "Функционально-стоимостный анализ"
    },
    {
        img: img6,
        serviceName: "Комплексный анализ проекта"
    }
]

export default function ServicesSection() {
    return (
        <div className="services__container">
            <div className="services__container_decor"></div>
            <div className="services__line">
                <div className="services-cards">
                {cardArr.map((value, index) => (
                    <div key={index} className="services-card__container">
                    <div className="services-card__content">
                        <span className="services-card__text">{value.serviceName}</span>
                        <img className="services-card__img" src={value.img} alt="" />
                    </div>
                    </div>
                ))}
                </div>
            </div>
        </div>        
    )
}