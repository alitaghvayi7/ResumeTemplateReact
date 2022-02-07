import './Intro.scss';
import { init } from 'ityped';
import { useRef,useEffect } from 'react';
export default function Intro() {

  const mySpan = useRef();

  useEffect(()=>{
    init(mySpan.current, { showCursor: false, strings: ['Developer', 'Programmer'] })
  },[])

  return (
    <div className='intro' id='intro'>
      <div className="leftIntro">
        <div className="imageContainer">
          <img src="assets/man.png" alt="" />
        </div>
      </div>
      <div className="rightIntro">
        <div className="rightIntroWrapper">
          <h2>Hi There I`m</h2>
          <h1>Ali Taghvayi</h1>
          <h3>Frontend <span ref={mySpan}></span></h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
    );
}
