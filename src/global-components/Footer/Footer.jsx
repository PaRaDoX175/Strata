import useCheckWidth from '/src/hooks/useCheckWidth';
import './Footer.css'
import img from '/src/assets/Logo.svg'
import insta from "/src/assets/icons/Insta.svg"
import li from "/src/assets/icons/LinkedIn.svg"
import whatsapp from "/src/assets/icons/Whatsapp.svg"
import { useTranslation } from 'react-i18next';

export default function Footer() {
    const { t } = useTranslation('main')

    const isMobile = useCheckWidth(700)

    return (
        <>
            {isMobile ? (
                <div className="footer__container">
                <div className="footer__left-wrap">
                    <img src={img} alt="" className="footer__logo" />
                    <div className="footer__info">
                        <div className="footer__info_text">+7 (778) 106-22-00</div>
                        <div className="footer__info_text">info@strata.kz</div>
                        <a style={{ cursor: 'pointer' }} href="https://2gis.kz/almaty/firm/9429940000794613?m=76.891932%2C43.198411%2F17.85" target="_blank" rel="noopener noreferrer">

                            <div className="footer__info_text">{t('footer')}</div>
                        </a>
                    </div>
                </div>
                <div className="footer__rights">
                        <div className='rights'>{t('rights')}</div>
                        <div className="footer__icons">
                            <a  className='footer__info_a' href="https://www.instagram.com/strata.architects?igsh=cXRwOXRlMjAyY3Qy" target="_blank" rel="noopener noreferrer">
                                <img src={insta} alt="" className="footer__icon" />
                            </a>
                            <a className='footer__info_a' href="https://www.linkedin.com/company/strata-architects-engineers/" target="_blank" rel="noopener noreferrer">
                                <img src={li} alt="" className="footer__icon" />
                            </a>
                            <a className='footer__info_a' href="https://wa.me/7781062200" target="_blank" rel="noopener noreferrer">
                                <img src={whatsapp} alt="" className="footer__icon" />
                            </a>
                        </div>
                </div>
            </div>
            ) : (
            <div className="footer__container">
                <div className="footer__left-wrap">
                    <img src={img} alt="" className="footer__logo" />
                    <div className="footer__info">
                        <div className="icon_text">
                            <div className="footer__info_text">+7 (778) 106-22-00</div>
                            <a style={{ cursor: 'pointer' }} href="https://www.instagram.com/strata.architects?igsh=cXRwOXRlMjAyY3Qy" target="_blank" rel="noopener noreferrer">
                                <img src={insta} alt="" className="footer__icon" />
                            </a>
                        </div>
                        <div className="icon_text">
                            <div className="footer__info_text">info@strata.kz</div>
                            
                            <a style={{ cursor: 'pointer' }} href="https://www.linkedin.com/company/strata-architects-engineers/" target="_blank" rel="noopener noreferrer">
                                <img src={li} alt="" className="footer__icon" />
                            </a>
                        </div>
                        <div className="icon_text">
                        <a style={{ cursor: 'pointer' }} href="https://2gis.kz/almaty/firm/9429940000794613?m=76.891932%2C43.198411%2F17.85" target="_blank" rel="noopener noreferrer">

                            <div className="footer__info_text">{t('footer')}</div>
                        </a>
                        <a style={{ cursor: 'pointer' }} href="https://wa.me/7781062200" target="_blank" rel="noopener noreferrer">
                                <img src={whatsapp} alt="" className="footer__icon" />
                            </a>
                        </div>
                        
                        
                    </div>
                </div>
                <div className="footer__rights">
                        <div className='rights'>{t('rights')}</div>
                </div>
            </div>
            )}
        </>
        
    )
}