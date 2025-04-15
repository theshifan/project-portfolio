import React from 'react'
import logo from '../assets/images/shifanlogo.png'
import rec from "../assets/images/recuiter.jpeg"
import { Link } from 'react-router-dom'

function Head() {
  return (
    <header>
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
      <Link to={'/index'}><img id='accountrec' src={rec} alt="recuiter" /></Link>
        
    </nav>      
  </header>
  )
}
export default Head