import React from 'react';
import './HeroSection.css';
import Recuiter from '../assets/images/RecuiterHero.mp4'

function Hero() {
  return (
    <div>
<div className='tophead' id='about'>
  <div className="darkmodevideo"></div>
  <video src={Recuiter} autoPlay loop muted ></video> 
<div className="hero">
      <div className="overlay">
        <h1>Shifan Abdulla - Python Fullstack Developer</h1>
        <p>
          Dynamic and results-driven Senior Software Engineer with 5+ years in full-stack development...
          {/* You can include the full paragraph from the screenshot */}
        </p>
        <div className="buttons">
          <button className="play-btn">▶ Resume</button>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <button className="linkedin-btn">LinkedIn</button>
          </a>
        </div>
      </div>
    </div>
  </div>

    </div>
  );
}

export default Hero;
