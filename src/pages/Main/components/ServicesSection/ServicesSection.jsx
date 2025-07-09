import './ServicesSection.css'
import img1 from "/src/assets/icons/concept.avif";
import img2 from "/src/assets/icons/detailed1.avif"
import img3 from "/src/assets/icons/bim1.avif"
import img4 from "/src/assets/icons/drone1.avif"
import img5 from "/src/assets/icons/valueblack.avif"
import img6 from "/src/assets/icons/due1.avif"
import useCheckWidth from '../../../../hooks/useCheckWidth';
import { useTranslation } from 'react-i18next';



export default function ServicesSection({ id }) {
    const isTablet = useCheckWidth(700)
    const { t } = useTranslation('main')

    const cardArr = [ 
        {
            img: img1,
            serviceName: t('servicesSection.conceptualDesign')
        },
        {
            img: img2,
            serviceName: t('servicesSection.workingDesign')
        },
        {
            img: img3,
            serviceName: t('servicesSection.bimDesign')
        },
        {
            img: img4,
            serviceName: t('servicesSection.aerialPhoto')
        },
        {
            img: img5,
            serviceName: t('servicesSection.funcCostAnalysis')
        },
        {
            img: img6,
            serviceName: t('servicesSection.projectAnalysis')
        }
    ]

    return (
        <>
        {isTablet ? (
            <div className="services__container" id={id}>
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
        ) : (
            <div className="services__container_mobile" id={id}>
                <div className="services__container_decor"></div>
                <div className="services__title_mobile">{t('servicesSection.services')}</div>
                <div className="services__serv_mobile">
                {cardArr.map((value, index) => (
                        <div key={index}>
                                <span className="services-card__text">{value.serviceName}</span>
                        </div>
                ))}    
                </div>
        </div>  
        )}
            
        </>
              
    )
}