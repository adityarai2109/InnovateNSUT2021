import React, {Component} from 'react';

import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import './App.css';
import image1 from './images/img1.jpg';
import image2 from './images/img2.jpg';
import image3 from './images/img3.jpg';
import image4 from './images/img4.jpg';


export default function ImageCarousel() {
    return (
      <div className="sliders">
       <AliceCarousel autoPlay autoPlayInterval="1000">
        <img src={image1} className="sliderimg" alt=""/>
        <img src={image2} className="sliderimg" alt=""/>
        <img src={image3} className="sliderimg" alt=""/>
        <img src={image4} className="sliderimg" alt=""/>
      </AliceCarousel>
      </div>
    );
  }

  