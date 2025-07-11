import { useTranslation } from 'react-i18next'
import styles from './Contacts.module.css'
import NavBar from '/src/global-components/NavBar/NavBar'

export default function Contacts() {
    const { t } = useTranslation('contacts')

    return (
        <div className={styles['contacts-container']}>
            <div className={styles.overlay}></div>
            <div className={styles.background}></div>
            <div className={styles['background-decor']}></div>
            <NavBar img="/src/assets/Logo_dark.svg" colorText="#011329"/>
            <div className={styles['contacts-wrap']}>
                <div className={styles['text-container']}>
                <a style={{ cursor: 'pointer' }} href="https://2gis.kz/almaty/firm/9429940000794613?m=76.891932%2C43.198411%2F17.85" target="_blank" rel="noopener noreferrer">
                    <div className={styles['text']}>{t('address')}</div>
                </a>
                <div className={styles['text']}>+7 (778) 106-22-00</div>
                <div className={styles['text']}>info@strata.kz</div>
                </div>
                    
                <div className={styles['icons-container']}>
                    <a style={{ cursor: 'pointer' }} href="https://www.instagram.com/strata.architects?igsh=cXRwOXRlMjAyY3Qy" target="_blank" rel="noopener noreferrer">
                        <img className={styles['icon']} src="/src/assets/icons/Instagram_dark.svg" alt="" />
                    </a>
                    <a style={{ cursor: 'pointer' }} href="https://www.linkedin.com/company/strata-architects-engineers/" target="_blank" rel="noopener noreferrer">
                        <img className={styles['icon']} src="/src/assets/icons/LinkedInDark.svg" alt="" />
                    </a>
                    <a style={{ cursor: 'pointer' }} href="https://wa.me/7781062200" target="_blank" rel="noopener noreferrer">
                        <img className={styles['icon']} src="/src/assets/icons/Whatsapp-dark.svg" alt="" />
                    </a>
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