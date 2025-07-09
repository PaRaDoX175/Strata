import useCheckWidth from '/src/hooks/useCheckWidth';
import s from './ProjectFooter.module.css'
import img from '/src/assets/Logo.svg'

export default function ProjectFooter() {
    const isMobile = useCheckWidth(700)

    return (
        <>
            {isMobile ? (
                <div className={s['footer__container']}>
                <div className={s["footer__left-wrap"]}>
                    <img src={img} alt="" className={s["footer__logo"]} />
                    <div className={s["footer__info"]}>
                        <div className={s["footer__info_text"]}>+7 (778) 106-22-00</div>
                        <div className={s["footer__info_text"]}>info@strata.kz</div>
                        <a href="https://2gis.kz/almaty/firm/9429940000794613?m=76.891932%2C43.198411%2F17.85" target="_blank" rel="noopener noreferrer">
                            <div className={s["footer__info_text"]}>г. Алматы, 050060, ул. Хусаинова 281 БЦ «Гранит»</div>
                        </a>
                    </div>
                </div>
                <div className={s["footer__rights"]}>
                        <div className={s['rights']}>© 2025 STRATA. ВСЕ ПРАВА ЗАЩИЩЕНЫ.</div>
                        <div className={s["footer__icons"]}>
                            <img src="/src/assets/icons/Insta.svg" alt="" className={s["footer__icon"]} />
                            <img src="/src/assets/icons/Facebook.svg" alt="" className={s["footer__icon"]} />
                            <img src="/src/assets/icons/Whatsapp.svg" alt="" className={s["footer__icon"]} />
                        </div>
                </div>
            </div>
            ) : (
            <div className={s["footer__container"]}>
                <div className={s["footer__left-wrap"]}>
                    <img src={img} alt="" className={s["footer__logo"]} />
                    <div className={s["footer__info"]}>
                        <div className={s["icon_text"]}>
                            <div className={s["footer__info_text"]}>+7 (778) 106-22-00</div>
                            <img src="/src/assets/icons/Insta.svg" alt="" className={s["footer__icon"]} />
                        </div>
                        <div className={s["icon_text"]}>
                            <div className={s["footer__info_text"]}>info@strata.kz</div>
                            <img src="/src/assets/icons/Facebook.svg" alt="" className={s["footer__icon"]} />
                        </div>
                        <div className={s["icon_text"]}>
                            <a href="https://2gis.kz/almaty/firm/9429940000794613?m=76.891932%2C43.198411%2F17.85" target="_blank" rel="noopener noreferrer">
                                <div className={s["footer__info_text"]}>г. Алматы, 050060, ул. Хусаинова 281 БЦ «Гранит»</div>
                            </a>
                            <img src="/src/assets/icons/Whatsapp.svg" alt="" className={s["footer__icon"]} />
                        </div>
                        
                        
                    </div>
                </div>
                <div className={s["footer__rights"]}>
                        <div className={s['rights']}>© 2025 STRATA. ВСЕ ПРАВА ЗАЩИЩЕНЫ.</div>
                </div>
            </div>
            )}
        </>
        
    )
}