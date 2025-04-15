import React from 'react';
import './HeroSection.css';
import dev from '../assets/images/Developer.jpeg'
import logo from '../assets/images/shifanlogo.png'
import { Link } from 'react-router-dom';


function DevopHeros() {
  return (
    <div>
         {/* -------------------------- header part----------------------------  */}
        <div> <header>
    <div class="netflixLogo">
      <a id="logo" href="#home"><img src={logo} alt="Logo Image"/></a>
    </div>      
    <nav class="main-nav"> 
      <Link to={'/home'}>Home</Link>               
      <a href="#about">About</a>
      <a href="#movies">Skills</a>
      <a href="#originals">Projects</a>
      <a href="#">Contact me</a>
    </nav>
    <nav class="sub-nav">
      <a href="#"><i class="fas fa-search sub-nav-logo"></i></a>
      <a href="#"><i class="fas fa-bell sub-nav-logo"></i></a>
      <Link to={'/index'}><img id='accountrec' src={dev} alt="recuiter" /></Link>
        
    </nav>      
  </header>
  </div>
  {/* -----------------hero part------------------- */}
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
  )
}

export default DevopHeros