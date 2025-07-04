import styles from './Contacts.module.css'
import NavBar from '/src/global-components/NavBar/NavBar'

export default function Contacts() {
    return (
        <div className={styles['contacts-container']}>
            <div className={styles.overlay}></div>
            <div className={styles.background}></div>
            <div className={styles['background-decor']}></div>
            <NavBar img="/src/assets/Logo_dark.svg" colorText="#011329"/>
            <div className={styles['contacts-wrap']}>
                <div className={styles['text-container']}>
                <div className={styles['text']}>г. Алматы, ул. Хусаинова, 281, БЦ “Гранит”</div>
                <div className={styles['text']}>+7 (778) 106-22-00</div>
                <div className={styles['text']}>info@strata.kz</div>
                </div>
                    
                <div className={styles['icons-container']}>
                    <img className={styles['icon']} src="/src/assets/icons/Instagram_dark.svg" alt="" />
                    <img className={styles['icon']} src="/src/assets/icons/Facebook_dark.svg" alt="" />
                    <img className={styles['icon']} src="/src/assets/icons/Whatsapp-dark.svg" alt="" />
                </div>
            </div>
            <div className={styles['footer']}>
                <div className={styles['footer__wrap']}>
                    <img className={styles['footer__img']} src="/src/assets/Logo.svg" alt="" />
                    <div className={styles['footer__text']}>© 2025. All Rights Reserved.</div>
                </div>
            </div>
        </div>
    )       
}