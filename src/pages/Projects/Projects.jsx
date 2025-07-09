import NavBar from '/src/global-components/NavBar/NavBar'
import styles from './Projects.module.css'
import ScrollToTop from '/src/ScrollToTop.jsx'
import ProjectFilter from './components/ProjectFilter/ProjectFilter'
import ProjectList from './components/ProjectList/ProjectList'
import { projectArr } from './projectsArr'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import ProjectFooter from './components/ProjectFooter/ProjectFooter'

export default function Projects() {
    const { t } = useTranslation('projects')
    const [active, setActive] = useState(['all'])

    return (
        <>
          <ScrollToTop/>
            <div className={styles['background']}></div>
            <div className={styles['content']}>
                <NavBar img="/src/assets/Logo.svg" colorText="white"/>

                <ProjectFilter onChange={setActive}/>

                <div className={styles['title']}>{t("pageTitle")}</div>
                <ProjectList projectArr={projectArr} filters={active}/>
                <ProjectFooter/>
            </div>
        </>
    )
}