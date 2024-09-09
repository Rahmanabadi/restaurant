import React from 'react';
import './Slider.css';

const Slider = () => {
  React.useEffect(() => {
    let nextBtn = document.querySelector('.next');
    let prevBtn = document.querySelector('.prev');
    let slider = document.querySelector('.slider');
    let sliderList = slider.querySelector('.list');
    let thumbnail = document.querySelector('.thumbnail');
    let thumbnailItems = thumbnail.querySelectorAll('.item');

    thumbnail.appendChild(thumbnailItems[0]);

    nextBtn.onclick = function() {
      moveSlider('next');
    }

    prevBtn.onclick = function() {
      moveSlider('prev');
    }

    function moveSlider(direction) {
      let sliderItems = sliderList.querySelectorAll('.item');
      let thumbnailItems = document.querySelectorAll('.thumbnail .item');
      
      if (direction === 'next') {
        sliderList.appendChild(sliderItems[0]);
        thumbnail.appendChild(thumbnailItems[0]);
        slider.classList.add('next');
      } else {
        sliderList.prepend(sliderItems[sliderItems.length - 1]);
        thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1]);
        slider.classList.add('prev');
      }

      slider.addEventListener('animationend', function() {
        if (direction === 'next') {
          slider.classList.remove('next');
        } else {
          slider.classList.remove('prev');
        }
      }, { once: true });
    }
  }, []);

  return (
    <div className="hero">
      <div className="slider">
        <div className="list">
          <div className="item">
            <img src="./doner1.jpg" alt="Image 1" />
            <div className="content">
              <div className="title">Beste Produktion</div>
              <div className="type">Immer</div>
              <div className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </div>
            </div>
          </div>
          <div className="item">
            <img src="./doner2.jpg" alt="Image 2" />
            <div className="content">
              <div className="title">großartige Lage</div>
              <div className="type">sehr zugänglich</div>
              <div className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </div>
            </div>
          </div>
          <div className="item">
            <img src="./doner3.jpg" alt="Image 3" />
            <div className="content">
              <div className="title">beste Nährstoffe</div>
              <div className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </div>
            </div>
          </div>
        </div>

        <div className="thumbnail">
          <div className="item"><img src="./doner1.jpg" alt="Thumbnail 1" /></div>
          <div className="item"><img src="./doner2.jpg" alt="Thumbnail 2" /></div>
          <div className="item"><img src="./doner3.jpg" alt="Thumbnail 3" /></div>
        </div>

        <div className="nextPrevArrows">
          <button className="prev"> &lt; </button>
          <button className="next"> &gt; </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
