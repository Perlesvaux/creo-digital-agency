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

//import portfolio2025_back   from '/creo-digital-agency/static/portfolio2025_back.png';
//import portfolio2025_front  from '/creo-digital-agency/static/portfolio2025_front.png';
//import impactrecords_banner from '/creo-digital-agency/static/impactrecords_banner.png';
//import impactrecords_1      from '/creo-digital-agency/static/impactrecords_1.png';
//import impactrecords_2      from '/creo-digital-agency/static/impactrecords_2.png';
//import impactrecords_3      from '/creo-digital-agency/static/impactrecords_3.png';
//import impactrecords_4      from '/creo-digital-agency/static/impactrecords_4.png';
//import impactrecords_5      from '/creo-digital-agency/static/impactrecords_5.png';
//import impactrecords_6      from '/creo-digital-agency/static/impactrecords_6.png';
//import impactrecords_7      from '/creo-digital-agency/static/impactrecords_7.png';
//import impactrecords_8      from '/creo-digital-agency/static/impactrecords_8.png';
//import impactrecords_9      from '/creo-digital-agency/static/impactrecords_9.png';
//import taber_banner         from '/creo-digital-agency/static/taber_banner.png';
//import taber_1              from '/creo-digital-agency/static/taber_1.png';
//import taber_2              from '/creo-digital-agency/static/taber_2.png';
//import taber_3              from '/creo-digital-agency/static/taber_3.png';
//import taber_4              from '/creo-digital-agency/static/taber_4.png';
//import taber_5              from '/creo-digital-agency/static/taber_5.png';
//import taber_6              from '/creo-digital-agency/static/taber_6.jpg';
//import taber_7              from '/creo-digital-agency/static/taber_7.png';
//import taber_8              from '/creo-digital-agency/static/taber_8.png';
//import taber_9              from '/creo-digital-agency/static/taber_9.png';
//import taber_10             from '/creo-digital-agency/static/taber_10.png';
//import taber_11             from '/creo-digital-agency/static/taber_11.png';
//import taber_12             from '/creo-digital-agency/static/taber_12.png';
//import taber_13             from '/creo-digital-agency/static/taber_13.png';
//import taber_14             from '/creo-digital-agency/static/taber_14.png';
//import taber_15             from '/creo-digital-agency/static/taber_15.png';
//import taber_16             from '/creo-digital-agency/static/taber_16.png';
//import taber_17             from '/creo-digital-agency/static/taber_17.png';
//import tufuturacasa_banner  from '/creo-digital-agency/static/tufuturacasa_banner.png';
//import tufuturacasa_1       from '/creo-digital-agency/static/tufuturacasa_1.png';
//import tufuturacasa_2       from '/creo-digital-agency/static/tufuturacasa_2.png';
//import tufuturacasa_3       from '/creo-digital-agency/static/tufuturacasa_3.png';
//import tufuturacasa_4       from '/creo-digital-agency/static/tufuturacasa_4.png';
//import tufuturacasa_5       from '/creo-digital-agency/static/tufuturacasa_5.png';
//import tufuturacasa_6       from '/creo-digital-agency/static/tufuturacasa_6.png';
//import tufuturacasa_7       from '/creo-digital-agency/static/tufuturacasa_7.png';
//import tufuturacasa_8       from '/creo-digital-agency/static/tufuturacasa_8.png';
//import tufuturacasa_9       from '/creo-digital-agency/static/tufuturacasa_9.png';
//import bc_banner            from '/creo-digital-agency/static/bc_banner.png';
//import bc_1                 from '/creo-digital-agency/static/bc_1.png';
//import bc_2                 from '/creo-digital-agency/static/bc_2.png';
//import bc_3                 from '/creo-digital-agency/static/bc_3.png';
//import bc_4                 from '/creo-digital-agency/static/bc_4.png';
//import bc_5                 from '/creo-digital-agency/static/bc_5.png';
//import bc_6                 from '/creo-digital-agency/static/bc_6.png';
//import bc_7                 from '/creo-digital-agency/static/bc_7.png';
//import bc_8                 from '/creo-digital-agency/static/bc_8.png';
//import bc_9                 from '/creo-digital-agency/static/bc_9.png';



// Example usage
const showreel_2025 = () => {

  const items =  [
    <img key="1" src={showreelFront2025} alt="Showreel 2025 Front" />,
    <video key="2" src={showreelVideo2025} controls poster={showreelFront2025} />,
    <img key="3" src={showreelBack2025} alt="Showreel 2025 Back" />,
  ];

  return <Card key="1" thumb={showreelFront2025} items={items} />
};


export const deeds = [
  showreel_2025(),

]

