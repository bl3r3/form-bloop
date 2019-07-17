import React from 'react';

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

import './index.css';

const Slider = () => (
  <AwesomeSlider 
    fillParent
    startup={false}
    bullets={false}
  >
    <div data-src="/path/to/image-0.png">
        <p className="parrafo">BRANDIND FOR</p>
        <p className="parrafo">AMAZING PEOPLE</p>
    </div>

    <div color="blue">2</div>

    <div color="orange">3</div>

    <div color="white">4</div>
  </AwesomeSlider>
);

export default Slider;