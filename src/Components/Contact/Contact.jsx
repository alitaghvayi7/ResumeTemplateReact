import './Contact.scss';
import { useState,useRef } from 'react';

export default function Contact() {

  const [showMessage, setShowMessage] = useState(false);
  const EmailRef = useRef();
  const CommentRef = useRef();
  const handleSubmit = (e) =>{
    e.preventDefault();
    setShowMessage(true);
    EmailRef.current.value = "";
    CommentRef.current.value = "";
  }
  return (<div className='contact' id='contact'>
    <div className="leftContact">
      <img src="assets/shake.svg" alt="" />
    </div>
    <div className="rightContact">
      <h2>Contact.</h2>
      <form action="" className='contactForm' onSubmit={handleSubmit}>
        <input ref={EmailRef} type="email" name="email" id="email" placeholder='Your Email...'/>
        <textarea ref={CommentRef} name="message" id="message" placeholder='your Comment'></textarea>
        <button type='submit'>Send</button>
      </form>
      {showMessage && <p>THANKS FOR YOU COMMENT</p>}
    </div>
  </div>);
}
