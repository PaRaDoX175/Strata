import { useTranslation } from 'react-i18next';
import useCheckWidth from '../../../../hooks/useCheckWidth';
import './ProjectsSection.css'
import img1 from "/src/assets/images/grid-1.jpg";
import img3 from "/src/assets/images/grid-2.jpg"
import img4 from "/src/assets/images/grid-3.jpg"
import img7 from "/src/assets/images/grid-4.jpg"
import img6 from "/src/assets/images/grid-5.jpg"
import img2 from "/src/assets/images/grid-6.jpg"
import img5 from "/src/assets/images/grid-narxoz.jpg"


export default function ProjectsSection() {
    const isTablet = useCheckWidth(750)

    const { t } = useTranslation('main')

    const cardArr = [
        {
            id: 'project1',
            img: img1, 
            city: t(`projectGrid.project1.city`),
            rcComplex: t(`projectGrid.project1.projectName`),
            gridColumn: '1 / 2',
            gridRow: '1 / 7',
            gridColumnMobile: '1 / 2',
            gridRowMobile: '1 / 3'
        },
        {
            id: 'project2',
            img: img2,
            city: t(`projectGrid.project2.city`),
            rcComplex: t(`projectGrid.project2.projectName`),
            gridColumn: '1 / 2',
            gridRow: '7 / 13',
            gridColumnMobile: '2 / 3',
            gridRowMobile: '1 / 3'
        },
        {
            id: 'project3',
            img: img3,
            city: t(`projectGrid.project3.city`),
            rcComplex: t(`projectGrid.project3.projectName`),
            gridColumn: '2 / 4',
            gridRow: '1 / 5',
            gridColumnMobile: '1 / 3',
            gridRowMobile: '3 / 4'
        },
        {
            id: 'project4',
            img: img4,
            city: t(`projectGrid.project4.city`),
            rcComplex: t(`projectGrid.project4.projectName`),
            gridColumn: '2 / 4',
            gridRow: '5 / 9',
            gridColumnMobile: '1 / 2',
            gridRowMobile: '4 / 6'
        },
        {
            id: 'project5',
            img: img5,
            city: t(`projectGrid.project5.city`),
            rcComplex: t(`projectGrid.project5.projectName`),
            gridColumn: '2 / 4',
            gridRow: '9 / 13',
            gridColumnMobile: '2 / 3',
            gridRowMobile: '4 / 6'
        },
        {
            id: 'project6',
            img: img6,
            city: t(`projectGrid.project6.city`),
            rcComplex: t(`projectGrid.project6.projectName`),
            gridColumn: '4 / 5',
            gridRow: '1 / 7',
            gridColumnMobile: '1 / 3',
            gridRowMobile: '6 / 7'
        },
        {
            id: 'project7',
            img: img7,
            city: t(`projectGrid.project7.city`),
            rcComplex: t(`projectGrid.project7.projectName`),
            gridColumn: '4 / 5',
            gridRow: '7 / 13',
            gridColumnMobile: '1 / 3',
            gridRowMobile: '7 / 8'
        }
    ]

    return (
        <>
        {isTablet ? (
            <div className="projects-grid">
            {cardArr.map((value, index) => (
                <div
                key={index}
                className="project-card"
                style={{
                    gridColumn: value.gridColumn,
                    gridRow: value.gridRow
                }}
                >
                    <img src={value.img} alt="" />
            
                    <div className="project-overlay">
                        <div className="overlay-text_city">
                            {value.city}
                        </div>
                        <div className="overlay-text_name">
                           {value.rcComplex}
                        </div>
                    </div>
                </div>
                ))}
            </div>
        ) : (
            <div className="projects-grid_mobile">
            {cardArr.slice(0, 6).map((value, index) => (
                <div
                key={index}
                className="project-card"
                style={{
                    gridColumn: value.gridColumnMobile,
                    gridRow: value.gridRowMobile
                }}
                >
                    <img src={value.img} alt="" />
            
                    <div className="project-overlay">
                        <div className="overlay-text_city">
                            {value.city}
                        </div>
                        <div className="overlay-text_name">
                           {value.rcComplex}
                        </div>
                    </div>
                </div>
                ))}
            </div>
        )}
            
        </>
    )
}