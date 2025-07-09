import useCheckWidth from '/src/hooks/useCheckWidth';
import './Footer.css'
import img from '/src/assets/Logo.svg'
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
                        <a className='footer__info_a' href="https://2gis.kz/almaty/firm/9429940000794613?m=76.891932%2C43.198411%2F17.85" target="_blank" rel="noopener noreferrer">

                            <div className="footer__info_text">{t('footer')}</div>
                        </a>
                    </div>
                </div>
                <div className="footer__rights">
                        <div className='rights'>{t('rights')}</div>
                        <div className="footer__icons">
                            <a href="#">
                                <img src="/src/assets/icons/Insta.svg" alt="" className="footer__icon" />
                            </a>
                            <img src="/src/assets/icons/Facebook.svg" alt="" className="footer__icon" />
                            <img src="/src/assets/icons/Whatsapp.svg" alt="" className="footer__icon" />
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
                            <img src="/src/assets/icons/Insta.svg" alt="" className="footer__icon" />
                        </div>
                        <div className="icon_text">
                            <div className="footer__info_text">info@strata.kz</div>
                            <img src="/src/assets/icons/Facebook.svg" alt="" className="footer__icon" />
                        </div>
                        <div className="icon_text">
                        <a href="https://2gis.kz/almaty/firm/9429940000794613?m=76.891932%2C43.198411%2F17.85" target="_blank" rel="noopener noreferrer">

                            <div className="footer__info_text">{t('footer')}</div>
                        </a>
                            <img src="/src/assets/icons/Whatsapp.svg" alt="" className="footer__icon" />
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