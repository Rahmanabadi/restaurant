import React, { useEffect, useRef } from 'react';
import './GridSection.css';

const GridSection = () => {
  const gridRef = useRef(null);
  const gridRef2 = useRef(null);

  useEffect(() => {
    
    const handleScroll = () => {
      const gridSection = gridRef.current;
      const gridSection2 = gridRef2.current;

      if (gridSection) { 
        const triggerPoint = window.innerHeight / 1.3;
        if (gridSection.getBoundingClientRect().top < triggerPoint) {
          gridSection.classList.add('visible');
        }
      }

      if (gridSection2) { 
        const triggerPoint2 = window.innerHeight / 1.3;
        if (gridSection2.getBoundingClientRect().top < triggerPoint2) {
          gridSection2.classList.add('visible');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="">
      <h1 className=" grid-container" ref={gridRef}>Unsere besten Gerichte</h1>
      <div className="container grid-container" ref={gridRef2}>
        <div className="row">
          {Array.from({ length: 4 }, (_, i) => (
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 mb-4" key={i}>
              <div className="grid-item">
                <img src={`/dish${i + 1}.jpg`} alt={`Item ${i + 1}`} className="img-fluid dishes" />
                <p>Gericht {i + 1}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

};

export default GridSection;
