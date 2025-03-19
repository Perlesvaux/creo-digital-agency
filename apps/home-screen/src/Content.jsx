//import Card from './Card.jsx'
import { Card } from 'shared'

//const STATIC_ASSETS = `/assets/gallery/`
//const STATIC_ASSETS = `/`
//const STATIC_ASSETS = `/static`
//const STATIC_ASSETS = `/CREO/static`
//const STATIC_ASSETS = `/CREO-agencia-digital/static`
//const STATIC_ASSETS = `/creo-digital-agency/static`

import showreelFront2025    from '/creo-digital-agency/static/showreel_2025/front.png'; 
import showreelBack2025     from '/creo-digital-agency/static/showreel_2025/back.png';
import showreelVideo2025    from '/creo-digital-agency/static/showreel_2025/video.mp4';
import showreelFront2024    from '/creo-digital-agency/static/showreel_2024/front.png'; 
import showreelBack2024     from '/creo-digital-agency/static/showreel_2024/back.png';
import showreelVideo2024    from '/creo-digital-agency/static/showreel_2024/video.mp4';
import showreelFront2023    from '/creo-digital-agency/static/showreel_2023/front.png'; 
import showreelBack2023     from '/creo-digital-agency/static/showreel_2023/back.png';
import showreelVideo2023    from '/creo-digital-agency/static/showreel_2023/video.mp4';
import showreelFront2022    from '/creo-digital-agency/static/showreel_2022/front.png'; 
import showreelVideo2022    from '/creo-digital-agency/static/showreel_2022/video.mp4'; 
import showreelFront2021    from '/creo-digital-agency/static/showreel_2021/front.png'; 
import showreelBack2021     from '/creo-digital-agency/static/showreel_2021/back.png';
import showreelVideo2021    from '/creo-digital-agency/static/showreel_2021/video.mp4';
import showreelFront2020    from '/creo-digital-agency/static/showreel_2020/front.png'; 
import showreelBack2020     from '/creo-digital-agency/static/showreel_2020/back.png';
import showreelVideo2020    from '/creo-digital-agency/static/showreel_2020/video.mp4';
import showreelFront2016    from '/creo-digital-agency/static/showreel_2016/front.png'; 
import showreelBack2016     from '/creo-digital-agency/static/showreel_2016/back.png';
import showreelVideo2016    from '/creo-digital-agency/static/showreel_2016/video.mp4';


const showreel_2025 = () => {

  const items =  [
    <img key="1" src={showreelFront2025} alt="Showreel 2025 Front" />,
    <video key="2" src={showreelVideo2025} controls poster={showreelFront2025} />,
    <img key="3" src={showreelBack2025} alt="Showreel 2025 Back" />,
  ];

  return <Card key="1" thumb={showreelFront2025} items={items} />
};

const showreel_2024 = () => {

  const items =  [
    <img key="1" src={showreelFront2024} alt="Showreel 2024 Front" />,
    <video key="2" src={showreelVideo2024} controls poster={showreelFront2024} />,
    <img key="3" src={showreelBack2024} alt="Showreel 2024 Back" />,
  ];

  return <Card key="1" thumb={showreelFront2024} items={items} />
};

const showreel_2023 = () => {

  const items =  [
    <img key="1" src={showreelFront2023} alt="Showreel 2023 Front" />,
    <video key="2" src={showreelVideo2023} controls poster={showreelFront2023} />,
    <img key="3" src={showreelBack2023} alt="Showreel 2023 Back" />,
  ];

  return <Card key="1" thumb={showreelFront2023} items={items} />
};

const showreel_2022 = () => {
  const items = [
    <img key="1" src={showreelFront2022} alt="Showreel 2022 Front" />, 
    <video key="2" src={showreelVideo2022} controls poster={showreelFront2022} alt="Showreel 2022 video" />, 
  ];

  return <Card key="1" thumb={showreelFront2022} items={items} desc="Showreel 2022" />
}

const showreel_2021 = () => {

  const items =  [
    <img key="1" src={showreelFront2021} alt="Showreel 2021 Front" />,
    <video key="2" src={showreelVideo2021} controls poster={showreelFront2021} />,
    <img key="3" src={showreelBack2021} alt="Showreel 2021 Back" />,
  ];

  return <Card key="1" thumb={showreelFront2021} items={items} />
};

const showreel_2020 = () => {

  const items =  [
    <img key="1" src={showreelFront2020} alt="Showreel 2020 Front" />,
    <video key="2" src={showreelVideo2020} controls poster={showreelFront2020} />,
    <img key="3" src={showreelBack2020} alt="Showreel 2020 Back" />,
  ];

  return <Card key="1" thumb={showreelFront2020} items={items} />
};

const showreel_2016 = () => {

  const items =  [
    <img key="1" src={showreelFront2016} alt="Showreel 2016 Front" />,
    <video key="2" src={showreelVideo2016} controls poster={showreelFront2016} />,
    <img key="3" src={showreelBack2016} alt="Showreel 2016 Back" />,
  ];

  return <Card key="1" thumb={showreelFront2016} items={items} />
};

export const deeds = [
  showreel_2025(),
  showreel_2024(),
  showreel_2023(),
  showreel_2022(),
  showreel_2021(),
  showreel_2020(),
  showreel_2016(),

]

