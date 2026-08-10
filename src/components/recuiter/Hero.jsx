import React from 'react';
import './css/HeroSection.css';
import Recuiter from '../../assets/images/RecuiterHero.mp4'

function Hero() {
  return (
    <div>
<div className='tophead' id='about'>
  <div className="darkmodevideo"></div>
  <video src={Recuiter} autoPlay loop muted ></video> 
<div className="hero">
      <div className="overlay">
        <h1>Shifan Abdulla - Python Fullstack Developer</h1>
        <p>I am a Full Stack Developer with 1 year of hands-on experience, aiming to build efficient and user-focused applications. I am committed to continuous.......
          {/* I am a Full Stack Developer with 1 year of hands-on experience, aiming to build efficient and user-focused applications. I am committed to continuous learning and growing my technical skills to contribute to impactful and innovative projects. */}
          {/* You can include the full paragraph from the screenshot */}
        </p>
        <div className="buttons">  
      <a
        href="https://drive.google.com/file/d/1DcnadyuBuYnzc1VMvoRf0F6Hb3gLySIH/view?usp=drive_link"
      >
      <button className="linkedin-btn"> ▶ Resume</button>
      </a>   
      <a
    href="https://www.linkedin.com/in/shifan-abdulla-/">
  <button className="linkedin-btn"> LinkedIn </button>
    
</a>
        </div>
      </div>
    </div>
  </div>

    </div>
  );
}

export default Hero;
