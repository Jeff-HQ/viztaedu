import React, { useState } from 'react';
import './Carousel.css';

const Carousel = ({ imageUrls }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleNextClick = () => {
      setActiveIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % imageUrls.length;
        console.log('Next Click - New Index:', newIndex);
        return newIndex;
      });
    };
  
    const handlePrevClick = () => {
      setActiveIndex((prevIndex) => {
        const newIndex = (prevIndex - 1 + imageUrls.length) % imageUrls.length;
        console.log('Prev Click - New Index:', newIndex);
        return newIndex;
      });
    };

  return (
    <div className='carousel-wrapper'>
      <div className="container">
        <div id="slide">
          {imageUrls.map((imageUrl, index) => (
            <div
              key={index}
              className={`item ${index === activeIndex ? 'active' : ''}`}
              style={{ backgroundImage: `url(${imageUrl})` }}
            >
              <div className="content">
                <div className="name">Career Workshops </div>
                <div className="des">
                  Through training workshops and career guidance, we equip students with the needed skills for their project work and their careers
                </div>
                <button className='gradient-border-button'>See more</button>
              </div>
            </div>
          ))}
        </div>
        <div className="buttons">
          <button id="prev" onClick={handlePrevClick}>
            <i className="fas fa-angle-left"></i>
          </button>
          <button id="next" onClick={handleNextClick}>
            <i className="fas fa-angle-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
