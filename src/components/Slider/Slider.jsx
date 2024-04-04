import React, { useState, useEffect } from 'react';
import './Slider.css';

const Slider = ( {imageUrls}) => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const checkNext = () => {
      const labels = document.querySelectorAll('#slider label');
      const nextIndex = selectedIndex === labels.length - 1 ? 0 : selectedIndex + 1;
      setSelectedIndex(nextIndex);
    };
  
    const check = (index) => setSelectedIndex(index);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        checkNext();
      }, 3000); // Change the interval duration as needed (5000 milliseconds = 5 seconds)
  
      return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  
    }, [selectedIndex]); // Include selectedIndex in the dependency array to re-run the effect when selectedIndex changes
  

    return (
      <div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          <div className="md:w-1/4 py-64 md:mb-0 mb-6 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-500 mb-5 flex-shrink-0">
            
            </div>
          </div>
          <div className="md:w-2/4 md:mb-0 mb-6 flex flex-col text-center items-center">
            <section
              id="slider"
              className="w-16 h-20 inline-flex items-center justify-center mb-5 flex-shrink-0"
            >
              <input
                type="radio"
                name="slider"
                id="s1"
                checked={selectedIndex === 0}
                onClick={() => check(0)}
              />
              <input 
                type="radio" 
                name="slider" 
                id="s2" 
                checked={selectedIndex === 1}
                onClick={() => check(1)}
              />
              <input
                type="radio"
                name="slider"
                id="s3"
                checked={selectedIndex === 2}
                onClick={() => check(2)}
              />
              <label htmlFor="s1" id="slide1">
                <img className="fea" src={`${imageUrls[1]}`} height="100%" width="100%"/>
              </label>
              <label htmlFor="s2" id="slide2">
                <img className="fea" src={`${imageUrls[1]}`} height="100%" width="100%"/>
              </label>
              <label htmlFor="s3" id="slide3">
                <img className="fea" src={`${imageUrls[1]}`} height="100%" width="100%"/>
              </label>
            </section>
          </div>
          <div className="md:w-1/4 py-64 md:mb-0 mb-6 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-500 mb-5 flex-shrink-0">
              
            </div>
          </div>
        </div>
      </div>
  );
};

export default Slider;
