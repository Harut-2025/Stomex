import React from 'react';
import { Carousel } from 'antd';
import './Carousel.css'
const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const Carusel = () => (
  <Carousel autoplay>
      <div className='caruselDiv'>

      </div>
      <div className='caruselDiv'>
        
      </div>
      <div className='caruselDiv'>
        
      </div>
      <div className='caruselDiv'>
        
      </div>
  </Carousel>
);
export default Carusel;