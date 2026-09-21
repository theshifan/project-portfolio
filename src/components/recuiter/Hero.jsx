
import React from 'react';

import { useLocation } from 'react-router-dom';

import './css/HeroSection.css';

import Recuiter from '../../assets/images/RecuiterHero.mp4';
import Developer from '../../assets/images/developers.mp4';
// import Stalker from '../../assets/images/StalkerHero.mp4';
// import Explorer from '../../assets/images/ExplorerHero.mp4';


function Hero() {

  const location = useLocation();

  const role = location.state?.role || 'recruiter';

  const videos = {
    recruiter: Recuiter,
    developer: Developer,
    // stalker: Stalker,
    // explorer: Explorer
  };

  const selectedVideo = videos[role] || Recuiter;

  return (

    <div>

      <div className='tophead' id='about'>

        <div className="darkmodevideo"></div>

        <video
          src={selectedVideo}
          autoPlay
          loop
          muted
          playsInline
        ></video>

        <div className="hero">

          <div className="overlay">

            <h1>Shifan Abdulla - Python Fullstack Developer</h1>

            <p>
              I am a Full Stack Developer with 1 year of hands-on experience,
              aiming to build efficient and user-focused applications.
              I am committed to continuous.......
            </p>

            <div className="buttons">

              <a
                href="https://drive.google.com/file/d/1DcnadyuBuYnzc1VMvoRf0F6Hb3gLySIH/view?usp=drive_link"
              >
                <button className="linkedin-btn">
                  ▶ Resume
                </button>
              </a>

              <a
                href="https://www.linkedin.com/in/shifan-abdulla-/"
              >
                <button className="linkedin-btn">
                  LinkedIn
                </button>
              </a>

            </div>

          </div>

        </div>

      </div>

    </div>

  );
}

export default Hero;