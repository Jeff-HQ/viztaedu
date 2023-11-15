import React, { useState } from 'react';


const Fluid = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const renderDots = (numDots) => {
    const dots = [];
    for (let i = 0; i < numDots; i++) {
      dots.push(<div key={i} className={`dot ${isHovered ? 'hovered' : ''}`}></div>);
    }
    return dots;
  };

  return (
    <div
      className="dotted-pattern"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {renderDots(100)} {/* Adjust the number of dots as needed */}
    </div>
  );
};

export default Fluid;
