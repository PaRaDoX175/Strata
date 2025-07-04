import useCheckWidth from '/src/hooks/useCheckWidth';
import './Footer.css'
import img from '/src/assets/Logo.svg'

export default function Footer() {
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
                        <div className="footer__info_text">г. Алматы, 050060, ул. Хусаинова 281 БЦ «Гранит»</div>
                    </div>
                </div>
                <div className="footer__rights">
                        <div className='rights'>© 2025 STRATA. ВСЕ ПРАВА ЗАЩИЩЕНЫ.</div>
                        <div className="footer__icons">
                            <img src="/src/assets/icons/Insta.svg" alt="" className="footer__icon" />
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
                            <div className="footer__info_text">г. Алматы, 050060, ул. Хусаинова 281 БЦ «Гранит»</div>
                            <img src="/src/assets/icons/Whatsapp.svg" alt="" className="footer__icon" />
                        </div>
                        
                        
                    </div>
                </div>
                <div className="footer__rights">
                        <div className='rights'>© 2025 STRATA. ВСЕ ПРАВА ЗАЩИЩЕНЫ.</div>
                </div>
            </div>
            )}
        </>
        
    )
}