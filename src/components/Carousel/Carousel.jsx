import React, { useState, useEffect } from 'react';
import './Carousel.css';

const Carousel = ({ imageUrls }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNextClick = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
  };

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + imageUrls.length) % imageUrls.length);
  };

  useEffect(() => {
    // Set up an interval for automatic image changes
    const intervalId = setInterval(() => {
      handleNextClick();
    }, 5000); // Change image every 5 seconds (adjust as needed)

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, [activeIndex]); // Run the effect whenever activeIndex changes

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
