import { useMemo } from 'react'
import ProjectComponent from '../ProjectComponent/ProjectComponent'
import s from './ProjectList.module.css'

export default function ProjectList({ projectArr, filters }) {
    const filteredProject = useMemo(() => {
        if (filters.includes('all')) return projectArr
        return projectArr.filter(item => filters.includes(item.project.category))
    }, [filters, projectArr])

    return (
        <div className={s['wrap']}>
            {filteredProject.map(value => (
                <div key={value.id} className={s['project-wrap']}>
                    <ProjectComponent project={value}/>
                </div>
            ))}
        </div>
    )
}