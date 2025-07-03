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
        rcComplex: 'ЖК Terra',
        gridColumn: '1 / 2',
        gridRow: '1 / 7',
    },
    {
        img: img2,
        city: 'Алматы',
        rcComplex: 'ЖК Terra',
        gridColumn: '1 / 2',
        gridRow: '7 / 13',
    },
    {
        img: img3,
        city: 'Алматы',
        rcComplex: 'ЖК Terra',
        gridColumn: '2 / 4',
        gridRow: '1 / 5',
    },
    {
        img: img4,
        city: 'Алматы',
        rcComplex: 'ЖК Terra',
        gridColumn: '2 / 4',
        gridRow: '5 / 9',
    },
    {
        img: img5,
        city: 'Алматы',
        rcComplex: 'ЖК Terra',
        gridColumn: '2 / 4',
        gridRow: '9 / 13',
    },
    {
        img: img6,
        city: 'Алматы',
        rcComplex: 'ЖК Terra',
        gridColumn: '4 / 5',
        gridRow: '1 / 7',
    },
    {
        img: img7,
        city: 'Алматы',
        rcComplex: 'ЖК Terra',
        gridColumn: '4 / 5',
        gridRow: '7 / 13',
    }
]

export default function ProjectsSection() {
    return (
        // <div className="projects-container">
        //   <div className="grid-gallery">
        //     {cardArr.map((value, index) => (

        //     <div key={index} className={`grid-item ${value.classname}`} >
        //         <img src={value.img} alt="" />
        //         <div className="overlay-text">
        //             <div className="overlay-text_city">
        //                 {value.city}
        //             </div>
        //             <div className="overlay-text_name">
        //                 {value.rcComplex}
        //             </div>
        //         </div>
        //     </div>
        //     ))}
        //   </div>
        // </div>

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
                
            <div className="project-overlay"><div className="overlay-text_city">
                        {value.city}
                     </div>
                     <div className="overlay-text_name">
                        {value.rcComplex}
                     </div></div>
            </div>
        ))}
        </div>
    )
}