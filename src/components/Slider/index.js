import React from 'react';

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

import PantallaInicial from '../../img/PantallaInicial1.png';
import PantallaInicial2 from '../../img/PantallaInicial2.png';
import PantallaInicial3 from '../../img/PantallaInicial3.png';

import './index.css';

const Slider = () => (
  <AwesomeSlider 
    fillParent
    bullets={false}
  >
    <div data-src={PantallaInicial} className="img-slider">
    </div>

    <div data-src={PantallaInicial2}></div>

    <div data-src={PantallaInicial3}>3</div>

  </AwesomeSlider>
);

export default Slider;