import { useTranslation } from 'react-i18next';
import s from './ProjectFilter.module.css'
import React, { useEffect } from 'react';

const CATEGORIES = [
    {id: 'all'},
    {id: 'residential'},
    {id: 'commerce'},
    {id: 'rebuild'},
    {id: 'tourism'},
    {id: 'education'},
    {id: 'industrialFacilities'},
    // {id: 'other'},
];

export default function ProjectFilter({ onChange }) {
    const { t } = useTranslation('projects')
    const [active, setActive] = React.useState(['all'])

    const toggle = (id) => {
        setActive(prev => {
            if (id === 'all') return ['all']

            const hasAll = prev.includes('all')
            let next;


            if (hasAll) {
                next = [id];
            } else {
                next = prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
            }

            const individualCount = CATEGORIES.length - 1;
            const setIndividual = next.filter(item => item !== 'all')

            if (setIndividual.length === individualCount) {
                return ['all']
            }

            if (next.length === 0) {
                return ['all']
            }

            return next
        })

    }

    const displayed = React.useMemo(() => {
        const [all, ...rest] = CATEGORIES
        const activeItems = rest.filter(item => active.includes(item.id))
        const inActiveItems = rest.filter(item => !active.includes(item.id))
        return [all, ...activeItems, ...inActiveItems]
    }, [active])

    useEffect(() => {
        onChange(active)
    }, [active, onChange])

    return (
        <div className={s['category-filter']}>
            <div className={s['title-content']}>
                <h3>{t('projectsFilter.filter')}</h3>
            </div>

            <div className={s['category-filter__content']}>
                <h2>{t('projectsFilter.category')}</h2>
                <div className={s['category-filter__list']}>
                    {displayed.map((item) => (
                        <button key={item.id} onClick={() => toggle(item.id)} className={`${s['category-filter__item']} ${active.includes(item.id) ? s['category-filter__item--active'] : ''}`}>
                            <p>{t(`projectsFilter.categories.${item.id}`)}</p>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}