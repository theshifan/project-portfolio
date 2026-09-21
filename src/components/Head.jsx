import React from 'react'
import logo from '../assets/images/shifanlogo.png'
import rec from "../assets/images/recuiter.jpeg"
import Developer from "../assets/images/Developer.jpeg"
import { Link, useLocation } from 'react-router-dom'

function Head() {
    const location = useLocation();

  const role = location.state?.role || 'recruiter';

  const image = {
    recruiter: rec,
    developer: Developer,
    // stalker: Stalker,
    // explorer: Explorer
  };

  const selectedpic = image[role] || Recuiter;

  return (
    <header>
    <div class="netflixLogo">
      <Link id="logo" to={'/home'}><img src={logo} alt="Logo Image"/></Link>
    </div>      
    <nav class="main-nav"> 
      <Link to={'/home'}>Home</Link>  
      <Link to={'/about'}>About</Link>              
      <Link to={'/skills'}>Skills</Link>
      <Link to={'/project'}>Projects</Link>
      <Link to={'/contactme'}>Contact me</Link>
      {/* <a href="#movies">Skills</a> */}
      {/* <a href="#">Contact me</a> */}
    </nav>
    <nav class="sub-nav">
      <a href="#"><i class="fas fa-search sub-nav-logo"></i></a>
      {/* <a href="#"><i class="fas fa-bell sub-nav-logo"></i></a> */}
      <Link to={'/'}><img id='accountrec' src={selectedpic} alt="recuiter" /></Link>
        
    </nav>      
  </header>
  )
}
export default Head