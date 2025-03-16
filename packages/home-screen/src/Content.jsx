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
    <img key="1" src={showreelFront2024} alt="Showreel 2025 Front" />,
    <video key="2" src={showreelVideo2024} controls poster={showreelFront2024} />,
    <img key="3" src={showreelBack2024} alt="Showreel 2025 Back" />,
  ];

  return <Card key="1" thumb={showreelFront2024} items={items} />
};


export const deeds = [
  showreel_2025(),
  showreel_2024(),

]

