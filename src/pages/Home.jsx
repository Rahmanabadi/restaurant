import React, { useEffect, useRef } from 'react';
import './CSS/Home.css';
import Slider from '../components/Slider/Slider';
import GridSection from '../components/GridSection/GridSection';
import ImageTextSection from '../components/GridSection/ImageTextSection';
import IconGrid from '../components/IconGrid/IconGrid';

const Home = () => {
  const gridRef = useRef(null);
  const imageTextRef = useRef(null);
  const iconsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const gridSection = gridRef.current;
      const imageTextSection = imageTextRef.current;
      const iconsSection = iconsRef.current;
      const triggerPoint = window.innerHeight / 1.3;

      if (gridSection.getBoundingClientRect().top < triggerPoint) {
        gridSection.classList.add('visible');
      }
      if (imageTextSection.getBoundingClientRect().top < triggerPoint) {
        imageTextSection.classList.add('visible');
      }
      if (iconsSection.getBoundingClientRect().top < triggerPoint) {
        iconsSection.classList.add('visible');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <Slider />
      <div ref={gridRef}>
        <GridSection />
      </div>
      <div ref={imageTextRef}>
        <ImageTextSection />
      </div>
      <div className="icon-section" ref={iconsRef}>
        <IconGrid />
      </div>
    </div>
  );
};

export default Home;

