import React, { useEffect, useState ,useRef} from 'react';
import './App.css';
import Topbar from './components/Topbar/Topbar';
import Messagehead from './components/Messagehead/Messagehead';
import Footer from './components/Footer/Footer';
import Newsletter from './components/Newsletter/Newsletter';
import Blog from './components/Blog/Blog';
import Fluid from './components/fluid-cursor/Fluid';
import Carousel from './components/Carousel/Carousel';
import Events from './components/Events/Events';
import GoTop from './components/GoTop/GoTop';

function App() {
  const imageUrls = [
    './Images/7.jpg',
    './Images/1.jpg',
    './Images/2.jpg',
    './Images/3.jpg',
    './Images/4.jpg',
    './Images/5.jpg',
    './Images/6.jpg',
  ];

  const [scrollPosition, setScrollPosition] = useState(0);
  const [showGoTop, setshowGoTop] = useState('goTopHidden');

  const refScrollUp = useRef();

  const handleScrollUp = () => {
    refScrollUp.current.scrollIntoView({ behaviour: 'smooth' });
  };

  const handleVisibleButton = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
    if (scrollPosition > 50) {
      return setshowGoTop('goTop');
    } else if (scrollPosition < 50) {
      return setshowGoTop('goTopHidden');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleVisibleButton);
  }, []);


  return (
    <div className='main-body_'>
      <Topbar />
      <Messagehead />
      <Carousel imageUrls={imageUrls} />
      <GoTop showGoTop={showGoTop} scrollUp={handleScrollUp}/>
      <Blog />
      <Events />
      <Fluid />
      <Newsletter />
      <Footer />

    </div>
  );
}

export default App;
