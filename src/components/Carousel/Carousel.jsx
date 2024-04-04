import React, { useState, useEffect } from 'react';
import './Carousel.css';
import Slider from '../Slider/Slider';


const Carousel = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
const [translate, setTranslate] = useState(0)
const handleNextClick = () => {
  setTranslate((prevTranslate) => (prevTranslate < 848 ? prevTranslate + 212 : 0));
};

const handlePrevClick = () => {
  setTranslate((prevTranslate) => (prevTranslate === 0 ? 848 : prevTranslate - 212));
};
const check = index => setSelectedIndex(index);


const checkNext = () => {
  const labels = document.querySelectorAll('#slider label');
  const nextIndex = selectedIndex === (labels.length - 1) ? 0 : selectedIndex + 1; 
  setSelectedIndex(nextIndex);
}
const imageUrls = [
  './Images/7.jpg',
  './Images/2.jpg',
  './Images/3.jpg',
  './Images/4.jpg',
  './Images/5.jpg',
  './Images/6.jpg',
];

const randomImageUrl = imageUrls[Math.floor(Math.random() * imageUrls.length)];
console.log(randomImageUrl)
  return (
    <div className='carousel-wrapper'>
       
      <div className="container">
      <div  id="slide" className='mini-slider'>
     <Slider imageUrls={randomImageUrl}/>
       </div>

      <div className="content">
          <div className="name">Career Workshops </div>
          <div className="des">
            Through training workshops and career guidance, we equip students with the needed skills for their project work and their careers
          </div>
          <button className='gradient-border-button'>See more</button>
       </div>
      
      </div>
    </div>
  );
};

export default Carousel;
