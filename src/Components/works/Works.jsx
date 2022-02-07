import './Work.scss';
import { useState } from 'react';

export default function Works() {

  const [slider, setSlider] = useState(0);

  const handlePrev = (e) =>{
    const index = slider-1 < 0 ? 3 : slider-1;
    setSlider(index);
  }
  const handleNext = (e) => {
    const index = slider+1 > 3 ? 0 :slider+1;
    setSlider(index); 
  }

  return (<div className='works' id='works'>
    <div className="worksSlider">
      <div className="sliderContainer" style={{left : `-${slider*100}%`}}>
        <div className="sliderItem">
          <img src="assets/slider1.png" alt="" />
        </div>
        <div className="sliderItem">
          <img src="assets/slider2.png" alt="" />
        </div>
        <div className="sliderItem">
          <img src="assets/slider3.png" alt="" />
        </div>
        <div className="sliderItem">
          <img src="assets/slider4.png" alt="" />
        </div>
      </div>
    </div>
    <button className='prevSliderBtn' onClick={handlePrev}>
      <img src="assets/arrow.png" alt="" />
    </button>
    <button className='nextSliderBtn' onClick={handleNext}>
      <img src="assets/arrow.png" alt="" />
    </button>
  </div>);
}
