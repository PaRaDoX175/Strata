import React from 'react';

import s from './AboutUs.module.css'
import NavBar from '../../global-components/NavBar/NavBar';
import AboutUsImg from "/src/assets/2.jpg"
import AboutUsImg2 from "/src/assets/About_us_2.jpg"
import AboutUsImg3 from "/src/assets/Partners.svg"
import Start from "/src/assets/Start.svg"
import Middle from "/src/assets/Middle.svg"
import End from "/src/assets/End.svg"
import Logo from "/src/assets/Strata_mini_logo.svg"

import Svg1 from "/src/assets/left/1.svg"
import Svg2 from "/src/assets/left/2.svg"
import Svg3 from "/src/assets/left/3.svg"
import Svg4 from "/src/assets/left/4.svg"
import Svg5 from "/src/assets/left/5.svg"
import Svg6 from "/src/assets/left/6.svg"
import Svg7 from "/src/assets/left/7.svg"
import Svg8 from "/src/assets/left/8.svg"


import Svg11 from "/src/assets/right/1.svg"
import Svg12 from "/src/assets/right/2.svg"
import Svg13 from "/src/assets/right/3.svg"
import Svg14 from "/src/assets/right/4.svg"
import Svg15 from "/src/assets/right/5.svg"
import Svg16 from "/src/assets/right/6.svg"

const ABOUT_US = [{
    id: 1, text: (<>
        <span className={s['about-us__text--bold']}>STRATA</span> — архитектурное бюро полного цикла, лидирующее в
        инновациях строительной индустрии более 20 лет.
    </>),
}, {
    id: 2, text: <>
        <span className={s['about-us__text--extra-bold']}>· </span>Мы спроектировали свыше 20 млн м², используя BIM
        и сертификации LEED, BREEAM.
    </>
}, {
    id: 3, text: <>
        <span className={s['about-us__text--extra-bold']}>· </span>За экологичный и устойчивый дизайн получили
        международные награды.
    </>

}, {
    id: 4,
    text: "Архитектура формирует будущее и улучшает мир. Воплотим ваше видение и создадим позитивное воздействие на окружающую среду."
},]
const ABOUT_US_2 = [{
    id: 1, text: <>
        <p><span className={s['about-us__text--bold']}> Философия STRATA</span> — не просто про строительство.
            Ценя <span className={s['about-us__text--underline']}>технологии, устойчивость, ответственность </span> и <span
                className={s['about-us__text--underline']}>клиентоориентированность</span>, мы создаём по всему
            миру эстетичные, экономичные и экологичные
            пространства. Так мы строим надёжное сегодня для лучшего завтра.
        </p>
    </>
}]

const TIMELINE = [
    {year: 2004, info: "Основание компании"},
    {year: 2006, info: "Первый крупный проект"},
    {year: 2009, info: "Выход на международный рынок"},
];

const SVG_SLIDER_LEFT = [
    {id: 1, svg: Svg1},
    {id: 2, svg: Svg2},
    {id: 3, svg: Svg3},
    {id: 4, svg: Svg4},
    {id: 5, svg: Svg5},
    {id: 6, svg: Svg6},
    {id: 7, svg: Svg7},
    {id: 8, svg: Svg8},
    {id: 9, svg: Svg1},
    {id: 10, svg: Svg2},
    {id: 11, svg: Svg3},
    {id: 12, svg: Svg4},
    {id: 13, svg: Svg5},
    {id: 14, svg: Svg6},
    {id: 15, svg: Svg7},
    {id: 16, svg: Svg8},
]

const SVG_SLIDER_RIGHT = [
    {id: 1, svg: Svg11},
    {id: 2, svg: Svg12},
    {id: 3, svg: Svg13},
    {id: 4, svg: Svg14},
    {id: 5, svg: Svg15},
    {id: 6, svg: Svg16},
    {id: 7, svg: Svg11},
    {id: 8, svg: Svg12},
    {id: 9, svg: Svg13},
    {id: 10, svg: Svg14},
    {id: 11, svg: Svg15},
    {id: 12, svg: Svg16},
]

export default function AboutUs() {
    return (
        <div className={s['about-us-wrapper']}>
          <NavBar img="/src/assets/Logo.svg" colorText="white"/>
              <div className={s['wrapper']}>
    <div className={s['container'] + ' ' + s['main-section']}>
      <div className={s['about-us__content']}>
        {ABOUT_US.map(({ id, text }) => (
          <p className={s['about-us__text']} key={id}>{text}</p>
        ))}
      </div>
      <div className={s['about-us__img']}>
        <img src={AboutUsImg} />
      </div>
    </div>
  </div>

  <div className={s['wrapper']}>
    <div className={`${s['container']} ${s['direction-row']} ${s['philosophy-section']} ${s['background-color-blue']}`}>
      <div className={s['about-us__img--philosophy']}>
        <img className={s['about-us__img--polygon']} src={AboutUsImg2} />
        <img className={s['about-us__img--logo-position']} src={Logo} />
      </div>
      <div className={s['about-us__inner']}>
        {ABOUT_US_2.map(({ text }, idx) => (
          <React.Fragment key={idx}>{text}</React.Fragment>
        ))}
      </div>
    </div>
  </div>

  <div className={`${s['container']} ${s['desktop-only']}`}>
    <img src={AboutUsImg3} />
  </div>

  <div className={`${s['container--mobile']} ${s['mobile-only']}`}>
    <div className={s['slider']}>
      <div className={s['slide-container__left']}>
        {SVG_SLIDER_LEFT.map(({ id, svg }) => (
          <div className={s['slide-left']} key={id}>
            <img className={s['left']} src={svg} />
          </div>
        ))}
      </div>
    </div>
    <div className={s['slider']}>
      <div className={s['slide-container__right']}>
        {SVG_SLIDER_RIGHT.map(({ id, svg }) => (
          <div className={s['slide-right']} key={id}>
            <img className={s['right']} src={svg} />
          </div>
        ))}
      </div>
    </div>
  </div>

  <div className={s['wrapper']}>
    <div className={`${s['container']} ${s['position-center']}`}>
      <div className={s['timeline-wrapper']}>
        <div className={`${s['timeline-container']} ${s['direction-row']}`}>
          <div className={s['timeline-img']}>
            <img src={Start} />
          </div>
          <div className={s['timeline-img']}>
            <img src={Middle} />
          </div>
          <div className={s['timeline-img']}>
            <img src={End} />
          </div>
        </div>
        <div className={`${s['direction-row']} ${s['timeline-years']}`}>
          <h3>2008</h3>
          <h3>2010</h3>
          <h3>2012</h3>
        </div>
      </div>
    </div>
  </div>

</div>

    )
}