import useCheckWidth from '../../../../hooks/useCheckWidth';
import './ProjectsSection.css'
import img1 from "/src/assets/images/grid-1.jpg";
import img3 from "/src/assets/images/grid-2.jpg"
import img4 from "/src/assets/images/grid-3.jpg"
import img7 from "/src/assets/images/grid-4.jpg"
import img6 from "/src/assets/images/grid-5.jpg"
import img2 from "/src/assets/images/grid-6.jpg"
import img5 from "/src/assets/images/grid-narxoz.jpg"


const cardArr = [
    {
        img: img1, 
        city: 'Алматы',
        rcComplex: 'ЖК Braun',
        gridColumn: '1 / 2',
        gridRow: '1 / 7',
        gridColumnMobile: '1 / 2',
        gridRowMobile: '1 / 3'
    },
    {
        img: img2,
        city: 'Астана',
        rcComplex: 'AIFC',
        gridColumn: '1 / 2',
        gridRow: '7 / 13',
        gridColumnMobile: '2 / 3',
        gridRowMobile: '1 / 3'
    },
    {
        img: img3,
        city: 'Алматы',
        rcComplex: 'ЖК Terra',
        gridColumn: '2 / 4',
        gridRow: '1 / 5',
        gridColumnMobile: '1 / 3',
        gridRowMobile: '3 / 4'
    },
    {
        img: img4,
        city: 'Алматы',
        rcComplex: 'Офисный кампус класса A',
        gridColumn: '2 / 4',
        gridRow: '5 / 9',
        gridColumnMobile: '1 / 2',
        gridRowMobile: '4 / 6'
    },
    {
        img: img5,
        city: 'Алматы',
        rcComplex: 'Narxoz',
        gridColumn: '2 / 4',
        gridRow: '9 / 13',
        gridColumnMobile: '2 / 3',
        gridRowMobile: '4 / 6'
    },
    {
        img: img6,
        city: 'Алматы',
        rcComplex: 'ЖК Terra',
        gridColumn: '4 / 5',
        gridRow: '1 / 7',
        gridColumnMobile: '1 / 3',
        gridRowMobile: '6 / 7'
    },
    {
        img: img7,
        city: 'Астана',
        rcComplex: 'P-Project',
        gridColumn: '4 / 5',
        gridRow: '7 / 13',
        gridColumnMobile: '1 / 3',
        gridRowMobile: '7 / 8'
    }
]

export default function ProjectsSection() {
    const isTablet = useCheckWidth(750)

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