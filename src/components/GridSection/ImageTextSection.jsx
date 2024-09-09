import React, { useEffect, useRef } from 'react';
import './GridSection.css';

const ImageTextSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      const sectionTop = section.getBoundingClientRect().top;
      const triggerPoint = window.innerHeight / 1.3;

      if (sectionTop < triggerPoint) {
        section.classList.add('visible');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="image-block imageAndText" ref={sectionRef}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 imageTextContent">
            <div className="image">
              <img src={`/owner.jpg`} alt="Image 2" className="img-fluid" />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 imageTextContent">
            <div className="text-block">
              <h1>Willkommen in unserem Restaurant</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel lorem nec eros ultricies ultricies vel eu ipsum
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel lorem nec eros ultricies ultricies vel eu ipsum
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel lorem nec eros ultricies ultricies vel eu ipsum
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel lorem nec eros ultricies ultricies vel eu ipsum
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel lorem nec eros ultricies ultricies vel eu ipsum.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageTextSection;
